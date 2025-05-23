import React, { useRef } from 'react';
import './contact.css';
import  walmart from '../../assets/walmart.png';
import  Adobe from '../../assets/adobe.png';
import  Microsoft from '../../assets/microsoft.png';
import  Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/github.png';
import YouTubeIcon from '../../assets/linkedin.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gg66bff', 'template_0371apl', form.current, {
        publicKey: 'celkhiIq4vV4X-emq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
       <h1 className="contactpageTitle">My Clients</h1>
       <p className="clientDesc">
        I have had the opportunity to work with a divrse group of companies.some of the notable companies I have worked with includes
       </p>
       <div className="clientImgs">
        <img src={walmart} alt="Client" className="clientImg" />
        <img src={Adobe} alt="client" className="clientImg" />
        <img src={Microsoft} alt="client" className="clientImg" />
        <img src={Facebook} alt="client" className="clientImg" />
       </div>
      </div>
      <div id="contact">
          <h1 className="contactpageTitle"> Contact Me</h1>
          <span className="contactDesc">Please fill out th e form below to discuss any work opportunities</span>
          <form className="contactform" ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='your Email' name='your-email' />
            <textarea   className='msg' name="message"  rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
             <a href="https://www.facebook.com/profile.php?id=100026215633007" target="_blank" rel="noopener noreferrer">
  <img src={FacebookIcon} alt="facebook" className="link" />
</a>
<a href="https://github.com/Rish620" target="_blank" rel="noopener noreferrer">
  <img src={TwitterIcon} alt="twitter" className="link" />
</a>
<a href="https://www.linkedin.com/in/rishu-saurabh-4901a7252/" target="_blank" rel="noopener noreferrer">
  <img src={YouTubeIcon} alt="youtube" className="link" />
</a>
<a href="https://www.instagram.com/rishu__singh_______/" target="_blank" rel="noopener noreferrer">
  <img src={InstagramIcon} alt="instagram" className="link" />
</a>

            </div>
          </form>
      </div>
    </section>
  );
}
export default Contact
