'use client'

import { Button } from "@/components";
import { colors, Text } from "@/design-token";
import { useState } from "react";

export default function MyFrame () {
  const [datas, setDatas] = useState<{title: string, date: string, img: string}>({
    title: 'dfff',
    date: '2024.10.11',
    img: 'wsdefg'
  })
  return (
    <div className="flex gap-13">
      <img src={datas.img} alt="img" />
      <div className="flex flex-col gap-7">
        <div className="flex gap-3 items-center">
          <Text fontSize={20} fontWeight={700}>{datas.title}</Text>
          <Text fontSize={16} fontWeight={400} color={colors.gray[600]}>{datas.date}</Text>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => console.log('')} backgroundColor={colors.gray[100]} color={colors.gray[900]} borderColor={colors.gray[300]} hoverBackgroundColor={colors.gray[200]}>Take Photo</Button>
          <Button onClick={() => console.log('')}>Edit</Button>
          <Button onClick={() => console.log('')} backgroundColor={colors.error} hoverBackgroundColor={colors.error}>Delete</Button>
        </div>
      </div>
    </div>
  )
}