import styled from "styled-components"
import { color } from "../../../common/constants"

import header_image from "../../../../assets/images/header-vector.svg"

export const Wrapper = styled.div`
  margin-left: -15vw;
  padding-left: 15vw;
  padding-right: 15vw;
  margin-right: -15vw;

  background-color: ${color.primary};
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  padding-top: 25px;

  animation: fadeInPlace 0.75s;

  h1,
  ul {
    line-height: 3rem;
  }

  h1 {
    color: white;
    font-weight: 800;
    letter-spacing: 0.055em;
    color: #f2f2f2;
    font-size: 1.6rem;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      display: inline-block;
    }
  }

  a {
    text-decoration: none;
    margin: 0 30px;
  }

  li:last-child > a {
    margin-right: 0 !important;
    padding-right: 0;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    margin-top: calc(5vh + 25px);
    /* margin-left: -15vw; */
    width: 50vw;
    height: auto;
    background-image: url(${header_image});
  }

  @media screen and (max-width: 700px) {
    padding-top: 0;
  }

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    padding-left: 5vw;
    padding-right: 5vw;
    margin-right: -5vw;
  }
`
export const Wave = styled.img`
  /* position: absolute;
    display: block;
    z-index: -1;
    width: 100%;
    left: 0; */
  /* transform: scale(-1, 1); */
  margin-left: -15vw;
  margin-right: -15vw;
  width: 100vw;
  position: relative;
  pointer-events: none;

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    margin-right: -5vw;
  }
`
