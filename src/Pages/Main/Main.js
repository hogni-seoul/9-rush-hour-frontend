import React, { Component } from "react";
import Slider from "react-slick";
import Aside from "Components/Aside";
import TopSlider from "Components/TopSlider";
import MainUnderContents from "Components/MainUnderContents";
import overImage from "./Images/media_form_img.gif";
import underImageleft from "./Images/media_form_img2.jpg";
import underImageRight from "./Images/media_form_img3.jpg";
import slideImage from "./Images/slide_image.jpg";
import spaImage from "./Images/spa.gif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.scss";

class Main extends Component {
  state = {};

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendDots: (dots) => (
        <div
          style={{
            display: "flex",
          }}
        >
          <ul
            style={{
              width: "14px",
              position: "absolute",
              display: "flex",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: () => (
        <div
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            color: "black",
            border: "1.5px black solid",
            borderRadius: "6px",
          }}
        ></div>
      ),
    };
    return (
      <div className="Main">
        <TopSlider />
        <div className="middle-slide">
          <div className="middle-slide-form">
            <h1 className="middle-slide-title">나만 알고 싶은 향기</h1>
            <div className="all-slide-list">
              <Slider className="slider" {...settings}>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
                <div className="product-form">
                  <img className="product-img" src={slideImage}></img>
                  <div className="slide-info">
                    <p className="product-name">sample</p>
                    <p className="hash-tag">sample</p>
                    <p className="price">￦10,000</p>
                  </div>
                </div>
              </Slider>
            </div>
            <Aside className="Aside" />
          </div>
        </div>

        <div className="media-form">
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
        </div>
      </div>
    );
  }
}

export default Main;
