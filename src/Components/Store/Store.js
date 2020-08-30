import React from "react";

// Styles
import styled from "styled-components";

const Store = ({ thumbnail, name }) => {
  return (
    <Container>
      <Thumbnail src={thumbnail} alt={name}></Thumbnail>
      <StoreName>{name}</StoreName>
    </Container>
  );
};

export default Store;

const Container = styled.div`
  cursor: pointer;
  margin-bottom: 80px;
`;

const Thumbnail = styled.img`
  width: 275px;
  height: 193px;
  object-fit: cover;
`;

const StoreName = styled.p`
  font-size: 20px;
  padding-top: 20px;
  text-align: center;
`;
