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

const MyProjects = [
  {
    name: "ToMI",
    description:
      "Topic Modelling-oriented Microservice Identification (ToMI) resorts to topic modelling and clustering techniques to identify microservices candidates out of monolithic applications.",
    technologies: ["Java", "JavaParser", "Python", "Sklearn"],
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
                <h3>{project.name}</h3>

                <a href={project.github}>
                  <svg
                    width="25"
                    data-ga="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                  </svg>
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
