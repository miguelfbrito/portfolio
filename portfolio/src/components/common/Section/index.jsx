import React, { Fragment } from "react"
import { Arrow } from "../Arrow"
import { Container, ArrowWrapper, ChildrenWrapper } from "./styles"

export const Section = ({ id, link, children, color, arrowColor }) => {
  console.log(children)

  return (
    <Fragment>
      <Container key={Math.floor(Math.random() * 10000)} id={id} color={color}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        {link && (
          <ArrowWrapper>
            <Arrow link={link} arrowColor={arrowColor} />
          </ArrowWrapper>
        )}
      </Container>
    </Fragment>
  )
}
