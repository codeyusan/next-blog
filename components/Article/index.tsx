import React from 'react'
import dayjs from "dayjs"
import { useRouter } from 'next/router'

type HomeProps = {
  files?: any
}

type Files = {
  name: string;
  cTime: string
}

export default function Article({files}: HomeProps) {

  const router = useRouter();
  const showText = (name: string) => {
    router.push(`/markdown/${name}`)
  }

  return (
    <>
      {
        files && files.map((item: Files, index: number) => 
          <div 
            onClick={() => showText(item.name)} 
            key={index} 
            className='cursor-pointer border-dashed border-2 border-sky-500 mb-4 px-3 py-2'
          >
            <span>
              {item.name}
            </span>
            <span className='pl-6'>
              {"创建时间:" + dayjs(item.cTime).format("YYYY-MM-DD")}
            </span>
          </div>
        )
      }
      {
        files && files.length === 0 && <div>暂无数据</div>
      }
    </>
  )
}
