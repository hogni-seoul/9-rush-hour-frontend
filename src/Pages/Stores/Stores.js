import React, { useState, useEffect } from "react";

// Styles
import styled from "styled-components";

// Components
import SearchBox from "Components/SearchBox";
import Store from "Components/Store";

// Api
import api from "Api";

const SEARCH_BY_LIST = ["매장명", "내용"];

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [searchBy, setSearchBy] = useState(SEARCH_BY_LIST[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadStores = async () => {
    try {
      const res = await api.loadStores();
      setStores(res.data.stores);
    } catch (error) {
      console.log(error);
    }
  };

  const searchStores = async (term) => {
    try {
      const res = await api.loadStores();
      const data = res.data.stores;
      const results = data.filter((store) => store.name.includes(term));
      setStores(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadStores();
  }, []);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchStores(searchTerm);
  };

  return (
    <Grid>
      <Heading>
        <h2>SHOP INFORMATION</h2>
        <p>가까운 러쉬 매장에서 느끼는 향기로운 경험!</p>
      </Heading>
      <SearchBox
        searchByList={SEARCH_BY_LIST}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        searchTerm={searchTerm}
        handleSearchTerm={handleSearchTerm}
        handleSubmit={handleSubmit}
      />
      <Section>
        {stores.length > 0 &&
          stores.map((store) => (
            <Store
              key={store.name}
              thumbnail={store.thumbnail_url}
              name={store.name}
            />
          ))}
        {stores.length === 0 && <Alert>검색 결과가 없습니다.</Alert>}
      </Section>
    </Grid>
  );
};

export default Stores;

const Grid = styled.div`
  width: 1200px;
  padding-top: 90px;
  padding-bottom: 100px;
  margin: 0 auto;
`;

const Heading = styled.div`
  text-align: center;
  h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -3px;
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray_500};
    padding: 25px 0 80px 0;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 34px;
`;

const Alert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;
