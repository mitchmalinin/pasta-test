import styled from "styled-components"
import { theme } from "../../../global/styles/styles"

export const GameStageContainer = styled.div`
  .stove {
    position: absolute;
    bottom: 0%;
    left: 50%;
    height: 160px;
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
  }
`
export const Header = styled.h2`
  font-weight: 400;
  margin: 1em 0 0.4em 0;

  @media only screen and (min-width: 1020px) {
    margin: 0;
  }
`
export const SubHeader = styled.h3`
  font-style: italic;
  font-weight: 300;
  margin-bottom: 2em;
`
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  position: relative;

  @media only screen and (min-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);

    img {
      height: 130px;
    }
  }
`
