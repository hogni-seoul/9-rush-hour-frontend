import React from "react";

// Styles
import styled from "styled-components";

// Components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselAside from "Components/CarouselAside";

const CarouselMultiple = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => <Dots>{dots}</Dots>,
  };

  return (
    <Container>
      <Title>나만 알고 싶은 향기</Title>

      <CarouselContainer>
        <Slider {...settings}>
          <div>
            <Rectangle color="red" />
          </div>
          <div>
            <Rectangle color="green" />
          </div>
          <div>
            <Rectangle color="blue" />
          </div>
          <div>
            <Rectangle color="yellow" />
          </div>
          <div>
            <Rectangle color="tomato" />
          </div>
          <div>
            <Rectangle color="gray" />
          </div>
        </Slider>
      </CarouselContainer>
      <CarouselAside />
    </Container>
  );
};

export default CarouselMultiple;

const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_500};
  margin-bottom: 25px;
`;

const CarouselContainer = styled.div`
  width: 900px;
`;

const Rectangle = styled.div`
  width: 280px;
  height: 400px;
  margin-right: 20px;
  background-color: ${({ color }) => color};
`;

const Dots = styled.ul`
  & > li {
    margin: 0;
  }
  & > li button::before {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: 2px solid #000;
    border-radius: 100%;
    content: "";
    opacity: 1;
  }
  & > li button:hover::before {
    opacity: 1;
  }
  & > li button:focus::before {
    opacity: 1;
  }
  & > li.slick-active button::before {
    opacity: 1;
    background-color: #000;
  }
`;
