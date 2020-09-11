import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`

  animation: fadeIn 1s;
  opacity: 0;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
 

  h2 {
    font-weight: 500;
    font-size: 19px;
    color: ${props => props.theme.primary};
  }

  h3 {
    font-size: 2.5em;
    font-weight: 600;
    /* color: ${color.primary}; */
    margin-bottom: 20px;
    letter-spacing: -0.03em;

    span {
      font-weight: 400;
      font-size: 0.75em;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    b {
      font-weight: 600;
    }
  }

  h4:nth-of-type(2){
    margin-top: 20px;
  }

`
export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Content = styled.div`
  flex-basis: 90%;
  @media only screen and (max-width: 1280px) {
    flex-basis: 100%;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  justify-content: flex-end;
  opacity: 0;

  animation: fadeInPlace 1s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  /* background-color: rgba(87, 90, 137, 0.7); */

  /* box-shadow: 0px 5px 10px rgba(243, 147, 128, 0.5); */
  width: auto;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const Image = styled.img`
  /* display: flex; */

  width: 25rem;
  height: 25rem;
  padding: 25px;

  background: ${color.secondary};
  border-radius: 50%;

  @media only screen and (max-width: 1280px) {
    width: 20rem;
    height: 20rem;
  }
  @media only screen and (max-width: 1100px) {
    width: 17rem;
    height: 17rem;
  }
`
