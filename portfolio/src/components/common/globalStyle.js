import { createGlobalStyle } from "styled-components"
import { color } from "../common/constants"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    h1, h2, h3, h4, a, p {
        font-family: Maven Pro;
        font-style: normal;
        color: ${color.white}
    }
    h1, h2{
        color: ${color.darkblue};
    }

    h3, h4, a, p {
        color:  ${color.primary};
        letter-spacing: 0.04em;
    }

    body {
        background-color: ${color.background}
    }

    h1, a {
        font-weight: 400;
    }

    @media screen and (max-width: 700px){
        html {
            /* font-size: 18px; */
        }
        .headerImage {
        }
    }



    @keyframes fadeIn {
        from {
        opacity: 0;
        margin-left: -35px;
        margin-right: 35px;
        }
        to {
        opacity: 1;
        margin-left: 0px;
        margin-right: 0px;
        }
    }




`

export default GlobalStyle
