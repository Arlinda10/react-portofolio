import React from 'react';
import './intro.css';
import Me from "../../img/BeFunky.jpg";


function Intro() {
  return (
    <div className='intro'>
       <div className="introLeft">
          <div className='introLeftWrapper'>
              <h2 className='introBfName'>Hello, My name is</h2>
              <h1 className='introName'>Arlinda Bajo</h1>
              <div className="introTitle">
                  <div className="introTitleWrapperLeft">
                       <div className="introTitleItem">Mathematician</div>
                       <div className="introTitleItem">Web Developer</div>  
                       <div className="introTitleItem">Sewing</div>  
                       <div className="introTitleItem">Photographer</div>  
                       <div className="introTitleItem">DIY & Crafts</div>       
                  </div>
              </div>
                <p className='introDescription'> I am Math tutor for all levels, from 1st grade to hightschool + Universities. 
                I do DIY projects, handmade gifts. I photograph every beauty I see. I do sewing, crocheting, and knitting projects. </p>
          </div>
           <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
          
        </div>
        <div className="introRight">
          <div className="introDecor">
         
          <img  src={Me}  alt="" className='introImg' />
          </div>
        </div>
       
    </div>
  )
}

export default Intro;

