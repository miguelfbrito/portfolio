import React, { Fragment, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Navbar } from "../components/landing/Header/Navbar"
import { Container } from "../components/common/Container/styles"
import GlobalStyle from "../components/common/globalStyle"
import { Introduction } from "../components/landing/Introduction"
import { EducationSkills } from "../components/landing/EducationSkills"
import { Grid } from "../components/common/styles"
import Helmet from "react-helmet"
import { Projects } from "../components/landing/Projects"
import { Footer } from "../components/landing/Footer"
import headerImage from "../assets/images/header-vector.svg"
import { theme } from "../components/common/theme"
import { Contact } from "../components/landing/Contact"

import { color } from "../components/common/constants"

export default () => {
  const [projectHeight, setProjectHeight] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Miguel Brito is a Portuguese Software Engineer who enjoys building robust web applications and solving complex problems."
        ></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <title>Miguel Brito - Software Engineer</title>
      </Helmet>
      <GlobalStyle />

      <Container>
        <Navbar />
        <Introduction />
        <EducationSkills />
        <Projects />
        <Contact />
      </Container>
    </ThemeProvider>
  )
}
