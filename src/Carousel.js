import React, { Component } from "react";
import './Carousel.css';

class Carousel extends Component {
    render () {
        return (
            <div className="carousel-container">
                <button className="carousel-nav carousel-left-nav"></button>
               <div className="carousel-viewport"></div>
                <button className="carousel-nav carousel-right-nav"></button>
            </div>
        );
    }
}

export default Carousel;