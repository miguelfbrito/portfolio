import React from "react"
import { FooterSection, Wrapper, Left, Right, Links } from "./styles"

export const Footer = () => {
  return (
    <FooterSection>
      <Wrapper>
        <Left>
          <p>Personal portfolio designed and made by Miguel Brito.</p>
          <p>Designed with Figma and built with GatsbyJS.</p>
          <p>© {new Date().getFullYear()} Miguel Brito. All rights reserved.</p>
        </Left>

        <Right>
          <a href="https://miguelfbrito.com">miguelfbrito.com</a>
          <Links>
            <a href="https://github.com/miguelfbrito" target="_blank">
              GitHub
            </a>
            <a href="https://miguelfbrito.com" target="_blank">
              LinkedIn
            </a>
          </Links>
        </Right>
      </Wrapper>
    </FooterSection>
  )
}
