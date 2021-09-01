import styled from "styled-components"

export const FoodItemContainer = styled.div`
  opacity: ${({ selected }) => (selected ? "0.4" : "1")};
  /* -webkit-filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black); */
  filter: ${({ glow }) =>
    glow
      ? "drop-shadow(3px 3px 10px #f7fc01) drop-shadow(-3px -3px 10px #f7fc01)"
      : "none"};
  transition: all 0.2s ease-in;
  img {
    height: 120px;
  }

  @media only screen and (min-width: 1020px) {
    margin-top: 0em;
  }
`
