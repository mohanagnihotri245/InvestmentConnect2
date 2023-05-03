import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({children, slidesToShow, arrowsScroll, cardname}) => {
  return (
    <div className="slider">
      <h1>Explore {cardname}</h1>
      <div className="slide">
        <div className="container">
          <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;