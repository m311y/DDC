import React, { Component } from 'react';
import './Slide.css';
import className from 'classnames';


class Slide extends Component {
    render () {
        const {
            name,
            image
        } = this.props;
        return(
            <div className="slide"><img className="image" src={image} alt="" />{name}</div>
        );

    }
}

export default Slide;