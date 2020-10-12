import styled from "styled-components"
import { color } from "../../common/constants"

export const Container = styled.div`
  width: 100%;

  h2,
  h3,
  a,
  p {
    color: ${color.whitesecondary};
  }

  h2 {
    color: ${color.primary};
  }
  h3 {
    color: ${color.secondary};
    opacity: 0.9;
  }

  & > p {
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1000px) {
    margin: 10vh 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  grid-gap: 1rem;
  grid-template-areas: "education skills";

  /* h3,
  h4,
  p {
    color: #ddd;
  } */

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
  }

  svg {
    transform: scale(1.15);
  }
  svg path {
    fill: ${color.secondary};
  }

  @media only screen and (max-width: 1280px) {
    /* grid-template-columns: 1.2fr 1fr;
    grid-template-areas:
      "intro intro"
      "education skills"; */
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "education"
      "skills";
  }
`

export const EducationContainer = styled.div`
  grid-area: education;
`

export const EducationWrapper = styled.div`
  animation: fadeIn 1s;
  opacity: 0;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  margin-bottom: 25px;
`

export const Education = styled.div`
  display: flex;
`

export const University = styled.p``

export const ContentWrapper = styled.div`
  padding: 0.6rem 0.85rem;
  a {
    font-weight: 500;
  }
`

export const Course = styled.p``

export const SkillWrapper = styled.div`
  animation: fadeIn 1s;
  opacity: 0;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
`

export const Skills = styled.div`
  grid-area: skills;
  display: flex;
  flex-wrap: wrap;
`

export const Skill = styled.div`
  background-color: #ddd;
  padding: 6px 15px;
  border-radius: 20px;

  margin-top: 10px;
  margin-right: 10px;

  p {
    font-size: 0.85rem;
    text-align: center;
    font-weight: 400;
    color: ${color.primarydark};
  }
`
export const SkillCategory = styled.div`
  &:not(:nth-child(2)) {
    margin-top: 35px;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.8rem;
    color: ${color.white};
    opacity: 0.9;

    text-transform: uppercase;
  }

  h4:before {
    content: "";
    display: inline-block;
    margin-right: 5px;
    color: red;
    width: 2px;
    height: 0.65rem;
    background-color: ${color.secondary};
    border-radius: 20%;
    vertical-align: middle;
    margin-bottom: 1px;
  }
`

export const ExtraInfo = styled.p`
  margin-top: 3px;
  /* font-size: 0.95rem !important; */
  opacity: 0.5;
`
