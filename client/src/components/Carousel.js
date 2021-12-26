import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel-container" infiniteLoop="true">
                <div className="carousel-img">
                    <img src="/nutrition.jpg" alt="vegetables"/>
                    <p className="legend">Nutrition</p>
                </div>
                <div className="carousel-img">
                    <img src="/butterfly.jpg" alt="swimmer" />
                    <p className="legend">Swimming</p>
                </div>
                <div className="carousel-img">
                    <img src="/training2.jpg" alt="body sculpt"/>
                    <p className="legend">Body Scultp</p>
                </div>
                <div className="carousel-img">
                    <img src="/diving.jpg" alt="swimmer" />
                    <p className="legend">Diving</p>
                </div>
                <div className="carousel-img">
                    <img src="/meditation2.jpg" alt="meditation" />
                    <p className="legend">Mental</p>
                </div>
                <div className="carousel-img">
                    <img src="/relaxation3.jpg" alt="relaxation"/>
                    <p className="legend">Relaxation</p>
                </div>
                
            </Carousel>
        );
    }
};
 
 export default MyCarousel