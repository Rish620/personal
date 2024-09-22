import React from 'react'
import './work.css';
import protfolio1 from '../../assets/portfolio-1.png';
import protfolio2 from '../../assets/portfolio-2.png';
import protfolio3 from '../../assets/portfolio-3.png';
import protfolio4 from '../../assets/portfolio-4.png';
import protfolio5 from '../../assets/portfolio-5.png';
import protfolio6 from '../../assets/portfolio-6.png';
const Work = () => {
  return (
     <section id='works'>
          <h2 className='worksTitle'>My Portfolio</h2>
          <span className="workDesc">I take pride in paying attention to the smallest details and making sure they my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and a strong online presence. </span>
            <div className="workImgs">
              <img src={protfolio1} alt="img" className="workImg" />
              <img src={protfolio2} alt="img" className="workImg" />
              <img src={protfolio3} alt="img" className="workImg" />
              <img src={protfolio4} alt="img" className="workImg" />
              <img src={protfolio5} alt="img" className="workImg" />
              <img src={protfolio6} alt="img" className="workImg" />
            </div>
            <button className="workBtn">See More</button>
       </section>
  )
}
export default Work
