import styled from "styled-components"
import { color } from "../../../common/constants"

const timing = "0.35s"

export const Menu = styled.ul`
  .hamburguer {
    color: ${color.white};
    margin-right: -12px;
  }

  .active {
    a {
      color: ${color.secondary};
    }
  }

  @media only screen and (max-width: 700px) {
    .extended {
      display: ${props => (props.activeHamburguer ? "block" : "none")};
    }
  }
  @media only screen and (min-width: 700px) {
    .hamburguer {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  button {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    padding: 0;
  }

  button:hover .line {
    /* stroke: #6662c4; */
  }

  svg {
    display: block;
    visibility: hidden;
    width: 50px;
    height: 50px;
  }

  .line {
    fill: none;
    stroke: #71818d;
  }

  /* Hamburger */
  .line.top,
  .line.bottom {
    stroke-dasharray: 50px 600px;
    stroke-dashoffset: 0px;
  }

  .line.cross {
    stroke-dasharray: 50px 60px;
    stroke-dashoffset: 0px;
  }

  /* Cross */
  .on .line.top,
  .on .line.bottom {
    stroke-dasharray: 70.71px 600px;
    stroke-dashoffset: -392px;
  }

  .on .line.cross {
    stroke-dasharray: 50px 60px;
    stroke-dashoffset: 51px;
  }

  .line.cross {
    transition: 0.35s stroke-dasharray ease 0.35s,
      0.35s stroke-dashoffset ease 0.35s, 0.35s stroke ease 0s;
  }

  .line.top {
    transition: (0.35s * 1.5) stroke-dasharray ease 0s,
      (0.35s * 1.5) stroke-dashoffset ease 0s, 0.35s stroke ease 0s;
  }

  .line.bottom {
    transition: (0.35s * 1.5) stroke-dasharray ease 0.35s,
      (0.35s * 1.5) stroke-dashoffset ease 0.35s, 0.35s stroke ease 0s;
  }

  .on .line.cross {
    transition: 0.35s stroke-dasharray ease 0s, 0.35s stroke-dashoffset ease 0s,
      0.35s stroke ease 0s;
  }
`

export const Link = styled.a`
  color: #f2f2f2;
  font-family: Maven Pro;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.045em;
  margin-left: 30px;
`
