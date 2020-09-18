import React from "react"
import {
  Wrapper,
  ProjectWrapper,
  ImageWrapper,
  Project,
  Content,
  Technologies,
} from "./styles"

import { color } from "../../common/constants"

import { Section } from "../../common/Section"
import codeflex from "../../../assets/images/projects/codeflex.png"
import test from "../../../assets/images/undraw_code_thinking.svg"
import projectBackground from "../../../assets/images/projects_background.svg"
import { createRef } from "react"

import { GithubIcon } from "../../common/Icons"

const MyProjects = [
  {
    name: "ToMMI",
    description:
      "Topic Modelling-oriented Microservice Identification (ToMMI) resorts to topic modelling and clustering techniques to identify microservices candidates out of monolithic applications.",
    technologies: ["Java", "JavaParser", "Python", "NetworkX"],
    github: "https://github.com/miguelfbrito/microservice-identification",
  },
  {
    name: "Sports Betting",
    description:
      "A sports betting web application supporting multiple sports and bet types. Designed to be highly scalable based on a microservices architecture. ",
    technologies: ["Node", "Express", "MySQL", "React"],
    github: "https://github.com/miguelfbrito/codeflex",
  },
  {
    name: "Codeflex",
    description:
      "A competitive programming web application capable of evaluating user's submissions for multiple languages either while practising or competing in tournaments.",
    technologies: ["Java", "Spring", "Hibernate", "React"],
    github: "https://github.com/miguelfbrito/codeflex",
  },
  {
    name: "Digital Base Flow",
    description:
      "An interface built upon graph structures to help a company close the gap in business analytics with their clients through an interactive flow of processes.",
    technologies: ["Vue", "KonvaJS"],
    github: "https://github.com/miguelfbrito/codeflex",
  },
]

export const Projects = ({ setSectionHeight }) => {
  return (
    <Section
      id="projects"
      link="#contact"
      color={color.primary}
      arrowColor={color.secondary}
    >
      <Wrapper>
        <h2>Projects</h2>
        <h3>Things I've built and helped building over the years.</h3>
        <ProjectWrapper>
          {MyProjects.map(project => (
            <Project>
              <Content>
                <h4>{project.name}</h4>

                <a href={project.github}>
                  <GithubIcon />
                </a>

                <p>{project.description}</p>

                <Technologies>
                  {project.technologies.map(tech => (
                    <li>{tech}</li>
                  ))}
                </Technologies>
              </Content>
            </Project>
          ))}
        </ProjectWrapper>
      </Wrapper>
    </Section>
  )
}
