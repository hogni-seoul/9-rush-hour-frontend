import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import styled from "styled-components";
import { Color } from "Styles/Theme";

// Components
import Dropdown from "./Dropdown";

// Assets
import logo from "Images/logo.png";
import searchIcon from "Images/Header/search.png";
import cartIcon from "Images/Header/cart.png";
import myPageIcon from "Images/Header/mypage.png";

// Api
import { Api } from "Api";

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  const loadCategories = async () => {
    try {
      const res = await Api.loadCategories();
      setProductList(res.data.product_list);
      setBrandList(res.data.brand_list);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Container>
      <Grid>
        <div>
          <Link to="/">
            <img src={logo} alt="lush" />
          </Link>
        </div>
        <MenuList>
          <Menu>
            <Link to="/">제품</Link>
            {!loading && productList.length > 0 && (
              <div className="drop-down">
                <Dropdown itemList={productList} />
              </div>
            )}
          </Menu>
          <Menu>
            <Link to="/">브랜드</Link>
            {!loading && brandList.length > 0 && (
              <div className="drop-down">
                <Dropdown
                  itemList={brandList}
                  justifyContentCenter={true}
                  pb="50px"
                />
              </div>
            )}
          </Menu>
          <Menu>
            <Link to="/">매장 안내</Link>
          </Menu>
          <Menu>
            <Link to="/">스파</Link>
          </Menu>
          <Menu>
            <Link to="/">이벤트</Link>
          </Menu>
        </MenuList>
        <MenuGroup>
          <div>
            <img src={searchIcon} alt="search-icon" />
          </div>
          <div>
            <img src={cartIcon} alt="cart-icon" />
          </div>
          <div>
            <img src={myPageIcon} alt="mypage-icon" />
          </div>
        </MenuGroup>
      </Grid>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 100px;
  background-color: ${Color.black};
  position: sticky;
  top: 0;
  z-index: 9;
`;

const Grid = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  & > div:first-child {
    width: 330px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  height: inherit;
`;

const Menu = styled.li`
  height: inherit;
  & a {
    width: 100px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    color: ${Color.white};
  }
  &:not(:last-child) {
    margin-right: 25px;
  }
  & .drop-down {
    display: none;
    &::before {
      content: "";
      width: 0;
      display: block;
      position: relative;
      margin: 0 auto;
      top: -20px;
      border-top: 10px solid transparent;
      border-bottom: 10px solid ${Color.gray_500};
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
  &:hover > .drop-down {
    display: block;
  }
`;

const MenuGroup = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  & > div:not(:first-child) {
    margin-left: 30px;
  }
`;
