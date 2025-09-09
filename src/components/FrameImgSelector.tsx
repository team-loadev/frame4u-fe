'use client'

import { colors, Text } from "@/design-token";
import Button from "./Button";
import { useRef, useState } from "react";
import { Caution } from "@/assets";
import CheckContent from "./CheckContent";

interface FrameImgSelectorProps {
  onChange?: (url: string | null) => void;
}

export default function FrameImgSelector({ onChange }: FrameImgSelectorProps) {
  const imgRef = useRef<HTMLInputElement | null>(null)
  const [imgUrl, setImgUrl] = useState<string | null>(null)
  const [isCheck, setIsCheck] = useState<boolean>(false)

  const handleUploadClick = () => {
    imgRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImgUrl(url)        // 내부 미리보기용
      onChange?.(url)       // 부모에도 전달
    } else {
      setImgUrl(null)
      onChange?.(null)
    }
  }

  const handleDelete = () => {
    if (imgRef.current) imgRef.current.value = ""
    setImgUrl(null)
    onChange?.(null)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex gap-5">
        <Text fontSize={16} fontWeight={300}>Frame Image</Text>
        <div className="gap-4 flex max-w-[600px]">
          <Caution/>
          <Text fontSize={16} fontWeight={300} color={colors.gray[500]}>Set the overall image size to 225×676 pixels, with each individual cut sized at 187×125 pixels. Use a resolution of at least 300 dpi for best quality.</Text>
        </div>
      </div>

      <div
        className="w-[219px] h-[636px] border border-gray-100 rounded-2xl bg-center bg-cover"
        style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : "none" }}
      ></div>
      
      <input
        ref={imgRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex gap-4">
        <Button
          backgroundColor={colors.error}
          color={colors.gray[100]}
          hoverBackgroundColor={colors.error}
          onClick={handleDelete}
        >
          Delete Image
        </Button>
        <Button onClick={handleUploadClick}>Upload Image</Button>
      </div>
      <CheckContent setIsCheck={setIsCheck} isCheck={isCheck} label="I confirm this content does not infringe any copyright"/>
    </div>
  )
}
