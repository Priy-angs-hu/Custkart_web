import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CenterMode from '../components/Testimonals';


function Home() {
  return (
   <>
    <Navbar />
    <Banner/>
    <CenterMode/>
    <Footer/>
   </>
  );
}

export default Home
