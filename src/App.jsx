import { useState, useRef } from 'react'

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import WhyUs from "./components/whyUs/WhyUs";
import Movies from './components/movies/Movies';
import Enjoy from './components/enjoy/Enjoy';
import Price from "./components/price/Price";
import ClientRev from './components/clientRev/ClientRev';
import Footer from "./components/footer/Footer";

import "./styles/styles.css"


// style={{backgroundImage: `url(${home1})`, backgroundSize: 'cover', overflow: 'hidden'}}


// animations


export default function App() {

  
  return (
    <div>
      <div className='bg' >
        <Header />
        <Home /> 
      </div>
      <div style={{overflow: 'hidden'}} >
        <WhyUs />
        <Movies />
        <Enjoy />
        <Price />
        <ClientRev />
        <Footer />
      </div>
    </div>
  )
}
