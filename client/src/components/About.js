import React from 'react';
import './About.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const About = () => {
    
    return (
        
        <div id="aboutId" className="about">
                
              <a href="#contactId"><h1>Your Swim'in Teacher Online</h1></a><br/>         
                <h2>About me</h2>

                <Card sx={{ minWidth: 275 }} className="card">
                  <CardContent>
                    Hi my name is Arnaud and i'm a 30 years old. I'm a swimming teacher, aquafitness instructor and lifeguard. I'm also web developer since 2020. <br/> First, before 2016 i was employed at MacDonald, I worked for 4 years in there when i was a young pal. Already i was trying different work like cooking or taking orders.
                    That was a really good experience and training, but i decided to change my activity because it was not my career path i would say. <br/>
                    Then i started rescue training and then i became a lifeguard and a swimming teacher wich i practice now since 7 years with passion.
                  </CardContent>
                </Card>
                <br/>
              
                <div className="img-profil">
                    <img src="/butterfly.jpg" alt="swimmer" width="30%" height="20%"/>
                    <img className="profil" src="/profil.jpg" alt="profil" width="300px"/>
                    <img src="/swim.jpg" alt="swimmer" width="30%" height="25%"/> 
                </div>
        </div>
    )
}

export default About;