import styled from "styled-components"
import image from "../../../assets/images/projects_background.svg"
import { color } from "../../../components/common/constants"

import projectBackground from "../../../assets/images/projects_background.svg"

export const Wrapper = styled.div`
  background-color: ${color.primary};
  left: 0;
  width: 100vw;
  margin-left: -15vw;
  padding-left: 15vw;
  padding-right: 15vw;
  margin-right: -15vw;
  overflow-y: hidden;
  overflow-x: hidden;


  padding-bottom: 50px;

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    padding-left: 5vw;
    padding-right: 5vw;
    margin-right: -5vw;
  }
/* 
  &:before {
    content: "";
    background-color: ${color.primary};
    position: absolute;
    height: 50px;
    width: 100vw;
    left: 0;
    z-index: -1;
    max-width: 100%;
  } */

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

  h3 {
    color: #ccc;
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2.5rem;
  margin-top: 5vh;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
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
  padding: 35px;
  /* background-color: ${color.primary}; */
  h3,
  p {
    color: ${color.white};
    line-height: 1.1rem;
  }

  h3{
    font-size: 1.35rem;
    margin-bottom: 25px;
    font-weight: 600;
  }

  p {
    font-size: 0.75rem;
    font-weight: 400;
  }

  svg {
    position: absolute;
    right: 45px;
    top: 35px;
    stroke: ${color.secondary};
  }


  svg:hover {
    cursor: pointer;
    stroke: #fcb4ae;
    transition: stroke 300ms ease-in-out;
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
  li {
    font-size: 0.65rem;
    color: #222;
    font-weight: 500;
    background-color: ${color.secondary};
    padding: 3px 10px;
    border-radius: 15px;
    list-style: none;

    margin: 10px 9px 0 0;
  }

  li:first-child {
    margin-left: 0;
  }
`
