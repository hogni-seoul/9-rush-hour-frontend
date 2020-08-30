import React, { Fragment, useState, useEffect } from "react";

// Styles
import styled from "styled-components";

import SearchBox from "Components/SearchBox";
import Store from "./Store";

import { DATA_PATH } from "config";

const SEARCH_BY_LIST = ["매장명", "내용"];

const Stores = () => {
  const [stores, setstores] = useState([]);
  const [searchBy, setSearchBy] = useState(SEARCH_BY_LIST[0]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(DATA_PATH + "storeData.json")
      .then((res) => res.json())
      .then((data) => {
        setstores(data.stores);
        setSearchResults([...data.stores]);
      })
      .catch((error) => console.log("Error Occured", error));
  }, []);

  const searchByHandler = (event) => {
    this.setState({ searchBy: event.target.textContent });
  };

  const inputHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const { stores, searchBy, searchTerm } = this.state;
    const filteredStores =
      searchTerm === ""
        ? stores
        : searchBy === SEARCH_BY_LIST[0]
        ? stores.filter((store) => store.name.includes(searchTerm))
        : stores; // SEARCH_BY_LIST[1] 내용인 경우 필터링 추가 필요

    this.setState({ searchResult: filteredStores });
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
        buttonText="검색하기"
      />
      {stores.length > 0 ? null : (
        <Fragment>
          <div className="item-display">
            {searchResults.length > 0 ? (
              searchResults.map((store) => (
                <Store key={store.name} store={store} />
              ))
            ) : (
              <p className="not-found">게시글이 존재하지 않습니다.</p>
            )}
          </div>
          {searchResults.length > 0 ? (
            <nav className="nav">
              <ul>
                <li>
                  <span>1</span>
                </li>
              </ul>
            </nav>
          ) : null}
        </Fragment>
      )}
    </Grid>
  );
};

export default Stores;

const Grid = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.div`
  padding-top: 90px;
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
