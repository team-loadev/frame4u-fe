'use client'

import { Button, Post } from "@/components";
import { colors, Text } from "@/design-token";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Mypage() {
  const router = useRouter();

  const [profileDatas, setProfileDatas] = useState<{id : string, email : string}>({
    id: 'pjylove',
    email: 'pppppp@gmail.com'
  })

  const [myFrameDatas, setMyFrameDatas] = useState<{id: number, img : string, title: string, date: string}[]>([
    {
      id: 1,
      img: '',
      title: 'sdfgh',
      date: 'sadfghjk'
    }
  ])

  const [myPhotoStripsDatas, setMyPhotoStripsDatas] = useState<{id: number, img : string , title: string, date: string}[]>([
    {
      id: 1,
      img: '',
      title: 'sdfgh',
      date: 'sadfghjk'
    }
  ])


  const [isNav, setIsNav] = useState<boolean>(false)
  return (
    <div className="flex flex-col gap-25">
      <div className="flex gap-[70px] flex-wrap items-center">
        <div className="flex flex-col gap-3">
          <Text fontSize={24} fontWeight={700}>{profileDatas.id}</Text>
          <Text fontSize={20} fontWeight={300} color={colors.gray[500]}>{profileDatas.email}</Text>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => console.log('delete account')} backgroundColor={colors.gray[100]} hoverBackgroundColor={colors.gray[200]} color={colors.gray[900]}>Delete Account</Button>
          <Button onClick={() => console.log('log out')}>Log Out</Button>
        </div>
      </div>
      <div className="flex flex-col gap-11">
        <div className="flex items-center gap-3">
          <Text isCursor fontSize={16} onClick={() => setIsNav(false)} fontWeight={isNav ? 500 : 700}>My Frames</Text>
          <Text fontSize={16}>|</Text>
          <Text isCursor fontSize={16} onClick={() => setIsNav(true)} fontWeight={isNav ? 700 : 500}>My Photo Strips</Text>
        </div>
        <div className="flex flex-wrap gap-4">
          {isNav ? (
            myPhotoStripsDatas.map((data) => (
              <Post onClick={() => router.push(`/my-photo/${data.id}`)} key={data.id} title={data.title} img={data.img} date={data.date}/>
            ))
          ) : (
            myFrameDatas.map((data) => (
              <Post onClick={() => router.push(`/my-frame/${data.id}`)} key={data.id} title={data.title} img={data.img} date={data.date}/>
            ))
          )
          }
        </div>
      </div>
    </div>
  )
}