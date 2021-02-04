import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';
function Images() {
    return (
        <div>
            <h3>Carousel in react</h3>
            <div className="carousel-wrapper">
            <Carousel>
                <div className="images">
                    <img src="../images/bhajia.jpg" />
                </div>
                <div>
                    <img src="../images/beef.jpg" />
                </div>
                <div>
                    <img src="../images/meat.jpg" />
                </div>
            </Carousel>
        </div>

            
        </div>
    )
}

export default Images
