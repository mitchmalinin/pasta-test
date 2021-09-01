import React from "react"
import { WelcomeStageContainer, Title, BTN } from "./welcomeStageStyles"

const WelcomeStage = ({ setStage }) => {
  return (
    <WelcomeStageContainer>
      <Title>you don't know how to cook pasta, do you.</Title>
      <BTN onClick={() => setStage("game")}>actually, I do</BTN>
      <BTN onClick={() => setStage("finished")}>you're right :(</BTN>
      <img src="../../../../images/stove_large.png" />
    </WelcomeStageContainer>
  )
}

export default WelcomeStage
