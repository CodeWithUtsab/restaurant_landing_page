import React from "react";
import ProfilePic from "../../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper" id="testimonials">
      <div className="testimonial-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading tehe">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
