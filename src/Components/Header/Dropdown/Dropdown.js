import React from "react";
import PropTypes from "prop-types";

// Styles
import styled from "styled-components";

const Dropdown = ({ itemList, justifyContentCenter, pb }) => {
  return (
    <Container pb={pb}>
      <Grid justifyContentCenter={justifyContentCenter}>
        <CategoryList>
          {itemList.map((item) => (
            <Category key={item.category_name}>
              {item.category_name}
              <ItemList>
                {item.sub_categories.map((subItem) => (
                  <Item key={subItem}>{subItem}</Item>
                ))}
              </ItemList>
            </Category>
          ))}
        </CategoryList>
      </Grid>
    </Container>
  );
};

export default Dropdown;

Dropdown.defaultProps = {
  justifyContentCenter: false,
  pb: "30px",
};

Dropdown.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      category_name: PropTypes.string.isRequired,
      category_path: PropTypes.string.isRequired,
      sub_categories: PropTypes.array.isRequired,
    })
  ).isRequired,
};

const Container = styled.section`
  padding-top: 60px;
  padding-bottom: ${({ pb }) => pb};
  background-color: ${({ theme }) => theme.colors.gray_500};
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
`;

const Grid = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContentCenter }) =>
    justifyContentCenter ? "center" : "flex-start"};
`;

const CategoryList = styled.ul`
  display: flex;
  margin: 0 -15px;
  white-space: nowrap;
`;

const Category = styled.li`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 15px;
`;

const ItemList = styled.ul``;

const Item = styled.li`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray_400};
  padding-top: 20px;
  transition: color 0.2s linear;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
