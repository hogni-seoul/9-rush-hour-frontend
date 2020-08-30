import React from "react";
import { Link } from "react-router-dom";

// Styles
import styled from "styled-components";

// Assets
import logo from "Images/logo.png";

const Footer = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Grid>
        <SubInfo>
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="lush" />
            </Link>
          </div>

          <ul className="footer-menu">
            <li className="footer-menu__scout">스카우트</li>
            <li className="footer-menu__company">회사소개</li>
            <li className="footer-menu__personal">개인정보처리방침</li>
            <li className="footer-menu__media">영상정보관리치짐</li>
            <li className="footer-menu__term">이용약관</li>
            <li className="footer-menu__cumsomer">고객센터</li>
          </ul>
        </SubInfo>

        <Info>
          <div className="cs">
            <p className="cs__title">고객센터</p>
            <div className="cs__contact">
              <p>1644-2357</p>
              <p>webmaster@lush.co.kr</p>
            </div>
            <div className="cs__time">
              <p>상담전화 13:00~16:00(평일)</p>
              <p>상담톡 10:00~16:00(평일)</p>
            </div>
          </div>

          <div>
            <div className="text">
              <p>가장 빠르게 LUSH 소식을 만나는 법!</p>
              <p>지금 뉴스레터를 구독하세요.</p>
              <p>언제든지 구독 해지하실 수 있습니다.</p>
            </div>

            <div>
              <form className="email" onSubmit={submit}>
                <input type="text" placeholder="이메일 주소를 입력해주세요." />
                <button type="submit">구독하기</button>
              </form>
            </div>

            <p className="location">
              서울특별시 서초구 서운로138(서초동아타워) 6층 | 사이트 운영자 :
              주식회사 러쉬코리아 | 대표이사 : 우미령
            </p>

            <p className="license">
              사업자 등록번호: 201-81-77964 사업자정보확인 | 통신판매업 신고번호
              : 2012-서울서초-0647 | 개인정보보호책임자 : 우승용
            </p>

            <p className="copyright">
              Copyright ⓒ LUSHKOREA co., Ltd.All rights reserved.
            </p>
          </div>
        </Info>
      </Grid>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 460px;
  padding: 45px 0 55px 0;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const Grid = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const SubInfo = styled.div`
  padding-left: 110px;
  padding-bottom: 55px;
  display: flex;
  & > div:first-child {
    flex-basis: 260px;
  }
  .footer-menu {
    display: flex;
    font-size: 14px;
    font-weight: 300;
    li {
      cursor: pointer;
      margin-right: 40px;
    }
    .footer-menu__personal {
      font-weight: 500;
    }
  }
`;

const Info = styled.div`
  padding-left: 110px;
  display: flex;
  .cs {
    flex-basis: 260px;
    font-weight: 300;
    line-height: 22px;
    .cs__title {
      font-size: 16px;
    }
    .cs__contact,
    .cs__time {
      font-size: 14px;
      padding-top: 8px;
    }
  }
  .text {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  .email {
    display: flex;
    margin-bottom: 50px;
    input {
      width: 300px;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      outline: none;
      padding-left: 20px;
    }
    button {
      width: 110px;
      height: 40px;
      margin-left: 15px;
      font-size: 12px;
      border: 1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
      outline: none;
    }
  }
  .location,
  .license,
  .copyright {
    color: ${({ theme }) => theme.colors.gray_400};
    font-weight: 300;
  }
  .copyright {
    font-size: 12px;
    margin-top: 25px;
  }
`;
