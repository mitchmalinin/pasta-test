import React from "react"
import { WelcomeStageContainer, Title, BTN } from "./welcomeStageStyles"

const WelcomeStage = () => {
  return (
    <WelcomeStageContainer>
      <Title>you don't know how to cook pasta, do you.</Title>
      <BTN>you're right :(</BTN>
      <BTN>actually, I do</BTN>
      <img src="../../../../images/stove_large.png" />
    </WelcomeStageContainer>
  )
}

export default WelcomeStage
