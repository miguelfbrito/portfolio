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
            <Image src={developer} alt="Thinking developer"></Image>
          </ImageWrapper>
        </InnerWrapper>
        {/* <Arrow link="#education" /> */}
      </Wrapper>
    </Section>
  )
}
