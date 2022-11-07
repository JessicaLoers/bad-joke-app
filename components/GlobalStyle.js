import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-color: #2D3748;
    --font-color-second: #F7FAFC;
    --background-color: #F7FAFC;
    --highlight-color: #6B46C1;
    --highlight-color-light: #D6BCFA;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
  }
  body {
    color: var(--font-color);
    background-color: var(--background-color);
  }
  
  h1, h2, h3, h4, h5, h6, ul, li, p {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  
  main {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

`;

export default GlobalStyle;
