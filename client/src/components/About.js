import React from 'react';
import ScrollReveal from 'scrollreveal';


const About = () => {

    ScrollReveal().reveal('.img-profil', {
        duration: 2000,
        distance: "100vw",
        origin: 'right',
        scale: 0.5,
        reset: true,
        delay: 500
      })
    return (
        
        <div id="aboutId" className="description">
                <br/>
                <a href="#contactId"><h2>Here is your Teacher, contact for more informations.</h2></a><br/>
           

                <h3>----- About me -----</h3>
                <p>Hi my name is Arnaud and i'm a 30 years old swimming teacher, aquafitness instructor and lifeguard since 5 years now. I'm also web developer since 2020. I worked for many different companies and i got lucky to work in many differents places like council pools, fitness centers, SPA and private properties. </p>
                <p>Before 2016 i was employed at MacDonald, I worked for 4 years in there when i was a young pal. That was a really good experience and training, but i decided to change my activity because it was not my career path i would say. Then i started rescue training and then swimming.</p>
                <br/>
                
                <div className="img-profil">
                    <img src="/butterfly.jpg" alt="swimmer" width="30%" height="20%"/>
                    <img src="/profil.jpg" alt="profil" width="300px"/>
                    <img src="/swim.jpg" alt="swimmer" width="30%" height="25%"/> 
                </div>
        
        </div>
    )
}

export default About;