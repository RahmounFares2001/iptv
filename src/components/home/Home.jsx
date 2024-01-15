import React from 'react'

export default function Home() {
  return (
    <div className='w-screen h-screen pt-16 pl-10 flex flex-col gap-10 lg:gap-0'>

      <h1 className='text-orange-500 text-3xl flex items-center gap-5'>
        <span className='content-none inline-block w-16 h-1 bg-orange-600 sm:p-0'></span>
        Welcome</h1>
        
      <h1 className='text-white lg:text-8xl md:text-6xl text-3xl w-4/6 font-bold'>All-In-One Quality IPTV Service</h1>
      <h1 className='text-white lg:text-3xl md:text-xl text-base w-3/5'>Enjoy your time with excellent image quality up to 4K, on any device, anytime and anywhere, with over +18,000 channels, +88,000 VOD and uptime 100%</h1>

      <div className='flex gap-3 sm:gap-5 md:gap-10 px-4 py-8'>
        <button className='text-white text-xl bg-orange-600 px-10 py-2 rounded-3xl hover:bg-orange-500'>Free Trial</button>
        <button className='text-white text-xl px-10 py-2 rounded-3xl border-4 border-solid border-orange-600
        hover:bg-orange-100/30'>Buy Now</button>
      </div>

    </div>
  )
}
