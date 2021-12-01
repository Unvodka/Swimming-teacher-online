import React from 'react';
import ScrollReveal from 'scrollreveal';

const Experiences = () => {

  ScrollReveal().reveal('.experiences p', {
    duration: 2000,
    distance: "600px",
    origin: 'right',
    reset: true,
  })
  
  ScrollReveal().reveal('.experiences h2', {
    duration: 1000,
    distance: "10px",
    reset: true
  })
  
  ScrollReveal().reveal('.experiences h3', {
      duration: 1000,
      distance: "10px",
      reset: true
    })


    return ( 
        <div id="experiencesId" className="experiences">
           
                <h2>- - - - -  Experiences  - - - - -</h2><br/>
               
                <h3>2016-2020 : Lifeguard To Swimming Teacher And Aquafitness Instructor :</h3>
                <p>I started to be an independent swimming teacher and aquafitness instructor right after diploma.</p>
                <p>I worked in many different type of establishment: Council (or not) Pools, Fitness Centers, Aquabiking Centers, SPA and private pools.</p>
                <p>I teached swimming but also an other part of sport: nutrition, mental, habbits etc... </p>
                <br/>

                <h3>2020 : Web Developer :</h3>
                <p>As it was a covid time lockdown for most of people and companies, i decided to do something during this time.
                    <br/>Then i trained to become a Javascript web developer wich is a language in development. I did this to work on web and mobile app and design.</p>
                <a href="https://www.mydeveloperwebsite.com" target='_blank' rel='noreferrer' className="btn">Here is my work:  www.mydeveloperwebsite.com</a>
            
        </div>
    )
}

export default Experiences;