import React from "react";

// Styles
import styled from "styled-components";

// Components
import Carousel from "Components/Carousel";
import CarouselMultiple from "Components/CarouselMultiple";

// Assets
import article from "Images/Main/article.jpg";
import shampoo from "Images/Main/shampoo.gif";
import event from "Images/Main/event.jpg";
import notice from "Images/Main/notice.jpg";
import spa from "Images/Main/spa.gif";

const Main = () => {
  return (
    <Container>
      <Carousel />

      <CarouselMultiple />

      <BannerContainer>
        <div>
          <BigBanner src={article} alt="big-banner" />
        </div>

        <div>
          <Banner src={shampoo} alt="banner" />

          <div>
            <div>
              <Banner src={event} alt="small-banner" />
            </div>

            <div>
              <Banner src={notice} alt="small-banner" />
            </div>
          </div>
        </div>
      </BannerContainer>

      <SpaContainer>
        <div>
          <p>러쉬 스파</p>
          <p>
            온몸의 감각이 깨어날 시간이예요. 러쉬 스파 트리트먼트로 경직된
            근육을 보살펴 보세요.
          </p>
        </div>

        <div>
          <Banner src={spa} alt="vertical-banner" />
        </div>
      </SpaContainer>
    </Container>
  );
};

export default Main;

const Container = styled.main``;

const BannerContainer = styled.div`
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  & > div:first-child {
    flex-basis: 43%;
  }
  & > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    & > div {
      flex: 1;
      display: flex;
      & > div {
        flex: 1;
      }
    }
  }
`;

const Banner = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
`;

const BigBanner = styled(Banner)`
  height: 100%;
  object-fit: cover;
`;

const SpaContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 320px;
  margin-bottom: 100px;
  display: flex;
  & > div:first-child {
    width: 370px;
    margin-top: 100px;
    margin-right: 50px;
    & > p:first-child {
      font-size: 42px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black};
      padding-bottom: 20px;
    }
    & > p:last-child {
      font-size: 16px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.gray_500};
    }
  }
`;
