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



`

export default GlobalStyle
