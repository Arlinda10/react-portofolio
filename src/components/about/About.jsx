import React from 'react';
import './about.css';
import photo  from "../../img/photogr.jpg";
import nature from '../../img/nature.jpg';
import park from '../../img/park.jpg';
import wald from '../../img/wald.jpg';
import lule from '../../img/flower.jpg';
import city from '../../img/b.jpg';
import rv from '../../img/ravensburg.jpg';
import trees from '../../img/trees.jpg';
import golf from '../../img/golf.jpg';



const About = () => {
  return (
    <div className='about'>
      <div className="aboutLeft">
        <div className="aboutC background"></div>
        <div className="aboutC">
            <img 
             src={photo}
             alt="" 
             className="aboutImg"  />
        </div>
      </div>
      <div className="aboutRight">
       <h1 className='aboutTitle'>Know Me Better</h1>
       <p className='aboutSubtitle'>
           I walk, I look around, I stand, I photograph!
       </p>
       <div className="aboutExamples">
          <div className="s1">
            <a href={nature}><img src={nature}    alt="" className='aboutExampleItem' /></a>
            <a href={wald}><img src={wald}    alt="" className='aboutExampleItem' /></a>
            <a href={park}><img src={park}    alt="" className='aboutExampleItem' /></a>
           <a href={lule}> <img src={lule}    alt="" className='aboutExampleItem' /></a>
          </div>
          <div className="s2">
            <a href={trees}><img src={trees}    alt="" className='aboutExampleItem' /></a>
            <a href={golf}><img src={golf}    alt="" className='aboutExampleItem' /></a>
            <a href={city}><img src={city}    alt="" className='aboutExampleItem' /></a>
            <a href={rv}><img src={rv} alt='' className='aboutExampleItem' /></a>
          </div>
       </div>
       
       <div className='aboutExampleText  '>
         <h4>And many other Pics like these!</h4>
       </div>
      </div>
    </div>
  )
}

export default About;



