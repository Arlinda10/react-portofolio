import './contact.css';
import mail from '../../img/mailIcon.png';
import phone from '../../img/phoneIcon.jpg';
import adress from '../../img/adressIcon.png';
import { useRef, useState,useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] =useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

   const handleSubmit = (e) => {
       e.preventDefault();
       emailjs.sendForm('service_2pyqgr3', 
       'template_wt3hpde', 
       formRef.current, "user_XjCaPyAyhtGBgKEOL2d2Q")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
      }, 
        (error) => {
          console.log(error.text);
      });
  }
   
  return (
    <div className='contact'>
      <div className='contactBackground'></div>
      <div className="contactWrapper">
          <div className="contactLeft">
              <h1 className="contactTitle">What Project do you need?</h1>
              <div className='contactInfo'>
                  <div className="contactInfoItem">
                      <img 
                      src={mail} 
                      alt="" 
                      className="contactIcon" />
                      bajoarlinda10@gmail.com
                  </div>
                  <div className="contactInfoItem">
                      <img 
                      src={phone} 
                      alt="" 
                      className="contactIcon" />
                      +383 43 857 587
                  </div>
                  <div className="contactInfoItem">
                      <img 
                      src={adress} 
                      alt="" 
                      className="contactIcon" />
                      Xhavit Ahmeti, Prishtinë
                  </div>
              </div>
          </div>
          <div className="contactRight">
             <p className="contactDescription">
                 <b>What's your project?</b>
                   Get in touch. Always available for freelancing.
             </p>
             <form ref={formRef} onSubmit={handleSubmit}>
                 <input style={{backgroundColor: darkMode && '#333'}} type='text'  placeholder='Name' name='user_name' />
                 <input style={{backgroundColor: darkMode && '#333'}} type='text'  placeholder='Subject' name='user_subject' />
                 <input style={{backgroundColor: darkMode && '#333'}} type='text'  placeholder='Email' name='user_email' />
                 <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message' />
                 <button>Submit</button>
                   {done && "THANK YOU!"}
             </form>
          </div>
      </div>
    </div>
  )
}

export default Contact;
