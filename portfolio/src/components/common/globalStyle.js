import { createGlobalStyle } from "styled-components"
import { color } from "../common/constants"

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

/* END OF CSS RESET */

    * {
        margin: 0px;
        padding: 0px;
    }


    body {
        overflow-x: hidden;
        /* background-color: ${color.background} */
        /* background-color: ${color.secondary}; */
        /* background-color: #fff9f0; */
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
