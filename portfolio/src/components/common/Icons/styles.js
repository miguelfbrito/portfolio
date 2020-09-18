import styled from "styled-components"
import { color } from "../../common/constants"

export const Icon = styled.div`
  display: flex;
  align-items: center;
  min-width: 1.5rem;
  max-width: 1.5rem;

  opacity: ${props => props.opacity || "1"};

  svg {
    fill: ${color.secondary};
  }
`
