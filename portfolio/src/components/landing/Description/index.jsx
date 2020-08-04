import React from "react"
import { Fragment } from "react"
import {
  Education,
  EducationWrapper,
  University,
  Course,
  StudiesDuration,
  Skills,
  Skill,
  SkillCategory,
  Icon,
  ContentWrapper,
} from "./styles"

import SchoolIcon from "../../../assets/images/icon_school.svg"
import BookIcon from "../../../assets/images/icon_book.svg"

const skills = {
  backend: [
    "Java",
    "Spring",
    "Hibernate",
    "NodeJS",
    "Express",
    "SQL Databases",
  ],
  frontend: ["React", "Gatsby", "Vue", "Bootstrap", "HTML5", "CSS3"],
  scripting: ["Python", "Pandas", "OpenCV"],
  project: ["Git", "Trello"],
}

export const Description = () => {
  return (
    <Fragment>
      <EducationWrapper>
        <h3>Education</h3>
        <Education>
          <Icon src={SchoolIcon}></Icon>
          <ContentWrapper>
            <Course>MSc in Computer Engineering</Course>
            <University>University of Minho</University>
            <StudiesDuration>2015-2018</StudiesDuration>
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

        <h3>Publications</h3>
        <Education>
          <Icon src={BookIcon}></Icon>
          <ContentWrapper>
            <Course>MSc in Computer Engineering</Course>
            <University>University of Minho</University>
            <StudiesDuration>2015-2018</StudiesDuration>
          </ContentWrapper>
        </Education>
        <Education>
          <Icon src={BookIcon}></Icon>
          <ContentWrapper>
            <Course>
              Codeflex: A Web-based Platform for Competitive Programming
            </Course>
            <University>CISTI'2019</University>
          </ContentWrapper>
        </Education>

        <Education>
          <Icon src={BookIcon}></Icon>
          <ContentWrapper>
            <Course>2nd at National Firefighter Robot</Course>
            <University>Guarda</University>
          </ContentWrapper>
        </Education>
      </EducationWrapper>

      <div>
        <h3>Skills</h3>
        <SkillCategory>
          <h4>Backend</h4>
          <Skills>
            {skills.backend.map(sk => (
              <Skill>
                <p>{sk}</p>
              </Skill>
            ))}
          </Skills>
        </SkillCategory>

        <SkillCategory>
          <h4>Frontend</h4>
          <Skills>
            {skills.frontend.map(sk => (
              <Skill>
                <p>{sk}</p>
              </Skill>
            ))}
          </Skills>
        </SkillCategory>
        <SkillCategory>
          <h4>Scripting & Data Science</h4>
          <Skills>
            {skills.scripting.map(sk => (
              <Skill>
                <p>{sk}</p>
              </Skill>
            ))}
          </Skills>
        </SkillCategory>
        <SkillCategory>
          <h4>Tools & Management</h4>
          <Skills>
            {skills.project.map(sk => (
              <Skill>
                <p>{sk}</p>
              </Skill>
            ))}
          </Skills>
        </SkillCategory>
      </div>
    </Fragment>
  )
}
