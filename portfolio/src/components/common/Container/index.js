import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 65%;

  @media only screen and (max-width: 1000px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 90%;
  }

  img {
    display: flex;
    align-items: center;
  }
`
