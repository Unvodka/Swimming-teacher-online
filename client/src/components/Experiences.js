import React from 'react';
import Fade from 'react-reveal/Fade';
import './Experiences.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Experiences = () => {

    return ( 
        <div id="experiencesId" className="experiences">
            <Fade duration={500} top cascade>
                <h2>Experiences</h2><br/>

                <Card sx={{ minWidth: 275 }} className="card-exp">
                    <CardContent>
                    <h3>2016-2021 <br></br>Lifeguard To Swimming Teacher And Aquafitness Instructor :</h3>
                    <br />
                        I started to be an independent swimming teacher and aquafitness instructor right after diploma.<br></br>
                        I worked in many different type of establishment: Council (or not) Pools, Fitness Centers, Aquabiking Centers, SPA and private pools.<br></br>
                        I teached swimming but also an other part of sport: nutrition, mental, habbits etc... 
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 275 }} className="card-exp">
                    <CardContent>
                        <h3>2020 <br></br> Web Developer :</h3>
                        <br />
                        As it was a covid time lockdown for most of people and companies, i decided to do something during this time.
                        <br/>Then i trained to become a Javascript web developer wich is a language in development. I did this to work on web and mobile app and design. <br></br>
                        <a href="https://www.mydeveloperwebsite.com" target='_blank' rel='noreferrer' className="btn">Here is my work:  www.mydeveloperwebsite.com</a>
                    </CardContent>
                </Card>
                
            </Fade>
        </div>
    )
}

export default Experiences;