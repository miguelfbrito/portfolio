import { createGlobalStyle } from "styled-components"
import { color } from "../common/constants"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    h1, h2, h3, h4, a, p {
        font-family: Source sans pro;
    }
    h1, h2{
        color: ${color.darkblue};
    }

    h3, h4, a {
        color:  ${color.graytext}
    }

    body {
        background-color: ${color.background}
    }

    h1, a {
        font-weight: 400;
    }

    p {
        color: ${color.darkbluetext}
    }



`

export default GlobalStyle
