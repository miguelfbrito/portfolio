import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  justify-self: center;
  /* padding-top: 50px; */

  animation-delay: 1s;
  animation: fadeInPlace 0.75s;

  path {
    fill: ${props => props.arrowColor || color.primary};
  }

  svg {
    cursor: pointer;
    margin: 0 auto;
    transition: transform 200ms ease;
    align-self: flex-end;

    &:hover {
      transform: scale(1.15);
      transform: translateY(8px);
      filter: brightness(1.3);
    }
  }
`
