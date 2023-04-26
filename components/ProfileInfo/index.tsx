import React from 'react'
import Image from 'next/image'
import profilePhoto from '@/static/img/profile-photo.jpeg'
import work from '@/static/img/position.svg'
import mail from '@/static/img/mail.svg'
import location from '@/static/img/location.svg'

export default function ProfileInfo() {
  
  const infoList = [
    {
      img: work,
      alt: "work",
      desc: "页面优化切图师"
    },
    {
      img: mail,
      alt: "mail",
      desc: "codeyusan@gmail.com"
    },
    {
      img: location,
      alt: "location",
      desc: "浙江省杭州市"
    }
  ]

  return (
    <>
      <div className='flex flex-col items-center pb-4 border-b border-slate-100'>
        <Image
          src={profilePhoto}
          alt="profilePhoto"
          width={200}
          height={200}
          className='rounded-full'
        />
        <div className='font-bold mt-4 text-2xl'>MilitantY</div>
        <div className='mt-2 text-gray-500'>丈夫志四海,万里犹比邻</div>
      </div>
      <ul className='p-4'>
        {
          infoList.map((item, index) => <li key={index} className='flex align-center pb-2'>
            <Image
              src={item.img}
              alt={item.alt}
              width={20}
              height={20}
            />
            <span className='text-gray-500 pl-4 text-sm'>{item.desc}</span>
          </li>)
        }
      </ul>
    </>
  )
}
