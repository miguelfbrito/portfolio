import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`
  h1 {
    font-size: 4rem;
    color: ${color.primary};
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  transform: scale(0.8);

  img {
    /* width: 30px;
    height: 50px; */
    cursor: pointer;
    padding: 10px 30px;
    transition: transform 200ms ease;

    &:hover {
      transform: scale(1.1);
      transform: translateY(7px);
      filter: brightness(0.8);
    }
  }
`
