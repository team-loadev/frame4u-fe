'use client'

import { NoImgIcon } from "@/assets"
import React from "react"

interface IPostType {
  title: string,
  date: string,
  img?: string
  onClick?: () => void;
}

function Post ({title, date, img, onClick} : IPostType) {
  return (
    <div onClick={onClick} className="cursor-pointer w-[255px] flex flex-col gap-[14px]">
      <div className="flex justify-center items-center w-full h-[180px] rounded-xl overflow-hidden bg-gray-50">
        {img ? (
          <img src={img} alt="frame" className="w-full" />
        ): (
          <NoImgIcon/>
        )}
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="text-[20px] font-bold truncate">{title}</div>
        <div className="text-[16px] text-gray-600">{date}</div>
      </div>
    </div>
  )
}

export default React.memo(Post)