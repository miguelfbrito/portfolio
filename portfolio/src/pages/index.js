import React, { Fragment } from "react"
import { Navbar } from "../components/landing/Header/Navbar"
import { Container } from "../components/common/Container"
import GlobalStyle from "../components/common/globalStyle"
import { Intro } from "../components/landing/Intro"
import { Description } from "../components/landing/Description"
import developer from "../assets/images/undraw_code_thinking.svg"
import programming from "../assets/images/undraw_programming.svg"
import { Grid, Row, Col } from "../components/common/Grid"

export default () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Navbar />
      <Grid>
        <Row style={{ height: "90vh" }}>
          <Col size={1}>
            <Intro />
            <Description />
          </Col>
          <Col
            size={1}
            collapse="xs"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={developer}
              style={{ marginTop: "30vh" }}
              width="650px"
              alt="Thinking developer"
            />
          </Col>
        </Row>
      </Grid>
    </Container>
  </Fragment>
)
