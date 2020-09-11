import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Wrapper } from "./styles"
import arrow from "../../../assets/images/icon_arrow.svg"

export const Arrow = ({ link, arrowColor }) => {
  return (
    <Wrapper arrowColor={arrowColor}>
      <AnchorLink href={link}>
        <svg
          width="58"
          height="49"
          viewBox="0 0 58 49"
          fill="#575A89"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.9075 20.7592L29 31.8275L40.0925 20.7592L43.5 24.1667L29 38.6667L14.5 24.1667L17.9075 20.7592Z" />
        </svg>
      </AnchorLink>
    </Wrapper>
  )
}
