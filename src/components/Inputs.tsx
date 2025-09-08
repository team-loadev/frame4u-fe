'use client'

import React from "react";

interface IInputType {
  label?: string,
  onChange: () => void;
  placeholder: string,
  value: string,
}

function Inputs({placeholder, onChange, label, value} : IInputType) {
  return (
    <div className="flex flex-col gap-[2px] w-full">
      <label className="font-light text-4">{label}</label>
      <input onChange={onChange} placeholder={placeholder} value={value} className="rounded-3 text-4 font-light px-5 py-[14px] border bg-white placeholder-gray-400 border-gray-300 w-full" type="text" />
    </div>
  )
}

export default React.memo(Inputs)