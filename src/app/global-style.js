import { createGlobalStyle } from 'styled-components'
import { colorPallette } from './constants'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: helvetica;
  }

  header {
    background-color: ${colorPallette.slateBlue};
    width: 100%;
    height: 100%;
    text-align: center;
    margin-bottom: 15px;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: ${colorPallette.darkPurple};
  }

  a:hover, active {
    color: ${colorPallette.middleBluePurple};
  }

  h1 {
    color: #ffffff;
    margin: 0;
  }

  p {
    margin: 5px;
  }

  label {
    font-size: 12px;
  }

  button {
    background: #ffffff;
  }

  button:hover {
    background: ${colorPallette.lavendergray};
  }

  input {
    padding: 10px;
  }
`

export default GlobalStyle
