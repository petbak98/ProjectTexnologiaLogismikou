import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body{
  background:#fafafa;
    width: 100vw;
    box-sizing: border-box;
}
`;

export default GlobalStyle;
