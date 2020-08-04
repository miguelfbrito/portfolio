import styled from "styled-components"
import { color } from "../../../common/constants"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;

  h1 {
    color: white;
    font-weight: 800;
    letter-spacing: 0.055em;
    color: #f2f2f2;
    font-size: 28px;
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
`
