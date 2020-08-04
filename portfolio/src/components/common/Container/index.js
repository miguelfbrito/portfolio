import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 80%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }

  img {
    display: flex;
    align-items: center;
  }
`
