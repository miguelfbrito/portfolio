import styled from "styled-components"
import image from "../../../assets/images/projects_background.svg"
import { color } from "../../../components/common/constants"
export const Wrapper = styled.div`
  margin-top: 10vh;

  img {
    position: absolute;
    left: 0;
    width: 100vw;
    max-width: 100%;
    z-index: -1;
    height: 100vh;
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
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-gap: 7rem;
  margin-top: 5vh;
`

export const Project = styled.div`
  position: relative;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  border-radius: 4%;
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  overflow: hidden;

  /* background-color: ${color.white}; */

  background-color: #e6e8ff;
  /* background-color: 
  /* background-color: #383c66; */
  /* background: rgb(242, 242, 242);
  background: linear-gradient(
    280deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(171, 178, 219, 1) 100%
  ); */
   &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
    border: none;
  }

  img {
    position: relative;
    width: 90%;
    height: auto;
    top: 0;
    margin: 5%;
    z-index: 1;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
  }

  /* clip-path: inset(0% 10% 0% 0%); */
`

export const ImageWrapper = styled.div`
  height: 100%;
  max-height: 25%;
`

export const Content = styled.div`
  position: relative;
  max-height: 50%;
  padding: 35px;
  /* background-color: ${color.primary}; */
  h3,
  p {
    color: ${color.primary};
    line-height: 1.1rem;
  }

  h3{
    font-size: 1.1rem;
    margin: 15px auto;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
`

export const Description = styled.div`
  background-color: red;
  clip-path: inset(80% 0% 0% 0%);

  transition: clip-path 250ms ease-in-out;
  &:hover {
    clip-path: inset(0% 0% 0% 0%);
  }
`
