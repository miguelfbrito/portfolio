import styled from "styled-components"
import image from "../../../assets/images/projects_background.svg"
import { color } from "../../../components/common/constants"

import projectBackground from "../../../assets/images/projects_background.svg"

export const Wrapper = styled.div`
  /* background-color: ${color.primary}; */
  width: 100%;

  /* @media only screen and (max-width: 1000px) { */
    padding: 10vh 0;
  /* } */

  h2 {
    font-weight: 600;
    font-size: 2.5em;
    color: ${color.white};
  }

  h3 {
    color: ${color.white};
    opacity: 0.75;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 10px;
  }

  h4   {
    font-weight: 600;
    font-size: 1.75rem;
    color: ${color.white};
    line-height: 2rem;
    margin-bottom: 10px;
  }
`

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  grid-gap: 2.5rem;
  margin-top: 5vh;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
`

export const Project = styled.div`
  position: relative;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); */

  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);

  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  overflow: hidden;
  border-radius: 15px;

  &:hover {
    transform: translateY(-5px);
  }

  background-color: #454875;
  img {
    position: relative;
    width: 90%;
    height: auto;
    top: 0;
    margin: 5%;
    z-index: 1;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
  }
`

export const ImageWrapper = styled.div`
  height: 100%;
  max-height: 25%;
`

export const Content = styled.div`
  position: relative;
  padding: 25px 30px;
  /* padding-bottom: 45px; */
  /* background-color: ${color.primary}; */
  h3,
  p {
    color: ${color.white};
  }

  h3{
    font-size: 1.75rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.35rem;
    margin-bottom: 5px;
    opacity:  0.8;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 25px;
    width: 25px;
    transition: all 200ms ease-in-out;
    path {
      fill: ${color.secondary};
    }
  }


  svg:hover {
    cursor: pointer;
    /* stroke: #fcb4ae; */
    filter: brightness(150%);
    transform: scale(0.85);
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

export const Technologies = styled.ul`
  display: flex;
  /* justify-content: flex-end; */
  flex-wrap: wrap;

  /* position: absolute; */
  li {
    font-size: 0.8rem;
    color: #222;
    font-weight: 500;
    background-color: ${color.secondary};
    padding: 5px 10px;
    border-radius: 15px;
    list-style: none;

    margin: 10px 9px 0 0;
  }

  li:first-child {
    margin-left: 0;
  }
`
