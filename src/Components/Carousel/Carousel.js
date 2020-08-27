import React from "react";

// Styles
import styled from "styled-components";

// Components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import slide_1 from "Images/Carousel/slide_1.jpg";
import slide_2 from "Images/Carousel/slide_2.jpg";
import slide_3 from "Images/Carousel/slide_3.jpg";
import slide_4 from "Images/Carousel/slide_4.jpg";
import slide_5 from "Images/Carousel/slide_5.jpg";
import slide_6 from "Images/Carousel/slide_6.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <Dots>{dots}</Dots>,
  };

  return (
    <Slider {...settings}>
      <ImageSlide image={slide_1} />
      <ImageSlide image={slide_2} />
      <ImageSlide image={slide_3} />
      <ImageSlide image={slide_4} />
      <ImageSlide image={slide_5} />
      <ImageSlide image={slide_6} />
    </Slider>
  );
};

export default Carousel;

const ImageSlide = styled.div`
  display: block !important;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  height: 580px;
  cursor: pointer;
`;

const Dots = styled.ul`
  position: absolute;
  width: 1200px;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
  li {
    pointer-events: auto;
    margin-bottom: 4px;
  }
  & > li button::before {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: 2px solid #fff;
    border-radius: 100%;
    content: "";
    opacity: 0.6;
  }
  & > li button:hover::before {
    opacity: 0.6;
  }
  & > li button:focus::before {
    opacity: 0.6;
  }
  & > li.slick-active button::before {
    opacity: 1;
    background-color: #fff;
  }
`;
