import React, { useState } from 'react'

// Material
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PaidIcon from '@mui/icons-material/Paid';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function WhyUs() {

  const [btn, setBtn] = useState("btn1");



  const materialStyle = {
    width: '60px',
    height: '60px',
    color: 'DC7511'
  }
  return (
    <div className='flex justify-center p-10'>
      <div className='w-12/12 h-full  flex md:flex-row flex-col gap-10 ' style={{borderRadius: '50px', backgroundColor: '#040527'}}>

        <div className='h-full w-full text-center md:pl-10 flex flex-col items-center justify-center py-10' style={{borderRadius : '50px 0 0 50px'}}>
          <HelpOutlineIcon style={materialStyle} />
          <h1 className='text-3xl text-orange-500 font-bold'>Why choose us ?</h1>
          <h1 className='text-base text-white'>We hear you, and we're here to meet your needs.</h1>
        </div>

        <div className='h-full w-full text-center flex flex-col items-center justify-center py-10'>
          <EmojiObjectsIcon style={materialStyle} />
          <h1 className='text-3xl text-orange-500 font-bold'>Global Channel Selection</h1>
          <h1 className='text-base text-white'>Immerse Yourself in International Content with Our Wide Channel Selection.</h1>
        </div>

        <div className='w-full min-h-full text-center bg-orange-600 flex flex-col items-center justify-center py-10'>
          <PaidIcon style={{...materialStyle, color: "white"}} />
          <h1 className='text-3xl text-blue-950 font-bold'>Affordable Prices</h1>
          <h1 className='text-base text-white'>We provide high-quality IPTV services at an affordable price that suits all budgets.</h1>
        </div>

        <div className='h-full w-full text-center md:pr-10 flex flex-col items-center justify-center py-10' style={{borderRadius : '0 50px 50px 0'}}>
          <LocalFireDepartmentIcon style={materialStyle} />
          <h1 className='text-3xl text-orange-500 font-bold '>Superior Quality</h1>
          <h1 className='text-base text-white'>Enjoy your favorite programs wherever you are, without any interruptions.</h1>
        </div>

      </div>
    </div>
  )
}
