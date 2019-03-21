import React, { Component } from "react";
import './Carousel.css';
import scrollTo from './scrollToAnimate';

import data from './data.json';
import Slide from './Slide';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.handleLeftNav = this.handleLeftNav.bind(this);
        this.handleRightNav = this.handleRightNav.bind(this);
    }
    handleLeftNav(e) {
        console.log('left clicked', this);
    }
    handleRightNav(e) {
        console.log ('right clicked', this);
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = 6.0;
        var widthOfSlide = 120;
        var newPos = carouselViewport.scrollLeft + (widthOfSlide * numOfSlidesToScroll);
        var timeToMoveOneSlide = 200;
        var totalTimeToMove = Math.min( ( numOfSlidesToScroll * timeToMoveOneSlide), 400 );
        scrollTo(carouselViewport, newPos, totalTimeToMove, 'scrollLeft');
    }
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
                <button 
                 className="carousel-nav carousel-left-nav"
                 onClick={this.handleLeftNav}
                 >
                    &#60;
                </button>
               <div className="carousel-viewport" ref="carouselViewport">
                   {this.renderSlides()}
               </div>
                <button 
                 className="carousel-nav carousel-right-nav"
                 onClick={this.handleRightNav}
                 >
                     &#62;
                </button>
            </div>
        );
    }
}

export default Carousel;