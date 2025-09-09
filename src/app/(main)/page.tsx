'use client'

import { ArrowIcon } from "@/assets";
import { Button } from "@/components";
import { colors, Text } from "@/design-token";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-40 items-center justify-center pt-[200px]">
      <div className="flex flex-col gap-2 items-center">
        <Text fontSize={40} fontWeight={700}>Make Your Moments Special with frame4U</Text>
        <Text fontSize={28} color={colors.gray[700]}>Turn Your Photos into Unique Memories</Text>
      </div>
      <div className="flex gap-4 items-center">
        <Button onClick={() => router.push('/login')} isRound>Get Start Now</Button>
        <Button onClick={() => router.push('/login')} backgroundColor={colors.gray[100]} borderColor={colors.gray[400]} color={colors.gray[900]} hoverBackgroundColor={colors.gray[200]} isRound>Log in <ArrowIcon/> </Button>
      </div>
    </div>
  )
}