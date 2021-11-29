import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel-container">
                <div className="carousel-img">
                    <img src="/nutrition.jpg" />
                    <p className="legend">Nutrition</p>
                </div>
                <div className="carousel-img">
                    <img src="/butterfly.jpg" />
                    <p className="legend">Swimming</p>
                </div>
                <div className="carousel-img">
                    <img src="/training2.jpg" />
                    <p className="legend">Body Scultp</p>
                </div>
                <div className="carousel-img">
                    <img src="/diving.jpg" />
                    <p className="legend">Diving</p>
                </div>
                <div className="carousel-img">
                    <img src="/meditation2.jpg" />
                    <p className="legend">Mental</p>
                </div>
                <div className="carousel-img">
                    <img src="/relaxation3.jpg"/>
                    <p className="legend">Relaxation</p>
                </div>
                
            </Carousel>
        );
    }
};
 
 export default MyCarousel