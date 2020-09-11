import React from "react"

import { NavbarLinks } from "../NavbarLinks"
import { Wrapper, Wave } from "./styles"

import header from "../../../../assets/images/header-vector.svg"

export const Navbar = () => (
  <div>
    <Wrapper>
      <h1>Portfolio</h1>
      <NavbarLinks />
    </Wrapper>

    <Wave
      src={header}
      style={{}}
      className="headerImage"
      alt="Thinking developer"
    />
  </div>
)
