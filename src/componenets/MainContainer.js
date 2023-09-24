import React from 'react'
import SearchBar from './SearchBar'
import Platform from './Platform'
import AboutUs from './AboutUs'
import Integrated from './Integrated'
import SmartHiring from './SmartHiring'
import Interview from './Interview'
import SystemDesign from './SystemDesign'
import Footer from './Footer'

const MainContainer = () => {
  return (
    <div className='w-full  '>
        <SearchBar/>
        <Platform/>
        <AboutUs/>
        <Integrated/>
        <SmartHiring/>
        <Interview/>
        <SystemDesign/>
        <Footer/>
    </div>
  )
}

export default MainContainer