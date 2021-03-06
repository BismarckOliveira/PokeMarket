import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}



body {
  background:  #f0f0f0;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}


body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 12px;
}

button {
  cursor: pointer;
}

fieldset, input
{
 outline: none;
 border: none;
 
}

`;
