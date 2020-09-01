import React, { Fragment, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Navbar } from "../components/landing/Header/Navbar"
import { Container } from "../components/common/Container"
import GlobalStyle from "../components/common/globalStyle"
import { Intro } from "../components/landing/Intro"
import { Description } from "../components/landing/Description"
import developer from "../assets/images/undraw_code_thinking.svg"
import programming from "../assets/images/undraw_programming.svg"
import { Grid, ImageWrapper, Image, Arrow } from "../components/common/styles"
import Helmet from "react-helmet"
import { Projects } from "../components/landing/Projects"
import { Footer } from "../components/landing/Footer"
import headerImage from "../assets/images/header-vector.svg"
import arrow from "../assets/images/icon_arrow.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { theme } from "../components/common/theme"

export default () => {
  const [projectHeight, setProjectHeight] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <GlobalStyle />

      <img
        src={headerImage}
        style={{
          position: "absolute",
          display: "block",
          zIndex: "-1",
          width: "100%",
          left: 0,
        }}
        class="headerImage"
        alt="Thinking developer"
      />
      <Container>
        <section style={{ minHeight: "100vh" }} id="about">
          <Navbar />
          <Grid>
            <Intro />
            <Description />
            <ImageWrapper>
              <Image src={developer} alt="Thinking developer"></Image>
            </ImageWrapper>
          </Grid>
          <AnchorLink href="#projects">
            <Arrow src={arrow} alt="Arrow down" />
          </AnchorLink>
        </section>
        {/* <section style={{ minHeight: `${projectHeight}px` }} id="projects"> */}
        <section style={{}} id="projects">
          <Projects setSectionHeight={height => setProjectHeight(height)} />
        </section>
        <section style={{ minHeight: "100vh" }} id="contact">
          <h3>Contact</h3>
        </section>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
