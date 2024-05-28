import { createGlobalStyle } from "styled-components";
import backgroundImage from '../public/images/bg-main-mobile.png'

const Global = createGlobalStyle`
      *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        background-image: url(${backgroundImage});
        background-repeat:no-repeat;
        background-size: 360px;
        
        
    }
`

export { Global };