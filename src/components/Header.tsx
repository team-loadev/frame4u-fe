'use client'

import { colors } from "@/design-token";
import { Logo } from "../assets";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Header () {
  // const accessToken = localStorage.getItem("accessToken")
  const accessToken ="sdds";
  const router = useRouter();

  return (
    <header className="bg-white fixed z-10 w-full h-[70px] flex justify-between items-center px-16 top-0 left-0">
      <Logo/>
        {accessToken ? (
          <div className="flex items-center gap-3">
            <Button onClick={() => router.push("/frame")} backgroundColor={colors.gray[100]} color={colors.gray[900]} isRound hoverBackgroundColor={colors.gray[200]}>Frame</Button>
            <Button onClick={() => router.push("/dash-board")} isRound>Dash board</Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button onClick={() => router.push("/signup")} backgroundColor={colors.gray[100]} color={colors.gray[900]} isRound hoverBackgroundColor={colors.gray[200]}>sign up</Button>
            <Button onClick={() => router.push("/login")} isRound>log in</Button>
          </div>
        )}
    </header>
  )
}