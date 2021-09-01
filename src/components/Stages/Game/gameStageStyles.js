import styled from "styled-components"
import { theme } from "../../../global/styles/styles"

export const GameStageContainer = styled.div`
  margin-top: 1em;
  .stove {
    position: absolute;
    bottom: 0%;
    left: 50%;

    transform: translate(-50%, 0%);
    filter: ${({ stoveGlow }) =>
      stoveGlow
        ? "drop-shadow(3px 3px 10px #f7fc01) drop-shadow(-3px -3px 10px #f7fc01)"
        : "none"};
  }

  @media only screen and (min-width: 1020px) {
    min-width: 600px;
    margin-top: 0.5em;
    margin-bottom: 12em;
    align-self: center;

    .stove {
      height: 170px;
    }
  }
`
export const Header = styled.h2`
  font-weight: 400;
  margin: 0.4em 0 0.4em 0;

  @media only screen and (min-width: 1020px) {
    margin: 0;
  }
`
export const SubHeader = styled.h3`
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1em;
`
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  position: relative;

  @media only screen and (min-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0;
    img {
      height: 130px;
    }
  }
`
