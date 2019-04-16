import React, { Component } from 'react';
import './Slide.css';
import export2 from './img/export2.jpg';

class Slide extends Component {
    render () {
        const {
            name
        } = this.props;
        return(
            <div className="slide"><img src={export2} /></div>
        );

    }
}

export default Slide;