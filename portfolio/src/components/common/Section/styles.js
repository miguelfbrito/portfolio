import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  /* min-height: 100vh; */

  margin-left: -15vw;
  padding-left: 15vw;
  padding-right: 15vw;
  margin-right: -15vw;
  background-color: ${props => props.color || "none"};

  box-shadow: 0px 5px 20px -20px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 700px) {
    margin-left: -5vw;
    padding-left: 5vw;
    padding-right: 5vw;
    margin-right: -5vw;
  }

  & > div:first-of-type {
  }
`

export const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: ${props => props.minHeight || "100vh"};
`

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: 0 auto;
  @media only screen and (max-width: 525px) {
    display: none;
  }
`
