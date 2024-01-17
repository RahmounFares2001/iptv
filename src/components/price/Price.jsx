import React from 'react'



// data
import pr from "./pricee";


// images 
import price from "../../assets/price/price.jpg";


export default function Price() {
  return (
    <div style={{backgroundColor: '#040527'}} className='price flex flex-col justify-center items-center gap-10 py-10'>
      <h1 className='text-orange-500 font-bold text-4xl'>Choose Your Plan</h1>

      <div className='flex flex-row gap-5 flex-wrap justify-center items-center'>
        {pr.map((prr) => {
          return(
             <div className='flex flex-col justify-center items-center text-center
             border-solide border-4 border-orange-500 rounded-3xl p-5'>
             <h1 className='text-white text-xl mb-5'>{prr.periode}</h1>
             <h1 className='text-white text-6xl font-bold mb-10'>{prr.price}</h1>
   
             {prr.list.map((prrr) => {
              return(
                  <ul className='text-white text-xl'>
                    <li>{prrr.li}</li>
                  </ul>
                  )})}
           
   
             <button className='text-white font-bold bg-orange-600 hover:bg-orange-600/90
              w-48 px-8 py-2 text-xl rounded-xl mt-10 mb-10'>Buy Now</button>
   
             <img src={price} alt="price" className='w-48' />
   
           </div>
          )})}
       

      </div>
    </div>
  )
}
