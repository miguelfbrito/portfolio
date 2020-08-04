import React from "react"
import { Link } from "./styles"

export const NavbarLinks = () => {
  return (
    <ul>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#projects">Projects</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  )
}
