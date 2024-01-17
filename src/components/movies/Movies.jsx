import React from 'react'


// slider
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// data
import chan from "./chan";
import mov from "./mov";

export default function Movies() {



  // pics slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      }
    ]
  };

  return (
    <div style={{backgroundColor: '#040527'}} className='flex flex-col gap-10 p-6 sm:p-10'> 
      <h1 className='text-3xl text-orange-600 text-center font-bold'>Unlimited movies, TV shows, and more</h1>

      <Slider {...settings}>
          {mov.map((movv) => {
            return(
              <div className='w-full h-96 flex flex-row text-center justify-center items-center gap-3'>
                <img src={movv.img} alt="img" className='w-60 h-full rounded-2xl border-2 md:border-4 border-solid border-orange-600' />
              </div>
            )
          })}
      </Slider>         
        
      <h1 className='text-3xl text-orange-600 text-center font-bold'>Our Channels</h1>
      <div className='flex'>
        {chan.map((chann) => {
          return(
            <div>
              <img src={chann.img} alt="channel" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
