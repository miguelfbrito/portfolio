import React from "react"
import {
  Wrapper,
  ProjectWrapper,
  ImageWrapper,
  Project,
  Content,
} from "./styles"

import codeflex from "../../../assets/images/projects/codeflex.png"
import test from "../../../assets/images/undraw_code_thinking.svg"

import projectBackground from "../../../assets/images/projects_background.svg"
export const Projects = () => {
  return (
    <Wrapper>
      <img src={projectBackground} style={{ height: "200%" }} />
      <h2>Projects</h2>

      <ProjectWrapper>
        <Project>
          <div>
            <ImageWrapper>
              <img src={test} alt="" />
            </ImageWrapper>
            <Content>
              <h3>Codeflex</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptas sed eum error quis doloremque vitae ab quia at, beatae
                saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos
                repellendus? Labore officia nemo culpa blanditiis sequi modi
              </p>
            </Content>
          </div>
        </Project>
        <Project>
          <div>
            <div>
              <img src={codeflex} alt="" />
            </div>
            <Content>
              <h3>Codeflex</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptas sed eum error quis doloremque vitae ab quia at, beatae
                saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos
                repellendus? Labore officia nemo culpa blanditiis sequi modi
              </p>
            </Content>
          </div>
        </Project>
        <Project>
          <div>
            <div>
              <img src={codeflex} alt="" />
            </div>
            <Content>
              <h3>Codeflex</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptas sed eum error quis doloremque vitae ab quia at, beatae
                saepe reiciendis culpa soluta? Aliquid, pariatur! Aliquid, eos
                repellendus? Labore officia nemo culpa blanditiis sequi modi
              </p>
            </Content>
          </div>
        </Project>
      </ProjectWrapper>
    </Wrapper>
  )
}
