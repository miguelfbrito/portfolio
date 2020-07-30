import styled from "styled-components"

export const Education = styled.div``
export const University = styled.p``

export const Course = styled.p``

export const StudiesDuration = styled.p`
  margin-bottom: 15px;
`
export const Skills = styled.div`
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
