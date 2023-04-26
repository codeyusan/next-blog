import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import github from '@/static/img/github.svg'

export default function Header() {
  return (
    <header className="w-full bg-white flex h-16 justify-center">
      <section className="flex items-center max-w-screen-xl w-full justify-between">
        <section className="text-black text-2xl text-gray-500">MilitantY's Blog</section>
        <Link href="https://github.com/">
          <Image
            src={github}
            alt="github"
            width={40}
            height={40}
          />
        </Link>
      </section>
    </header>
  )
}
