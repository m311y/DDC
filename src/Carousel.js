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
        this.onResize = this.onResize.bind(this);
        this.state = {
            numOfSlidesToScroll: 4
        }
    }

    onResize() {
        console.log('resizing');
        this.checkNumOfSlidesToScroll();
    }

    componentDidMount() {
        this.checkNumOfSlidesToScroll();
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    checkNumOfSlidesToScroll() {
        var numOfSlidesToScroll;
        if ( window.innerwidth <= 900 ) {
            numOfSlidesToScroll = 'full';
        } else {
            numOfSlidesToScroll = 4;
        }
        if ( this.state.numOfSlidesToScroll !== numOfSlidesToScroll ) {
            console.log('in here', numOfSlidesToScroll);
            this.setState ({
                numOfSlidesToScroll
            })
        }
    }

    widthAndTimeToScroll() {
        const { carouselViewport } = this.refs;
        var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        if ( numOfSlidesToScroll === 'full' ) {
            return {
                widthToScroll: carouselViewport.offsetWidth,
                timeToScroll: 400
            }
        } else {
            var widthOfSlide = 120;
            var timeToMoveOneSlide = 200;
            return {
                widthToScroll: numOfSlidesToScroll * widthOfSlide,
                timeToScroll: Math.min( ( numOfSlidesToScroll * timeToMoveOneSlide), 400 )
            
            }
        }
        
    }

    handleLeftNav(e) {
        const { carouselViewport } = this.refs;
        var { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
        var newPos = carouselViewport.scrollLeft - widthToScroll;
        scrollTo({
           element: carouselViewport,
           to: newPos, 
           duration: timeToScroll, 
           scrollDirection: 'scrollLeft'
            });
    }
    handleRightNav(e) {
        const { carouselViewport } = this.refs;
        var { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
        var newPos = carouselViewport.scrollLeft + widthToScroll;
        scrollTo({
           element: carouselViewport,
           to: newPos, 
           duration: timeToScroll, 
           scrollDirection: 'scrollLeft'
            });
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