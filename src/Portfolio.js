import React, { Component } from "react";
import 'normalize.css';
import Slideshow from './Slideshow';


class Portfolio extends Component {
  render() {
    return (
      <div >
      <div>
      
      <Slideshow />
      </div>
      <div className="body-container">
        <h2>Portfolio</h2>
        
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        
      
      </div>
      </div>
    );
  }
}
 
export default Portfolio;