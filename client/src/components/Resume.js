import React from 'react';
import ScrollReveal from 'scrollreveal';


const Experiences = () => {

    ScrollReveal().reveal('p', {
        duration: 1000,
        distance: "20px",
        reset: true,
        delay: 900
      })

      ScrollReveal().reveal('h3', {
        duration: 1000,
        distance: "0px",
        scale: 0.5,
        reset: true
      })
      ScrollReveal().reveal('h4', {
        duration: 1000,
        distance: "0px",
        scale: 0.5,
        reset: true
      })

    return ( 
        <div id="experiencesId" className="experiences">
           
                <h3>----- Experiences -----</h3><br/>
               
                <h4>2016-2020 : Lifeguard To Swimming Teacher And Aquafitness Instructor</h4>
                <p>I started to be an independent swimming teacher and aquafitness instructor right after diploma.</p>
                <p>I worked in many different type of establishment: Council (or not) Pools, Fitness Centers, Aquabiking Centers, SPA and private pools.</p>
                <p>I teached swimming but also an other part of sport: nutrition, mental, habbits etc... </p>
                <br/>

                <h4>2020 : Web Developer</h4>
                <p>As it was a covid time lockdown for most of people and companies, i decided to do something during this time.
                    <br/>Then i trained to become a Javascript web developer wich is a language in development. I did this to work on web and mobile app and design.</p>
                <a href="https://www.mydeveloperwebsite.com" target='_blank' rel='noreferrer' className="btn">Here is my work:  www.mydeveloperwebsite.com</a>
            
        </div>
    )
}

export default Experiences;