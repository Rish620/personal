import React from 'react'
import './skill.css';
import uidesign from '../../assets/ui-design.png';
import webdesign from '../../assets/website-design.png';
import appdesign from '../../assets/app-design.png';
const Skill = () => {
  return (
    <section className="skill">
      <span className='skillTitle'>What I Do</span>
      <span className="skillDesc">I am skilled and passinonate web devloper with experience in creating visually appealing and user-friendly websites. I have a strong understanding of a development and a keen eye for detail . I am proficient in C,C++,java,DBMS,JDBC,Spring,HTML,CSS,Javascript,react-js,node-js as well as mongo DB.
      </span>
      <div className="skillbars">
         <div className="skillbar">
          <img src={uidesign} alt="Uidesign" className="skillBarImg" />
            <div className="skillbarText">
              <h2>Appdesign</h2>
              <p>I also start work in appdevlopment with help of andriod_devlopmetn/flutter</p>
            </div>
         </div>

         <div className="skillbar">
          <img src={webdesign} alt="webdesign" className="skillBarImg" />
            <div className="skillbarText">
              <h2>Fronted/Backend</h2>
              <p>I can work in fronted and as well as backend also</p>
            </div>
         </div>

         <div className="skillbar">
          <img src={appdesign} alt="skillbar" className="skillBarImg" />
            <div className="skillbarText">
              <h2>Cloud-Computing</h2>
              <p>I also making and developing & hosting cloud</p>
            </div>
         </div>
      </div> 
    </section>
  )
}

export default Skill
