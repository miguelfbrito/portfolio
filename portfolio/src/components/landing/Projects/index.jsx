import React, { useEffect, useState, useRef, useCallback } from "react"
import {
  Wrapper,
  ProjectWrapper,
  ImageWrapper,
  Project,
  Content,
  Technologies,
} from "./styles"

import codeflex from "../../../assets/images/projects/codeflex.png"
import test from "../../../assets/images/undraw_code_thinking.svg"
import projectBackground from "../../../assets/images/projects_background.svg"
import { createRef } from "react"

const MyProjects = [
  {
    name: "Codeflex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas sed eum error quis doloremque vitae ab quia at, beatae saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos repellendus? Labore officia nemo culpa blanditiis sequi modi",
    technologies: ["Java", "Spring", "Hibernate", "React"],
    github: "https://github.com/miguelfbrito/codeflex",
    teste: <p>KEKEKE</p>,
  },
  {
    name: "Codeflex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas sed eum error quis doloremque vitae ab quia at, beatae saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos repellendus? Labore officia nemo culpa blanditiis sequi modi",
    technologies: ["Java", "Spring", "Hibernate", "React"],
    github: "https://github.com/miguelfbrito/codeflex",
    teste: <p>KEKEKE</p>,
  },
  {
    name: "Codeflex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas sed eum error quis doloremque vitae ab quia at, beatae saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos repellendus? Labore officia nemo culpa blanditiis sequi modi",
    technologies: ["Java", "Spring", "Hibernate", "React"],
    github: "https://github.com/miguelfbrito/codeflex",
    teste: <p>KEKEKE</p>,
  },
  {
    name: "Codeflex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas sed eum error quis doloremque vitae ab quia at, beatae saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos repellendus? Labore officia nemo culpa blanditiis sequi modi",
    technologies: ["Java", "Spring", "Hibernate", "React"],
    github: "https://github.com/miguelfbrito/codeflex",
    teste: <p>KEKEKE</p>,
  },
]

export const Projects = () => {
  const wrapperRef = useRef(null)
  const [projectWrapperHeight, setProjectWrapperHeight] = useState(0)

  const onResize = () => {
    console.log("Resizing")
    console.log(wrapperRef.current)

    if (wrapperRef.current) {
      console.log("hi: " + wrapperRef.current.offsetHeight)
      setProjectWrapperHeight(wrapperRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
  }, [])

  return (
    <Wrapper>
      <img
        src={projectBackground}
        style={{
          minHeight: `${projectWrapperHeight + 300}px`,
          marginBottom: "300px",
        }}
      />
      <h2>Projects</h2>
      <h3>Things I've built and helped building over the years.</h3>
      <ProjectWrapper ref={wrapperRef}>
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
  )
}
