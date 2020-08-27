import styled from "styled-components"

export const EducationWrapper = styled.div`
  grid-area: education;

  h3 {
    font-weight: 600;
  }
`

export const Education = styled.div`
  display: flex;

  p {
    font-size: 0.85rem;
    font-weight: 500;
  }
`

export const Icon = styled.img`
  min-width: 1.5rem;
`

export const University = styled.p``

export const ContentWrapper = styled.div`
  padding: 1rem 0.8rem;
`

export const Course = styled.p``

export const StudiesDuration = styled.p``

export const SkillWrapper = styled.div`
  h3 {
    font-weight: 600;
  }

  h4 {
    font-weight: 500;
  }
`

export const Skills = styled.div`
  grid-area: skills;
  display: flex;
  flex-wrap: wrap;
`

export const Skill = styled.div`
  background-color: #ddd;
  padding: 7px 12px;
  border-radius: 20px;

  margin-top: 5px;
  margin-right: 10px;

  p {
    font-size: 12px;
    text-align: center;
  }
`
export const SkillCategory = styled.div`
  &:not(:nth-child(2)) {
    margin-top: 20px;
  }

  h4 {
    font-size: 12px;
  }
`
