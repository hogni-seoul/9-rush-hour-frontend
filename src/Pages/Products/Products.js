import React, { useState, useEffect } from "react";

// Styles
import styled from "styled-components";

// Components
import HeroBanner from "Components/HeroBanner";
import GoodsList from "Components/GoodsList";

// Assets
import productBath from "Images/HeroBanner/product_bath.jpg";

// Api
import api from "Api";

const Products = ({ location: { search } }) => {
  const [products, setProducts] = useState([]);
  const [subInfo, setSubInfo] = useState([]);

  const loadProducts = async () => {
    const res = await api.loadProducts();
    setProducts(res.data.products);
    setSubInfo(res.data.count);
  };

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, [search]);

  return (
    <Container>
      <HeroBanner
        bgImage={productBath}
        heading={"배쓰"}
        text={"당신에게 향기로운 입욕을 선물합니다."}
      />
      <GoodsList categoryName={"배쓰"} products={products} subInfo={subInfo} />
    </Container>
  );
};

export default Products;

const Container = styled.div``;
