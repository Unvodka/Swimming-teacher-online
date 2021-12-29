import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import './About.css';


const About = () => {

    return (
        
        <div id="aboutId" className="about">
                
                <Fade top cascade><a href="#contactId"><h1>Your Swim'in Teacher Online</h1></a><br/>
           

                <h2> - -  About me - - </h2>
                <p>Hi my name is Arnaud and i'm a 30 years old swimming teacher, aquafitness instructor and lifeguard since 5 years now. I'm also web developer since 2020. I worked for many different companies and i got lucky to work in many differents places like council pools, fitness centers, SPA and private properties. </p>
                <p>Before 2016 i was employed at MacDonald, I worked for 4 years in there when i was a young pal. That was a really good experience and training, but i decided to change my activity because it was not my career path i would say. Then i started rescue training and then swimming.</p>
                <br/>
                </Fade>
                <Bounce right big cascade>
                <div className="img-profil">
                    <img src="/butterfly.jpg" alt="swimmer" width="30%" height="20%"/>
                    <img className="profil" src="/profil.jpg" alt="profil" width="300px"/>
                    <img src="/swim.jpg" alt="swimmer" width="30%" height="25%"/> 
                </div>
                </Bounce>
        </div>
    )
}

export default About;