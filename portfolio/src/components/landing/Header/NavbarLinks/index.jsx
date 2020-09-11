import React from "react"
import { Menu, Link, Hamburguer } from "./styles"
import AnchorLink from "react-anchor-link-smooth-scroll"

export class NavbarLinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburguer: false,
    }
  }

  render() {
    if (!this.state) return

    return (
      <Menu>
        <li class="hamburguer">
          <Hamburguer>
            <button
              onClick={() =>
                this.setState({ hamburguer: !this.state.hamburguer })
              }
              class={this.state.hamburguer ? "on" : ""}
            >
              <svg viewBox="0 0 120 120">
                <g>
                  <path
                    class="line top"
                    d="M35,35h50c14.1,0,50.6,13,20.5,53.5s-121.9,21.6-94.4-40.3S111.6,8.4,85,35L35,85"
                  />
                  <path
                    class="line bottom"
                    d="M35,85h50c14.1,0,50.6-13,20.5-53.5S-16.4,9.9,11.1,71.8S111.6,111.6,85,85L35,35"
                  />
                  <line class="line cross" x1="35" y1="60" x2="85" y2="60" />
                </g>
              </svg>
            </button>
          </Hamburguer>
        </li>
        <li className="extended active">
          <Link as={AnchorLink} href="#about">
            About
          </Link>
        </li>
        <li className="extended">
          <Link as={AnchorLink} href="#education">
            Education
          </Link>
        </li>
        <li className="extended">
          <Link as={AnchorLink} href="#projects">
            Projects
          </Link>
        </li>
        <li className="extended">
          <Link as={AnchorLink} href="#contact">
            Contact
          </Link>
        </li>
      </Menu>
    )
  }
}
