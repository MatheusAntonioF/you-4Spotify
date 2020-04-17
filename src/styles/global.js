import { createGlobalStyle, keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
   font-family: 'Roboto', sans-serif;
  }

  body, input, button {
   font-family: 'Roboto', sans-serif;
  }
  button:focus {
    outline: 0;
  }
  button {
    &::-moz-focus-inner {
      outline: 0 !important;
    }
    border: 0;
    cursor: pointer;
  }
  ::-moz-focus-inner {
    outline: 0 !important;
  }
  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(185, 179, 173, 0.7);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(185, 179, 173);
    transform: scale(2);
  }

  .spin {
    animation: ${spin} 2s infinite linear;
  }

`;
