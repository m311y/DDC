import React, { Component } from 'react';
import './Slide.css';


class Slide extends Component {
    render () {
        const {
            name,
            image
        } = this.props;
        return(
            <div className="slide">{image}{name}</div>
        );

    }
}

export default Slide;