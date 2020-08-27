import React, { useState } from "react";

// Styles
import styled from "styled-components";
import { Color } from "Styles/Theme";

// Components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import slide_1 from "Images/CarouselAside/slide_1.jpg";
import slide_2 from "Images/CarouselAside/slide_2.jpg";
import slide_3 from "Images/CarouselAside/slide_3.jpg";
import slide_4 from "Images/CarouselAside/slide_4.jpg";
import slide_5 from "Images/CarouselAside/slide_5.jpg";
import slide_6 from "Images/CarouselAside/slide_6.jpg";
import prev_icon from "Images/CarouselAside/prev_icon.png";
import next_icon from "Images/CarouselAside/next_icon.png";

const CarouselAside = () => {
  const [currrentSlideIndex, setCurrentSlideIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <Arrow right="78px">
        <img src={prev_icon} alt="prev-icon" />
      </Arrow>
    ),
    nextArrow: (
      <Arrow right="10px">
        <img src={next_icon} alt="next-icon" />
      </Arrow>
    ),
    afterChange: (index) => setCurrentSlideIndex(index),
  };

  return (
    <Container>
      <CarouselContainer>
        <Slider {...settings}>
          <ImageSlide image={slide_1} />
          <ImageSlide image={slide_2} />
          <ImageSlide image={slide_3} />
          <ImageSlide image={slide_4} />
          <ImageSlide image={slide_5} />
          <ImageSlide image={slide_6} />
        </Slider>
      </CarouselContainer>
      <SlideCounter>{currrentSlideIndex + 1} / 6</SlideCounter>
    </Container>
  );
};

export default CarouselAside;

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 280px;
  margin-left: 20px;
`;

const ImageSlide = styled.div`
  display: block !important;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  height: 652px;
  cursor: pointer;
  outline: none;
`;

const CarouselContainer = styled.div``;

const Arrow = styled.button`
  position: absolute;
  top: auto;
  bottom: 20px;
  right: ${({ right }) => (right ? right : "auto")};
  left: ${({ left }) => (left ? left : "auto")};
  transform: none;
  z-index: 9;
  &::before {
    display: none;
  }
`;

const SlideCounter = styled.span`
  position: absolute;
  bottom: 20px;
  right: 40px;
  z-index: 9;
  font-size: 14px;
  color: ${Color.white};
`;
