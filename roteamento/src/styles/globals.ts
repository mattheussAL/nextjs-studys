import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;

    color: #141414;
    background: #F2F2F2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li { list-style: none }
`;

export default GlobalStyles;
