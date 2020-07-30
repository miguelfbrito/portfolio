import styled from "styled-components"
import { color } from "../../../common/constants"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;

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
