'use client'

import { Button, FrameImgSelector, Inputs } from "@/components";
import { colors, Text } from "@/design-token";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function FrameMake () {
  const router = useRouter()
  const [datas, setDatas] = useState<{title : string, img: string| null}>({
    title: '',
    img: null
  })

  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({...prev, title: e.target.value}))
  },[])

  const handleImgChange = useCallback((url: string | null) => {
    setDatas((prev) => ({...prev, img: url}))
  },[])

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-between flex-wrap gap-2 ">
        <Text fontSize={24} fontWeight={700}>Make a Frame</Text>
        <div className="flex gap-4">
          <Button onClick={() => router.back() }>Back</Button>
          <Button onClick={() => router.push('/')} backgroundColor={colors.gray[100]} color={colors.gray[900]} hoverBackgroundColor={colors.gray[200]}>Create</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <Inputs value={datas.title} onChange={handleTitleChange} label="Title" placeholder="Please enter the title" />
        <FrameImgSelector onChange={handleImgChange}/>
      </div>
    </div>
  )
}