import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`
  padding-top: 10vh;
  grid-area: intro;

  h2 {
    font-weight: 600;
    font-size: 2.5em;
    color: ${color.primary};
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
  }

  h4 {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.05em;
  }
`
