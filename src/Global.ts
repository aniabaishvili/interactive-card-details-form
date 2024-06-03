import { createGlobalStyle } from "styled-components";
import backgroundImage from '../public/images/bg-main-mobile.png'
import BackgroundDesktop from '../public/images/bg-main-desktop.png'


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
        background-size: contain;
        font-family: 'Space Grotesk';
        
        @media screen and (min-width:768px){
            background-image: url(${BackgroundDesktop});
            background-size: contain;

        }
    }
`

export { Global };