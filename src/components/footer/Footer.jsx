import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col gap-3 bg-black py-10'>
      <ul className='text-white text-base sm:text-xl flex sm:flex-row flex-col gap-5 justify-center items-center'>
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Term Of Use</li>
        <li>Cart</li>
      </ul>
      <h1 className='text-base sm:text-xl text-orange-500 text-center'>Copyright © 2024</h1>
    </div>
  )
};
