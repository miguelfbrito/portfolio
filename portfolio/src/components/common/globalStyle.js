import { createGlobalStyle } from "styled-components"
import { color } from "../common/constants"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }


    body {
        overflow-x: hidden;
        /* background-color: ${color.background} */
        /* background-color: ${color.secondary}; */
        background-color: #fff9f0;
    }

    h1, h2, h3, h4, a, p, li {
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
        margin-left: -25px;
        margin-right: 25px;
        }
        to {
        opacity: 1;
        margin-left: 0px;
        margin-right: 0px;
        }
    }

    @keyframes fadeInPlace {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }




`

export default GlobalStyle
