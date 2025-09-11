'use client';

import Image from 'next/image';
import { getImageFromDB } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import { Button, PhotoFrame } from '@/components';
import { useParams, useRouter } from 'next/navigation';
import { colors } from '@/design-token';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';


export default function SelectSmall() {
  const router = useRouter();
  const id = useParams();
  const photoId = Number(id)
  const [datas, setDatas] = useState<Record<string, string>>({
    '0': '',
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
  });
  const [selectDatas, setSelectDatas] = useState<string[]>([]);
  const [frameUrl, setFrameUrl] = useState<string>('https://images.unsplash.com/photo-1560828343-a0b3d8864d1b?q=80&w=917&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  const photoFrameRef = useRef<HTMLDivElement>(null);

  const completeClick = async() => {
     if (photoFrameRef.current) {
      const photo = photoFrameRef.current;
      try {
        const blob = await domtoimage.toBlob(photo);
        saveAs(blob, `${photoId}.png`);
        router.push('/mypage');
      } catch (error) {
        console.error('이미지 생성 실패:', error);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('1', selectDatas[0]);
    localStorage.setItem('2', selectDatas[1]);
    localStorage.setItem('3', selectDatas[2]);
    localStorage.setItem('4', selectDatas[3]);
  }, [selectDatas]);

  useEffect(() => {
    async function fetchData() {
      const newDatas: Record<string, string> = {};
      for (let i = 0; i < 10; i++) {
        const image = await getImageFromDB(String(i));
        if (image) {
          newDatas[String(i)] = image.imageData;
        }
      }
      setDatas((prev) => ({ ...prev, ...newDatas }));
    }
    fetchData();
  }, []);

  const onImageClick = (src: string) => {
    setSelectDatas((prev) => {
      //선택된 건 선택 x
      if (prev.includes(src)) return prev;
      if (prev.length < 4) {
        return [...prev, src];
      } else {
        return [...prev.slice(1), src];
      }
    });
  };

  return (
    <div className="w-full flex flex-col gap-[30px] px-[100px] pt-[72px]">
      <div className="flex w-full justify-around">
        <div className="flex flex-wrap gap-[32px] w-full">
          {Object.entries(datas).map(([key, src]) =>
            src ? (
              <Image
                onClick={() => onImageClick(src)}
                key={key}
                className="w-[250px] h-[158px] bg-black"
                src={src}
                alt={`Image ${key}`}
                width={200}
                height={266}
              />
            ) : (
              <div
                key={key}
                className="w-[250px] h-[158px] bg-black flex items-center justify-center text-white"
              >
                No Image
              </div>
            )
          )}
        </div>
        <div ref={photoFrameRef}>
          <PhotoFrame imgUrl={selectDatas} frameUrl={frameUrl} />
        </div>
      </div>
      <div className='flex gap-3'>
        <Button backgroundColor={colors.gray[100]} color={colors.gray[900]} hoverBackgroundColor={colors.gray[200]} onClick={() => setSelectDatas([])}>Reset</Button>
        <Button onClick={completeClick}>complete</Button>
      </div>
    </div>
  );
}
