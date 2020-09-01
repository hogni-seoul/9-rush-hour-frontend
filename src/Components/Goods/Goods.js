import React from "react";

// Styles
import styled from "styled-components";

// Assets
import latest from "Images/Goods/latest.jpg";
import vegan from "Images/Goods/vegan.jpg";
import soldout from "Images/Goods/soldout.jpg";
import buttonWish from "Images/Goods/btn_wish.png";
import buttonCart from "Images/Goods/btn_cart.png";

function Goods({
  product_number,
  product_name,
  image,
  price,
  stock,
  is_new,
  is_vegan,
  hash_tag,
  // toggleCartModal,
}) {
  return (
    <Container>
      <IconButtons>
        <img src={buttonWish} alt="icon button" />
        <img
          src={buttonCart}
          alt="icon button"
          // onClick={() => toggleCartModal(product_number)}
        />
      </IconButtons>

      <Image soldOut={stock <= 0}>
        <img src={image} alt="thumbnail" />
      </Image>

      <Info>
        <div className="status">
          {stock <= 0 && (
            <img className="status__img" alt="sold out" src={soldout} />
          )}
          {stock > 0 && is_new && (
            <img className="status__img" alt="latest" src={latest} />
          )}
          {stock > 0 && is_vegan && (
            <img className="status__img" alt="vegan" src={vegan} />
          )}
        </div>

        <div className="text">
          <p>{product_name}</p>
          <span>{hash_tag}</span>
        </div>

        <p className="price">￦ {price.toLocaleString()}</p>
      </Info>
    </Container>
  );
}

export default Goods;

const Container = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;

const IconButtons = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  display: none;
  img {
    display: block;
    padding: 5px;
    cursor: pointer;
  }
  ${Container}:hover & {
    display: block;
  }
`;

const Image = styled.div`
  img {
    display: block;
    opacity: ${({ soldOut }) => (soldOut ? 0.3 : 1)};
  }
`;

const Info = styled.div`
  text-align: center;
  .status {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    img:not(:last-child) {
      margin-right: 8px;
    }
  }
  .text {
    p {
      font-size: 16px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.gray_500};
    }
    span {
      font-size: 14px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.gray_400};
    }
  }
  .price {
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray_500};
    margin-top: 10px;
  }
`;
