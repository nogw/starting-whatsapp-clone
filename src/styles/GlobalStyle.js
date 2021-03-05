import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, sans-serif,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: grid;
    min-height: 100vh;
    place-items: center;
    background-color: #dadbd3;
  }
`;

export default GlobalStyle