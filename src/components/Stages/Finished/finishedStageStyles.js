import styled from "styled-components"
import { theme } from "../../../global/styles/styles"

export const FinishedGameContainer = styled.div`
  display: grid;
  gap: 2.5em;
  margin-top: 3em;

  .inputContainer {
    display: grid;
    gap: 0.5em;
  }
`

export const MessageContainer = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0;
`

export const ActionContainer = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
`

export const UserInput = styled.input`
  background-color: ${theme.btnBackgroundDark};
  border: none;
  font-size: 1rem;
  border-radius: 25px;
  padding: 1em;
  color: ${theme.textColor};
  outline: none;
  &::placeholder {
    color: ${theme.textColor};
    font-weight: 300;
  }
`
export const BTN = styled.button`
  margin: 0 auto;
  background-color: ${theme.btnBackgroundLight};
  border: none;
  font-size: 1rem;
  border-radius: 25px;
  padding: 1em 1.2em;
  width: 250px;
`
