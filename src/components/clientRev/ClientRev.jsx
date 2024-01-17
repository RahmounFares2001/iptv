import React from 'react'


// slider
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// data
import cl from "./client";

// material ui
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ClientRev() {



  // pics slider 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='review mb-10'>
      <div className='py-14'>
        <h1 className='text-3xl font-bold text-center text-orange-500 py-10'>Client Reviews</h1>
        <div>
          <Slider {...settings}>
              {cl.map((cll) => {
                return(
                  <div className='w-full h-3/6 flex flex-row justify-center items-center gap-3'>
                    <img src={cll.img} alt="img" className='h-full w-52 sm:w-72 md:w-72 rounded-2xl border-2 md:border-4 border-solid border-orange-600' />
                  </div>
                )
              })}
          </Slider>  
        </div>
      </div>

      <div className='contact flex justify-center items-center'>
        <div className='bg-orange-600 flex flex-col gap-10 justify-center items-center py-10
        w-4/5 rounded-xl text-center p-5'>
            <WhatsAppIcon style={{color: 'white', width: '100px', height: '100px'}} />
            <h1 className='text-4xl font-bold text-white'>Call Us Today To Get Started</h1>
            <h1 className='text-gray-200'>Haven't found what you’re looking for? Save time experts for exclusive deals - we answer calls</h1>
            <button className='bg-white text-orange-500 text-2xl px-8 py-2 rounded-xl hover:bg-gray-100'>WhatsApp us</button>

        </div>
      </div>
    </div>
  )
}
