import React, { Component } from 'react';
import './Slide.css';


class Slide extends Component {
    render () {
        const {
            name,
            img
        } = this.props;
        return(
            <div className="slide">{img}{name}</div>
        );

    }
}

export default Slide;