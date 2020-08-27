import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 14px;
        font-weight: 500;
        min-width: 1200px;
    }
    ol,
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
