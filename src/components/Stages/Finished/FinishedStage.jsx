import React from "react"
import {
  FinishedGameContainer,
  MessageContainer,
  ActionContainer,
  UserInput,
  BTN,
} from "./finishedStageStyles"

const FinishedStage = ({ message, step, setStep, setStage }) => {
  const playAgain = () => {
    setStep({ number: 0, item: "", wrongMSG: "" })
    setStage("game")
  }

  return (
    <FinishedGameContainer>
      <MessageContainer>
        {step.number === 5 ? "Well done, chef!" : message}
      </MessageContainer>
      <MessageContainer>
        {step.number === 5
          ? "we could use an expert like you"
          : "learn how to  cook pasta (and other things)."}
      </MessageContainer>
      <ActionContainer>join the waitlist for Pepper today.</ActionContainer>
      <div className="inputContainer">
        <UserInput placeholder="Full Name" />
        <UserInput placeholder="Email" />
      </div>
      <div className="inputContainer">
        <BTN>submit</BTN>
        <BTN onClick={playAgain}>
          {step.number === 5 ? "play again" : "try again"}
        </BTN>
      </div>
    </FinishedGameContainer>
  )
}

export default FinishedStage
