import React, { Component } from "react";
import './Carousel.css';

import data from './data.json';
import Slide from './Slide';

class Carousel extends Component {
    renderSlides() {
        return data.map((state)=>{
          return( 
          <Slide
             name={state.name}
             key={state.abbreviation}
            />
        );
        })
    }
    render () {
        
        return (
            <div className="carousel-container">
                <button className="carousel-nav carousel-left-nav"></button>
               <div className="carousel-viewport">
                   {this.renderSlides()}
               </div>
                <button className="carousel-nav carousel-right-nav"></button>
            </div>
        );
    }
}

export default Carousel;