import React from 'react';

const About = () => {
    return (
        <div id="aboutId" className="description">

            <a href="#contactId"><h2>Here is your Teacher, do not hesitate to contact me for more informations.</h2></a>

            <h3>About</h3>
            <p className="description">Hi my name is Arnaud and i'm swimming teacher, aquafitness instructor and lifeguard since 5 years now. I'm also web developer since 2020. I worked for many different companies and i got lucky to work in many differents places like council pools, fitness centers, SPA and private properties. </p>
            <p>Before 2016 i was employed at MacDonald, I worked for 4 years in there when i was a young pal. That was a really good experience and training, but i decided to change my activity because it was not my career path i would say. Then i started rescue training and then swimming.</p>
           
            <div className="img-profil">
                <img src="/butterfly.jpg" alt="swimmer" width="25%" height="20%"/>
                <img src="/profil.jpg" alt="profil" width="300px"/>
                <img src="/swim.jpg" alt="swimmer" width="25%" height="25%"/> 
            </div>
        
        </div>
        
    )
}

export default About;