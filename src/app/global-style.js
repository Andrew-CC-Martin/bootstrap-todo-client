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

  h1 {
    color: #ffffff;
    margin: 0;
  }

  p {
    margin: 5px;
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

  // /* SCSS HEX */
  // $dark-purple: #242038ff;
  // $slate-blue: #725ac1ff;
  // $middle-blue-purple: #8d86c9ff;
  // $lavender-gray: #cac4ceff;
  // $linen: #f7ece1ff;

  // /* SCSS Gradient */
  // $gradient-top: linear-gradient(0deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-right: linear-gradient(90deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-bottom: linear-gradient(180deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-left: linear-gradient(270deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-top-right: linear-gradient(45deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-bottom-right: linear-gradient(135deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-top-left: linear-gradient(225deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-bottom-left: linear-gradient(315deg, #242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
  // $gradient-radial: radial-gradient(#242038ff, #725ac1ff, #8d86c9ff, #cac4ceff, #f7ece1ff);
`

export default GlobalStyle
