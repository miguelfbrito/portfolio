import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`
  padding-top: 11vh;
  grid-area: intro;

  animation: fadeIn 1s;
  opacity: 0;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
 

  h2 {
    font-weight: 600;
    font-size: 2.5em;
    letter-spacing: -0.05em;
    color: ${props => props.theme.primary};
    /* color: ${color.primary}; */
  }

  h3 {
    font-weight: 600;
    font-size: 19px;
    margin: 5px 0 10px 0;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.0em;
    line-height: 1.4rem;
  }
`
