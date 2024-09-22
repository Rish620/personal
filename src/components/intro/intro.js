import React from 'react'
import './intro.css';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/1.png';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
           <section id="intro">
             <div className="introContent">
              <span className="hello">Hello,</span>
              <span className="introText">I'm <span className="introName">Rishu</span> <br />Website Devloper</span>
               <p className="intropara">I am a skilled web devloper with experience in creating <br />  visually appealing and user friendly website.</p>
               <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
             </div>
              <img src={bg} alt="" className="bg" />
           </section>
  )
}

export default Intro
