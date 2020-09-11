import React from "react"
import {
  Education,
  University,
  Course,
  StudiesDuration,
  Skills,
  Skill,
  SkillCategory,
  SkillWrapper,
  Icon,
  ContentWrapper,
  EducationContainer,
  EducationWrapper,
  Container,
  Wrapper,
} from "./styles"

import { Arrow } from "../../common/Arrow"

import { Section } from "../../common/Section"
import { color } from "../../common/constants"
import SchoolIcon from "../../../assets/images/icon_school.svg"
import BookIcon from "../../../assets/images/icon_book.svg"
import MedalIcon from "../../../assets/images/medal.svg"

const categorySkills = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring",
      "Hibernate",
      "NodeJS",
      "Express",
      "SQL Databases",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Gatsby", "Vue", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    category: "Scripting & Data Science",
    skills: ["Python", "Pandas", "OpenCV"],
  },
  {
    category: "Others",
    skills: ["Git", "Trello", "Figma"],
  },
]

export const EducationSkills = () => {
  return (
    <Section id="education" link="#projects" color={color.primarydark}>
      <Container>
        <h2>Education</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rem.
        </p>
        <Wrapper>
          <EducationContainer>
            <EducationWrapper>
              <h3>Education</h3>
              <Education>
                <Icon src={SchoolIcon}></Icon>
                <ContentWrapper>
                  <Course>MSc in Software Engineering</Course>
                  <University>University of Minho</University>
                  <StudiesDuration>2018-2020</StudiesDuration>
                </ContentWrapper>
              </Education>

              <Education>
                <Icon src={SchoolIcon}></Icon>
                <ContentWrapper>
                  <Course>BSc in Computer Engineering</Course>
                  <University>Polytechnic of Guarda</University>
                  <StudiesDuration>2015-2018</StudiesDuration>
                </ContentWrapper>
              </Education>

              <Education>
                <Icon src={SchoolIcon}></Icon>
                <ContentWrapper>
                  <Course>Linux Essentials</Course>
                  <University>Linux Professional Institute</University>
                  <StudiesDuration>2015</StudiesDuration>
                </ContentWrapper>
              </Education>
            </EducationWrapper>

            <EducationWrapper>
              <h3>Publications</h3>
              <Education>
                <Icon src={BookIcon}></Icon>
                <ContentWrapper>
                  <Course>
                    Codeflex: A Web-based Platform for Competitive Programming
                  </Course>
                  <University>
                    CISTI, 2019 (
                    <a
                      href="https://ieeexplore.ieee.org/document/8760776"
                      target="_blank"
                    >
                      link
                    </a>
                    )
                  </University>
                </ContentWrapper>
              </Education>

              <Education>
                <Icon src={MedalIcon}></Icon>
                <ContentWrapper>
                  <Course>DGES Merit Scolarship student</Course>
                  <University> 2018</University>
                </ContentWrapper>
              </Education>

              <Education>
                <Icon src={MedalIcon}></Icon>
                <ContentWrapper>
                  <Course>2nd at National Firefighter Robot</Course>
                  <University>
                    Guarda, 2017 (
                    <a
                      href="https://pplware.sapo.pt/eventos/pplware-esta-no-concurso-nacional-robo-bombeiro-2017/"
                      target="_blank"
                    >
                      link
                    </a>
                    )
                  </University>
                </ContentWrapper>
              </Education>
            </EducationWrapper>
          </EducationContainer>

          <SkillWrapper>
            <h3>Skills</h3>
            {categorySkills.map(element => (
              <SkillCategory>
                <h4>{element.category}</h4>
                <Skills>
                  {element.skills.map(skill => (
                    <Skill>
                      <p>{skill}</p>
                    </Skill>
                  ))}
                </Skills>
              </SkillCategory>
            ))}
          </SkillWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}
