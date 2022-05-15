import React from 'react'
import FooterBrand from './FooterBrand'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerContainer'>
      <FooterBrand/>
      <div className='dataContainer'>
      <p>Levoine Skateboarding inc. &copy; </p>
      <p>Av. Santa fe 1234, CABA</p>
      <p>levoineskateboarding@gmail.com / 4566-3456</p>
      </div>
      <div className='navFooter'>
        <ul>
          <Link style={{textDecoration:'none'}} to='/'><li>HOME</li></Link>
          <Link style={{textDecoration:'none'}} to='/skate'><li>SKATES</li></Link>
          <Link style={{textDecoration:'none'}} to='/clothes'><li>CLOTHES</li></Link>
          <Link style={{textDecoration:'none'}} to='/us'><li>ABOUT US</li></Link>
          <Link style={{textDecoration:'none'}} to='/news'><li>NEWS</li></Link>
          <Link style={{textDecoration:'none'}} to='/contact'><li>CONTACT</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer