'use client'

import { Button, Post, SearchBar } from "@/components";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Frame () {
  const router = useRouter()
  const [datas, setDatas] = useState<{id: number, img : string, title: string, date: string}[]>([
      {
        id: 1,
        img: '',
        title: 'sdfgh',
        date: 'sadfghjk'
      }
    ])
  
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDatas = useMemo(() => {
    return datas.filter((data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [datas, searchTerm])


  return (
    <div className="flex flex-col gap-14 items-end">
      <div className="flex gap-3 items-center">
        <Button onClick={() => router.push('/frame-make')} isRound>+</Button>
        <SearchBar
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-wrap gap-10 ">
        {filteredDatas.map((data) => (
            <Post onClick={() => router.push(`/frame-view/${data.id}`)} title={data.title} key={data.id} img={data.img} date={data.date}/>
          ))
        }
      </div>
    </div>
  )
}