import React, { useState } from "react";

// Styles
import styled from "styled-components";

// Components
import Carousel from "Components/Carousel";
import CarouselMultiple from "Components/CarouselMultiple";

// import Slider from "react-slick";
// import Aside from "Components/Aside";
// import MainUnderContents from "Components/MainUnderContents";
// import MiddleSlide from "Components/MiddleSlide";
// import overImage from "./Images/media_form_img.gif";
// import underImageleft from "./Images/media_form_img2.jpg";
// import underImageRight from "./Images/media_form_img3.jpg";
// import slideImage from "./Images/slide_image.jpg";
// import spaImage from "./Images/spa.gif";
import "./Main.scss";
import "../../Styles/reset.scss";

const Main = () => {
  return (
    <Container>
      <Carousel />
      <CarouselMultiple />
      {/* <div className="middle-slide">
      <div className="middle-slide-form">
        <h1 className="middle-slide-title">나만 알고 싶은 향기</h1>
        <div className="all-slide-list">
          <Slider className="slider" {...settings}>
            {slideData.map((slider, idx) => (
              <MiddleSlide key={idx} slideData={slider} />
            ))}
          </Slider>
        </div>
        <Aside className="Aside" />
      </div>
    </div> */}

      {/* <div className="media-form">
      <embed
        className="youtube"
        src="https://www.youtube.com/embed/LPfcZXXCuFY"
      ></embed>
      <div className="media-form-img">
        <div className="media-form-img-over">
          <img className="over-img" src={overImage} />
        </div>
        <div className="media-form-img-under">
          <img className="left-under-img" src={underImageleft} />
          <img className="right-under-img" src={underImageRight} />
        </div>
      </div>
    </div>
    <div className="spa-ad">
      <div className="spa-ad-article">
        <div className="spa-ad-text">
          <h1 className="spa-ad-title">러쉬 스파</h1>
          <div className="spa-ad-string">
            <p>따뜻해진 날씨처럼, 온몸의 감각이 깨어날 시간이예요. </p>

            <p>러쉬 스파 트리트먼트로 경직된 근육을 보살펴보세요.</p>
          </div>
        </div>
        <div className="spa-ad-img">
          <img className="spa-gif" src={spaImage} />
        </div>
      </div>
    </div>
    <div className="main-under">
      <MainUnderContents />
    </div> */}
    </Container>
  );
};

export default Main;

const Container = styled.section``;
