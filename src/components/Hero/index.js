import React,{useState} from 'react'
import Navbar from '../Navbar'
import {HeroContainer ,HeroContent,HeroItems,Hero1,HeroP,HeroBtn} from './HeroElem'
import Sidebar from '../Sidebar'

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle=()=>{
    setIsOpen(!isOpen)
}

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <Hero1>Greatest Biryani Ever</Hero1>
                <HeroP>Ready in 10 minutes</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero