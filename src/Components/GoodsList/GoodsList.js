import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import styled from "styled-components";

// Components
import Goods from "Components/Goods";
// import ShoppingCartModal from "./ShoppingCartModal";
// import ConfirmModal from "./ConfirmModal";

const GoodsList = ({ categoryName, products, subInfo }) => {
  return (
    <Container>
      <Heading>{categoryName}</Heading>
      <Categories>
        {subInfo.length > 0 &&
          subInfo.map((info) => (
            <li
              key={info.category_code}
            >{`${info.category_name}(${info.total})`}</li>
          ))}
      </Categories>
      <Board>
        {products.length > 0 &&
          products.map((product) => <Goods {...product} />)}
      </Board>
    </Container>
  );
};

export default GoodsList;

const Container = styled.section`
  width: 1200px;
  padding-top: 80px;
  margin: 0 auto;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 28px;
  padding-bottom: 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 15px;
`;

const Categories = styled.ul`
  display: flex;
  margin-bottom: 15px;
  li {
    color: ${({ theme }) => theme.colors.gray_400};
    font-size: 14px;
    font-weight: 300;
    padding: 0 15px;
    transition: color 0.1s linear;
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  li:first-child {
    color: ${({ theme }) => theme.colors.black};
    padding-left: 0;
  }
  li:last-child {
    padding-right: 0;
  }
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
