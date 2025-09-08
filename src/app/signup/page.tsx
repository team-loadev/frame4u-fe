'use client'

import { AuthBanner } from "@/assets";
import { Button, Inputs } from "@/components";
import { colors, Text } from "@/design-token";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Signup () {
  const router = useRouter()
  const [datas, setDatas] = useState<{id: string, password: string, code: string, email: string}>({
    id: '',
    password: '',
    code: '',
    email: ''
  })
  const [password, setPassword] = useState<{password: string, passwordCheck: string}>({
    password: '',
    passwordCheck: ''
  })

  const handleIdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({...prev, id: e.target.value}))
  },[])

  const handlePwdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({...prev, password: e.target.value}))
  },[])

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({...prev, email: e.target.value}))
  },[])

  const handleCodeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas((prev) => ({...prev, code: e.target.value}))
  },[])

  const handlePwdCheckChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({...prev, passwordCheck: e.target.value}))
  },[])

  useEffect(() => {
    if(password.password === password.passwordCheck) {
      setDatas((prev) => ({...prev, password: password.password}))
    } else {
      setDatas((prev) => ({...prev, password: ""}))
    }
  },[password.password, password.passwordCheck])

  const handleSignupClick = useCallback(() => {
    //signup api
  },[])

  const handleCodeCheckClick = useCallback(() => {
    //code check api
  },[])
  
  return (
    <div className="flex gap-0">
      <div className="w-full md:w-1/2 px-20 flex flex-col justify-center gap-[40px] h-screen">
        <div className="flex flex-col gap-3 w-full">
          <Text fontSize={40} fontWeight={700}>Sign up</Text>
          <Text fontSize={18} color={colors.gray[600]} fontWeight={400}>Create your account.</Text>
        </div>
        <div className="flex flex-col gap-9 items-end w-full">
          <div className="flex flex-col gap-4 w-full">
            <Inputs onChange={handleIdChange} value={datas.id} label="ID" placeholder="Enter your ID"/>
            <Inputs onChange={handleEmailChange} value={datas.email} label="Email" placeholder="Enter your Email"/>
            <div className="flex flex-col gap-4 items-end">
              <Inputs onChange={handleCodeChange} value={datas.code} label="Verification Code" placeholder="Enter verification code"/>
              <Button onClick={handleCodeCheckClick}>Verify</Button>
            </div>
            <Inputs onChange={handlePwdChange} value={password.password} label="password" placeholder="Enter your password"/>
            <Inputs onChange={handlePwdCheckChange} value={password.passwordCheck} label="password check" placeholder="Confirm your password"/>
          </div>
          <div className="flex gap-3 items-center">
            <Button onClick={() => router.back()} backgroundColor={colors.gray[100]} color={colors.gray[900]} hoverBackgroundColor={colors.gray[200]}>Back</Button>
            <Button onClick={handleSignupClick}>Continue</Button>
          </div>
        </div>
      </div>
      <Image className="hidden md:block" src={AuthBanner} alt="sdsads" style={{ width: "fit-content", height: "100vh"}} />
    </div>
  )
}