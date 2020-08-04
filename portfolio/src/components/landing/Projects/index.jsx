import React from "react"
import { Wrapper, ProjectWrapper, Project, Content } from "./styles"

import projectBackground from "../../../assets/images/projects_background.svg"
export const Projects = () => {
  return (
    <Wrapper>
      <img src={projectBackground} />
      <h2>Projects</h2>

      <ProjectWrapper>
        <Project>
          <div>
            {/* <img src="" alt="" /> */}

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
            {/* <img src="" alt="" /> */}

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
            {/* <img src="" alt="" /> */}

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
