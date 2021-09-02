import { useState } from "react"
import config from "../../../config"
import { toast } from "react-toastify"
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

  const [userEmail, setUserEmail] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const makeApiCall = async (userEmail) => {
    let res = await fetch(`${config.API_URI}/api/memberAdd?email=${userEmail}`)
    let data = await res.json()
    setIsLoading(false)
    console.log(data)
    if (data.title === "Member Exists") {
      toast.error("You are already subscribed to Pepper notifications!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else if (data.status === "subscribed") {
      toast.success("Thank you for subscribed to Pepper notifications!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else if (data.title === "Invalid Resource") {
      toast.error("Please enter a valid email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUserEmail("")
    if (userEmail !== "" && userEmail.includes("@")) {
      try {
        setIsLoading(true)
        makeApiCall(userEmail)
      } catch (err) {
        setIsLoading(false)
        console.log(err)
      }
    } else {
      toast.error("Please enter a valid email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
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
      <ActionContainer>join the waitlist for Pepper today.*</ActionContainer>
      <MessageContainer>
        *and be entered to win a years worth supply of pasta.
      </MessageContainer>
      <div className="inputContainer">
        <UserInput
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      {isLoading ? (
        <p>submitting...</p>
      ) : (
        <div className="inputContainer">
          <BTN onClick={(e) => handleSubmit(e)}>submit</BTN>
          <BTN onClick={playAgain}>
            {step.number === 5 ? "play again" : "try again"}
          </BTN>
        </div>
      )}
    </FinishedGameContainer>
  )
}

export default FinishedStage
