import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr 2fr;
  grid-gap: 2rem;
  grid-template-areas:
    "intro intro image"
    "education skills image";

  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1.2fr 1fr;
    grid-template-areas:
      "intro intro"
      "education skills";
  }
`

export const ImageWrapper = styled.div`
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 30vw;
  display: flex;
  margin-top: 50px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
`
