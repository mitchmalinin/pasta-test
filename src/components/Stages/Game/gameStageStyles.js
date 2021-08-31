import styled from "styled-components"

export const GameStageContainer = styled.div`
  .stove {
    position: absolute;
    bottom: -96px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const Header = styled.h2`
  font-weight: 400;
  margin: 1em 0 0.4em 0;
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
`
