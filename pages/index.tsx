import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Detail() {
  const router = useRouter()
  useEffect(() => {
    // router.push('/home')
  }, [router])

  const enterHome = () => {
    router.push('/home')
  }

  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className='bg-white flex items-center justify-center flex-col p-16'>
        <h1 className='text-xl'>欢迎来到MilitantY的博客</h1>
        <button onClick={enterHome} className='border border-slate-300 px-6 py-1 mt-8'>进入</button>
      </div>
      <div className='absolute bg-black min-h-screen w-1/2 animate-left'></div>
      <div className='absolute bg-black min-h-screen w-1/2 animate-right'></div>
    </main>
  )
}
