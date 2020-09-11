import styled from "styled-components"
import { color } from "../../common/constants"

export const FooterSection = styled.footer`
  display: flex;
  justify-content: center;

  margin-top: -10px;
  align-items: center;

  p {
    color: ${color.white};
    font-weight: 500;
    font-size: 0.9rem;
  }

  &:before {
    content: "";
    background-color: ${color.primary};
    position: absolute;
    height: 50px;
    width: 100vw;
    left: 0;
    z-index: -1;
    max-width: 100%;
  }
`
