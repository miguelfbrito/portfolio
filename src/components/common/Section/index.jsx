import React, { Fragment } from "react"
import { Arrow } from "../Arrow"
import { Container, ArrowWrapper, ChildrenWrapper } from "./styles"

export const Section = ({
  id,
  link,
  children,
  color,
  arrowColor,
  minHeight,
}) => {
  console.log(children)

  return (
    <Fragment>
      <Container key={id} id={id} color={color} minHeight={minHeight}>
        <ChildrenWrapper minHeight={minHeight}>{children}</ChildrenWrapper>
        {link && (
          <ArrowWrapper>
            <Arrow link={link} arrowColor={arrowColor} />
          </ArrowWrapper>
        )}
      </Container>
    </Fragment>
  )
}
