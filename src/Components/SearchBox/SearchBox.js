import React, { useState, useRef } from "react";

// Styles
import styled from "styled-components";

// Assets
import arrowUp from "Images/SearchBox/arrow_up.png";
import arrowDown from "Images/SearchBox/arrow_down.png";

const SearchBox = ({ searchByList, searchBy, buttonText }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClose = (event) => {
    if (anchorRef.current.contains(event.target)) {
      setOpen((prev) => !prev);
      console.log(event);
      return;
    }
    console.log("/>>>>>");
    setOpen(false);
  };

  return (
    <Grid onClick={handleClose}>
      <SelectionContainer ref={anchorRef}>
        <div className="selected">
          <span>{searchBy}</span>
        </div>

        <div className="arrow-icon">
          {open && <img src={arrowUp} alt="arrow-icon" />}
          {!open && <img src={arrowDown} alt="arrow-icon" />}
        </div>

        <Otions className={`list ${open}`} open={open}>
          {searchByList.map((item) => (
            <div>
              <span>{item}</span>
            </div>
          ))}
        </Otions>
      </SelectionContainer>

      <InputField onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">{buttonText}</button>
      </InputField>
    </Grid>
  );
};

export default SearchBox;

const Grid = styled.div`
  width: 1200px;
  height: 92px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gray_100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectionContainer = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  text-indent: 8px;
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  user-select: none;
  cursor: pointer;
  .selected {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .arrow-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Otions = styled.div`
  width: 100%;
  box-sizing: content-box;
  position: relative;
  left: -1px;
  padding: 5px 0px 5px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  div:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }
`;

const InputField = styled.form`
  input {
    width: 342px;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    outline: none;
  }
  button {
    width: 144px;
    height: 40px;
    margin-left: 25px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
