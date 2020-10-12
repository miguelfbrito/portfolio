import styled from "styled-components"
import { color } from "../../common/constants"

export const Wrapper = styled.div`

  animation: fadeIn 1s;
  opacity: 0;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;

  @media screen and (max-height: 700px){
    padding-top: 100px;
  }
 

  h2 {
    font-weight: 500;
    font-size: 19px;
    color: ${props => props.theme.primary};
  }

  h3 {
    font-size: 2.8em;
    font-weight: 600;
    /* color: ${color.primary}; */
    margin-bottom: 30px;
    letter-spacing: -0.03em;

    span {
      font-weight: 400;
      font-size: 0.75em;
    }
  }

  h4 {
    font-weight: 200;
    font-size: 1.2rem;
    line-height: 1.9rem;


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
  margin-right: 75px;

  @media only screen and (max-width: 1000px) {
    margin-right: 0;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  opacity: 0;

  animation: fadeInPlace 1s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  /* background-color: rgba(87, 90, 137, 0.7); */

  /* box-shadow: 0px 5px 10px rgba(243, 147, 128, 0.5); */
  /* width: auto; */

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  svg {
    position: absolute;
    width: 100%;
    max-width: 30vw;
    left: 10px;
    transform: scale(1.2);

    opacity: 1;

    filter: drop-shadow(0px 3px 6px ${color.secondary});
    /* filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3)); */

    path {
      fill: ${color.secondary};
    }
  }
`

export const Image = styled.img`
  width: 100%;
  z-index: 2;
`
