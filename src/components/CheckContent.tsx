'use client'

import { colors, Text } from "@/design-token";
import { memo, useCallback } from "react";

interface ICheckContentType {
  label: string
  setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
  isCheck?: boolean;
}

interface IIconType {
  isCheck?: boolean;
  onClick?: () => void
}

const CheckIcon = memo(({isCheck, onClick}: IIconType) => {
  return (
    <svg 
      onClick={onClick} 
      width="17" 
      height="13" 
      viewBox="0 0 17 13" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path 
        d="M5.17202 10.3747L1.70202 6.90467C1.51504 6.71769 1.26145 6.61265 0.99702 6.61265C0.732594 6.61265 0.478998 6.71769 0.292021 6.90467C0.105043 7.09164 0 7.34524 0 7.60967C0 7.7406 0.0257889 7.87025 0.0758939 7.99121C0.125999 8.11217 0.199439 8.22208 0.292021 8.31467L4.47202 12.4947C4.86202 12.8847 5.49202 12.8847 5.88202 12.4947L16.462 1.91467C16.649 1.72769 16.754 1.47409 16.754 1.20967C16.754 0.945241 16.649 0.691645 16.462 0.504667C16.275 0.31769 16.0214 0.212646 15.757 0.212646C15.4926 0.212646 15.239 0.31769 15.052 0.504667L5.17202 10.3747Z" 
        fill={isCheck ? colors.gray[900] : colors.gray[500]}
      />
    </svg>
  )
})

CheckIcon.displayName = "CheckIcon"


export default function CheckContent ({isCheck = false, setIsCheck, label} : ICheckContentType) {
  const handleCheckClick = useCallback(() => {
    setIsCheck(!isCheck)
  },[isCheck, setIsCheck])

  return (
    <div className="flex items-center gap-3">
      <CheckIcon onClick={handleCheckClick} isCheck={isCheck}/>
      <Text fontSize={16} fontWeight={300} color={colors.gray[500]}>
        {label}
      </Text>
    </div>
  )
}
