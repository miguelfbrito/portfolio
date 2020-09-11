import styled from "styled-components"
import { color } from "../../common/constants"

export const Container = styled.div`
  h2,
  h3,
  p {
    color: ${color.white};
  }

  h2 {
    color: ${color.primary};
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

  img {
    filter: fill(${color.white});
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
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

export const Icon = styled.img`
  min-width: 1.5rem;
  max-width: 1.5rem;
`

export const University = styled.p``

export const ContentWrapper = styled.div`
  padding: 0.6rem 0.85rem;
  a {
    font-weight: 500;
  }
`

export const Course = styled.p``

export const StudiesDuration = styled.p``

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
  padding: 8px 15px;
  border-radius: 20px;

  margin-top: 7px;
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
    margin-top: 20px;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`
