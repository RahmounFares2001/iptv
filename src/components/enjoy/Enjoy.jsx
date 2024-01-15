import React from 'react'

// images
import enjoy from "../../assets/enjoy/enjoy.jpg";

export default function Enjoy() {
  return (
    <div className='w-full flex justify-center items-center flex-col lg:flex-row py-10 gap-20'>
      <div className='lg:w-3/6 w-full pl-10 flex flex-col gap-5'>

        <h1 className='text-orange-500 text-5xl font-bold'>Enjoy Sports Movies, TV Shows & More</h1>
        <h1 className='text-blue-950 text-3xl'>Immerse yourself in the thrilling world of sports, indulge in captivating movies, and indulge in your favorite TV shows and more.</h1>

        <button className='bg-blue-950 text-white text-xl px-8 py-2 md:w-3/5 w-3/5 rounded-lg
        hover:bg-blue-950/90' >Call Us Now</button>
      </div>

      <div className='lg:w-3/6 lg:5/6 flex justify-center items-center'>
        <img src={enjoy} alt="Picture" className='w-4/5' />
      </div>
    </div>
  )
}
