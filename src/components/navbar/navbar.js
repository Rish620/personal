import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
const Navbar = () => {
  const[showMenu, setshowMenu]= useState(false);
  return (
             <nav className="navbar">
               <img src={logo} alt="logo" className='logo' />
                  <div className="desktopmenu">
                       <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem">Home</Link>
                       <Link  activeClass='active' to='skill'spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem">Clients</Link>
                       <Link  activeClass='active' to='works'spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem">Abouts</Link>
                       <Link  activeClass='active' to='clients'spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem">Portfolio</Link>
                      </div>
                      <button className="desktopMenuBtn" onClick={() => {
                              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                      }}>
                      <img src={contact} alt="contact" className="desktopMenuImg" />Contact me
                    </button>


                     <img src={menu} alt="menu" className='mobMenu' onClick={()=>setshowMenu(!showMenu)}  />
                     <div className="navMenu" style ={{
                       display: showMenu? 'flex':'none'}}>
                       <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className="ListItem"onClick={()=>setshowMenu(false)}>Home</Link>
                       <Link  activeClass='active' to='skill'spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Clients</Link>
                       <Link  activeClass='active' to='works'spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu (false)}>Abouts</Link>
                       <Link  activeClass='active' to='contact'spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu (false)}>Contact</Link>
                      </div>
                  </nav>
  )
}

export default Navbar
