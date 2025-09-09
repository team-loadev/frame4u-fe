'use client'

import { AuthBanner } from "@/assets";
import { Button, Inputs } from "@/components";
import { colors, Text } from "@/design-token";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function Login () {
  const router = useRouter()
  const [datas, setDatas] = useState<{id: string, password: string}>({
    id: '',
    password: ''
  })

  const handleIdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({...prev, id: e.target.value}))
  },[])

  const handlePwdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({...prev, password: e.target.value}))
  },[])

  const handleLoginClick = useCallback(() => {
    //login api
  },[])
  
  return (
    <div className="flex gap-0">
      <div className="w-full md:w-1/2 px-20 flex flex-col justify-center gap-[40px] h-screen">
        <div className="flex flex-col gap-3 w-full">
          <Text fontSize={40} fontWeight={700}>Log in</Text>
          <Text fontSize={18} color={colors.gray[600]} fontWeight={400}>Sign in to access your account.</Text>
        </div>
        <div className="flex flex-col gap-9 items-end w-full">
          <div className="flex flex-col gap-4 w-full">
            <Inputs onChange={handleIdChange} value={datas.id} label="ID" placeholder="Enter your ID"/>
            <Inputs onChange={handlePwdChange} value={datas.password} label="password" placeholder="Enter your password"/>
          </div>
          <div className="flex w-full justify-between">
            <Button onClick={() => router.push('/signup')} backgroundColor={colors.gray[100]} borderColor={colors.gray[400]} color={colors.gray[900]} hoverBackgroundColor={colors.gray[200]} isRound>sign up</Button>
            <div className="flex gap-3 items-center">
              <Button onClick={() => router.back()} backgroundColor={colors.gray[100]} color={colors.gray[900]} hoverBackgroundColor={colors.gray[200]}>Back</Button>
              <Button onClick={handleLoginClick}>Continue</Button>
            </div>
          </div>
        </div>
      </div>
      <Image className="hidden md:block" src={AuthBanner} alt="sdsads" style={{ width: "fit-content", height: "100vh"}} />
    </div>
  )
}