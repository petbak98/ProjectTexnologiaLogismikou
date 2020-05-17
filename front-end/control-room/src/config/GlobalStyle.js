import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html{
  overflow-x:hidden;

}
body{
  font-family:sans-serif ;
  background:#fafafa;
  width: 100vw;
  box-sizing: border-box;
}

.Toastify__toast--success {
  background:${theme.palette.green.main};
  box-shadow:${theme.shadows[5]}
}
.Toastify__toast--error {
  background:${theme.palette.purple.main};
  box-shadow:${theme.shadows[5]}
}

html::-webkit-scrollbar {
    width: 0.5rem;
    height:0.5rem;

}
html::-webkit-scrollbar-track {
  background: #fafafa;
}
html::-webkit-scrollbar-thumb {
  background:#5b586f;

}

`;

export default GlobalStyle;
