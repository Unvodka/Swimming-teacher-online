import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import './Experiences.css';

const Experiences = () => {

    return ( 
        <div id="experiencesId" className="experiences">
            <Fade duration={500} top cascade>
                <h2> - -  Experiences  - - </h2><br/>
               
               <div className='text-container'>
               <h3>2016-2021 <br></br>Lifeguard To Swimming Teacher And Aquafitness Instructor :</h3>
                <p>I started to be an independent swimming teacher and aquafitness instructor right after diploma.<br></br>
                    I worked in many different type of establishment: Council (or not) Pools, Fitness Centers, Aquabiking Centers, SPA and private pools.<br></br>
                    I teached swimming but also an other part of sport: nutrition, mental, habbits etc... </p>
                <br/>

                <h3>2020 <br></br> Web Developer :</h3>
                <p>As it was a covid time lockdown for most of people and companies, i decided to do something during this time.
                    <br/>Then i trained to become a Javascript web developer wich is a language in development. I did this to work on web and mobile app and design. <br></br>
                <a href="https://www.mydeveloperwebsite.com" target='_blank' rel='noreferrer' className="btn">Here is my work:  www.mydeveloperwebsite.com</a></p>
             
               </div>
            </Fade>
        </div>
    )
}

export default Experiences;