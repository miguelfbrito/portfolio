import styled from "styled-components"
import { color } from "../../../components/common/constants"
export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 10vh;

  img {
    position: absolute;
    left: 0;
    width: 100vw;
    max-width: 100%;
    z-index: -99;
  }

  h2 {
    font-weight: 600;
    font-size: 2.5em;
    color: ${color.white};
    padding-top: 7vh;
  }
`

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  grid-gap: 5rem;
  margin-top: 5vh;
`

export const Project = styled.div`
  position: relative;
  max-height: 70vh;
  min-height: 40vh;

  box-shadow: 5px 5px 25px 0 rgba(0, 0, 0, 0.25);
  transition: transform 250ms ease;

  /* background-color: ${color.white}; */

  &:hover {
    transform: scale(1.15);
    border: none;
    background-color: ${color.primary};
  }
`

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  max-height: 50%;
  padding: 15px;
  background-color: ${color.primary};
  h3,
  p {
    color: ${color.white};
    font-size: 0.8rem;
    line-height: 1.1rem;
  }
`
