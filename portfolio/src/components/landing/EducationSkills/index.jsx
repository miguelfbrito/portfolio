import React from "react"
import {
  Education,
  University,
  Course,
  ExtraInfo,
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

import { SchoolIcon, BookIcon, MedalIcon } from "../../common/Icons"

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
  const iconOpacity = 0.8

  return (
    <Section
      id="education"
      link="#projects"
      color={color.primarydark}
      arrowColor={color.secondary}
    >
      <Container>
        {/* <h2>Education</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rem.
        </p> */}
        <Wrapper>
          <EducationContainer>
            <EducationWrapper>
              <h3>Education</h3>
              <Education>
                <SchoolIcon opacity={iconOpacity} />
                <ContentWrapper>
                  <Course>MSc in Software Engineering</Course>
                  <University>University of Minho</University>
                  <ExtraInfo>2018-2020</ExtraInfo>
                </ContentWrapper>
              </Education>

              <Education>
                <SchoolIcon opacity={iconOpacity} />
                <ContentWrapper>
                  <Course>BSc in Computer Engineering</Course>
                  <University>Polytechnic of Guarda</University>
                  <ExtraInfo>2015-2018</ExtraInfo>
                </ContentWrapper>
              </Education>

              <Education>
                <SchoolIcon opacity={iconOpacity} />
                <ContentWrapper>
                  <Course>Linux Essentials</Course>
                  <University>Linux Professional Institute</University>
                  <ExtraInfo>2015</ExtraInfo>
                </ContentWrapper>
              </Education>
            </EducationWrapper>

            <EducationWrapper>
              <h3>Achievements</h3>
              <Education>
                <BookIcon opacity={iconOpacity} />
                <ContentWrapper>
                  <Course>
                    Codeflex: A Web-based Platform for Competitive Programming
                  </Course>
                  <ExtraInfo>
                    CISTI, 2019 (
                    <a
                      href="https://ieeexplore.ieee.org/document/8760776"
                      target="_blank"
                    >
                      link
                    </a>
                    )
                  </ExtraInfo>
                </ContentWrapper>
              </Education>

              <Education>
                <MedalIcon opacity={iconOpacity} />
                <ContentWrapper>
                  <Course>DGES Merit Scolarship student</Course>
                  <ExtraInfo> 2018</ExtraInfo>
                </ContentWrapper>
              </Education>

              <Education>
                <MedalIcon opacity={iconOpacity} />
                <ContentWrapper>
                  <Course>2nd at National Firefighter Robot</Course>
                  <ExtraInfo>
                    Guarda, 2017 (
                    <a
                      href="https://pplware.sapo.pt/eventos/pplware-esta-no-concurso-nacional-robo-bombeiro-2017/"
                      target="_blank"
                    >
                      link
                    </a>
                    )
                  </ExtraInfo>
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
