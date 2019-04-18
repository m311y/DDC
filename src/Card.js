import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt="" />
            <div className="details">
               
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;