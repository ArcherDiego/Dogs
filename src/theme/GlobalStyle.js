import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0px;
        padding-top: 4rem;
        color: #333;
        font-family: ${({theme}) => theme.fontFamily.first};
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
        font-size: 1rem;
        font-family: ${({theme}) => theme.fontFamily.first};
        color: #333;
    }
`;

export default GlobalStyle
