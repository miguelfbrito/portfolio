import React, { Fragment } from "react"
import { Wrapper, Content, InnerWrapper, ImageWrapper, Image } from "./styles"
import { Arrow } from "../../common/Arrow"
import { Section } from "../../common/Section"

import developer from "../../../assets/images/undraw_code_thinking.svg"
import programming from "../../../assets/images/undraw_programming.svg"

export const Introduction = () => {
  return (
    <Section id="introduction" link="#education">
      <Wrapper>
        <InnerWrapper>
          <Content>
            <h2>Hello there! I'm </h2>
            <h3>Miguel Brito</h3>
            <h4>
              I'm a <b>Software Engineer</b> from Portugal who enjoys building
              robust applications. I like spending time thinking deeply about
              problems and understanding the underlying core concepts of new
              paradigms and technologies.
            </h4>
            <h4>
              Apart from the technology world I'm passionate about Neuroscience,
              Psychology, Space Exploration and Weightlifting.
            </h4>
          </Content>

          <ImageWrapper>
            <svg
              width="365px"
              height="372px"
              viewBox="0 0 365 372"
              version="1.1"
            >
              <path
                d="M178.746 371C281.059 371 364 288.173 364 186S328.634 1 178.746 1C28.857 1 65.06 129 24.004 186c-76.087 105.633 52.429 185 154.742 185z"
                stroke=""
                fill="#feefefe"
                fill-rule="evenodd"
              ></path>
            </svg>
            <Image src={developer} alt="Thinking developer"></Image>
          </ImageWrapper>
        </InnerWrapper>
        {/* <Arrow link="#education" /> */}
      </Wrapper>
    </Section>
  )
}
