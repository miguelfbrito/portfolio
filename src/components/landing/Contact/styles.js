import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h1 {
    font-size: 4rem;
    color: ${color.primary};
  }

  @media only screen and (max-width: 760px) {
    h1 {
      margin-top: -20vh;
    }
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;

  svg {
    transform: scale(1.8);
    cursor: pointer;
    transition: transform 200ms ease;

    max-height: 2.2rem;

    &:hover {
      transform: scale(2);
      filter: brightness(0.8);
    }
  }
`
export const Icon = styled.div`
  padding: 35px 20px;
`
