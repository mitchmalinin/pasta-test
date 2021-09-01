import styled from "styled-components"
import { theme } from "../../../global/styles/styles"

export const WelcomeStageContainer = styled.div`
  position: relative;
  display: grid;
  gap: 2em;
  justify-items: center;
  align-content: flex-start;

  img {
    position: absolute;
    bottom: -430px;
  }

  @media only screen and (min-width: 1020px) {
    gap: 3em;
    img {
      bottom: 0;
      position: relative;
      width: 330px;
    }
  }
`

export const Title = styled.h1`
  padding: 0 0.5em;
  font-size: 2.5rem;
`

export const BTN = styled.button`
  border-radius: 25px;
  background-color: ${theme.btnBackgroundDark};
  font-size: 1.4rem;
  padding: 1em 1.5em;
  border: none;
  color: ${theme.textColor};
  font-weight: 500;
`
