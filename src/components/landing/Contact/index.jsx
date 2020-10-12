import React from "react"
import { Section } from "../../common/Section"
import { Footer } from "../Footer"
import { Wrapper, Icon, Icons } from "./styles"

import { GithubIcon, EmailIcon } from "../../common/Icons"

export const Contact = () => {
  return (
    <div style={{ position: "relative" }}>
      <Section id="contact">
        <Wrapper id="contact">
          <h1>Get in touch!</h1>
          <Icons>
            <Icon>
              <a
                href="mailto:miguel@miguelfbrito.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <EmailIcon />
              </a>
            </Icon>
            <Icon>
              <a href="https://github.com/miguelfbrito" target="_blank">
                <GithubIcon style={{ transform: "scale(1.53)" }} />
              </a>
            </Icon>
          </Icons>
        </Wrapper>
      </Section>
      <Footer />
    </div>
  )
}
