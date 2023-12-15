import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './navElem'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav><NavLink to='/'>Biryani Stop
        </NavLink>
        <NavIcon onClick={toggle}>
            
            <Bars />
        </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar