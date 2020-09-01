import React from "react";
import PropTypes from "prop-types";

// Styles
import styled from "styled-components";

const HeroBanner = ({ bgImage, heading, text }) => {
  return (
    <Container bgImage={bgImage}>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Container>
  );
};

export default HeroBanner;

HeroBanner.propTypes = {
  bgImage: PropTypes.any.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
};

const Container = styled.div`
  height: 500px;
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 68px;
  font-weight: 700;
  letter-spacing: 30px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 26px;
  font-weight: 100;
  letter-spacing: 5px;
`;
