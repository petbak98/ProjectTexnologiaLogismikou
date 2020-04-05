import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
body{
    width: 100vw;
    font-size: 1.6rem;
    box-sizing: border-box;
}
`;

export default GlobalStyle;
