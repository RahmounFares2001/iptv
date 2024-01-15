import React from 'react'

//images
import logo from "../../assets/header/logo.jpg"

// Material UI
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Header() {



  const userStyle = {
    width: '30px',
    height: '30px'
  }
  return (
    <div className='px-20 py-5 flex justify-center items-center gap-72'>
      <div className='hidden lg:block'>
        <img src={logo} alt="Logo" />
      </div>

      <div>
        <ul className='flex justify-center items-center gap-10 text-xl lg:text-base text-white py-3'>
          <li className='text-orange-500 cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Price</li>
          <li className='cursor-pointer'>Reviews</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>

      <div className='lg:flex gap-3 items-center cursor-pointer hidden'>
        <div className='border-solid border-2 border-orange-800 flex items-center justify-center p-1'>
          <ShoppingBagIcon style={{...userStyle, color: '#EA7300'}}  />
        </div>
        <Person2Icon style={{...userStyle, color: 'white', cursor: 'pointer'}} />
      </div>
    </div>
  )
}
