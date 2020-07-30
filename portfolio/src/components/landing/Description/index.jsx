import React from "react"
import { Fragment } from "react"
import {
  Education,
  University,
  Course,
  StudiesDuration,
  Skills,
  Skill,
  SkillCategory,
} from "./styles"

import { Grid, Row, Col } from "../../common/Grid"

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
      <Grid>
        <Row style={{ marginTop: "25px" }}>
          <Col size={1}>
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
          </Col>
          <Col size={1}>
            <Education>
              <h3>Education</h3>
              <Course>Computer Science</Course>
              <University>University of Minho</University>
              <StudiesDuration>2015-2018</StudiesDuration>
              <Course>Computer Science</Course>
              <University>University of Minho</University>
              <StudiesDuration>2015-2018</StudiesDuration>
            </Education>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  )
}
