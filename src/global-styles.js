import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
  box-sizing:border-box;
}
  html,
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    scrollbar-color: #f40101 #fff;
    scroll-behavior: smooth;
    background-color: #f5f5f5;
  }
  body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
  body.fontLoaded {
    font-family: 'Inter', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  p,
  label {
    font-family: 'Inter', Georgia, Times, 'Times New Roman', serif,;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: all 200ms linear !important;
  }
  input:focus::placeholder {
    color: transparent;
  }
  textarea:focus::placeholder {
    color: transparent;
  }
`;

export default GlobalStyle;
