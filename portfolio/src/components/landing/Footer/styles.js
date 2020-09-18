import styled from "styled-components"
import { color } from "../../common/constants"

export const FooterSection = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* padding-left: 15vw;
  padding-right: 15vw;
  margin-right: -15vw; */

  background-color: ${color.primary};
  position: absolute;
  /* height: 125px; */
  width: 100vw;
  padding: 40px 0;

  margin-left: -15vw;
  margin-right: -15vw;

  a,
  p {
    color: ${color.white};
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.9;
    line-height: 1.1rem;
  }
  @media only screen and (max-width: 1000px) {
    /* width: 110vw; */
    margin-left: -5vw;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-left: 5vw;
    padding: 15px 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  padding-left: 15vw;
  padding-right: 15vw;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    /* flex-direction: column; */
    padding-left: 5vw;
    padding-right: 5vw;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const Left = styled.div`
  p:last-child {
    margin-top: 20px;
    font-size: 0.75rem;
    opacity: 0.8;
  }
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    font-weight: 600;
    color: ${color.secondary};
    text-decoration: none;
  }
`
export const Links = styled.div`
  margin-top: 10px;
  a {
    padding-right: 25px;
  }
`
