import React, { Fragment } from "react"
import { Navbar } from "../components/landing/Header/Navbar"
import { Container } from "../components/common/Container"
import GlobalStyle from "../components/common/globalStyle"
import { Intro } from "../components/landing/Intro"
import { Description } from "../components/landing/Description"
import developer from "../assets/images/undraw_code_thinking.svg"
import programming from "../assets/images/undraw_programming.svg"
import { Grid, ImageWrapper, Image } from "./styles"
import Helmet from "react-helmet"
import { Projects } from "../components/landing/Projects"
import headerImage from "../assets/images/header-vector.svg"

export default () => (
  <Fragment>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
    </Helmet>
    <GlobalStyle />
    <img
      src={headerImage}
      style={{
        position: "relative",
        marginBottom: "-20vh",
        zIndex: "-99",
        height: "25vh",
        width: "100vw",
        maxWidth: "100%",
      }}
      width="100%"
      alt="Thinking developer"
    />

    <Container>
      <section style={{ height: "100vh" }}>
        <Navbar />
        <Grid>
          <Intro />
          <Description />
          <ImageWrapper>
            <Image src={developer} alt="Thinking developer"></Image>
          </ImageWrapper>
        </Grid>
      </section>
      <section style={{ height: "100vh" }}>
        <Projects />
      </section>
    </Container>
  </Fragment>
)
