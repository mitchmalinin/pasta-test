import styled from "styled-components"

export const theme = {
  bgColor: "#EC6758",
  textColor: "#FFFFFF",
  btnBackgroundDark: "rgba(83, 81, 75, 0.72)",
  btnBackgroundLight: "rgba(229, 229, 229, 0.56)",
  bgOverLayColor: "rgba(83, 81, 75, 0.63)",
}

export const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${theme.bgColor};
  color: ${theme.textColor};
  font-family: "Roboto", sans-serif;
  padding: 1em;
  overflow-y: hidden;
`
