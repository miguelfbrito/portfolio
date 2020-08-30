import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
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

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "intro"
      "education"
      "skills";
  }
`

export const ImageWrapper = styled.div`
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  opacity: 0;
  animation: fadeInPlace 1s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 100%;
  display: flex;
  margin-top: 10vh;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
`

export const Arrow = styled.img`
  cursor: pointer;
  margin: 0 auto;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.15);
    filter: brightness(1.2);
  }
`
