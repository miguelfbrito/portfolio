import React from "react"
import { Section } from "../../common/Section"
import { Footer } from "../Footer"
import { Wrapper, Icons } from "./styles"

import icon_github from "../../../assets/images/icon_github.svg"
import icon_email from "../../../assets/images/icon_email.svg"

export const Contact = () => {
  return (
    <React.Fragment>
      <Section id="contact">
        <Wrapper id="contact">
          <h1>Get in touch!</h1>
          <Icons>
            <a href="">
              <img src={icon_email} />
            </a>
            <img src={icon_github} />
          </Icons>
        </Wrapper>
      </Section>
      <Footer />
    </React.Fragment>
  )
}
