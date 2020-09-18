import React from "react"

import { NavbarLinks } from "../NavbarLinks"
import { Container, Wrapper, Wave } from "./styles"

import header from "../../../../assets/images/header-vector.svg"

export const Navbar = () => (
  <Container>
    <Wrapper>
      <h1>Portfolio</h1>
      <NavbarLinks />
    </Wrapper>

    <Wave src={header} />
  </Container>
)
