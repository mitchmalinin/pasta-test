import { useState } from "react"
import WelcomeStage from "./components/Stages/Welcome/WelcomeStage"
import GameStage from "./components/Stages/Game/GameStage"
import FinishedStage from "./components/Stages/Finished/FinishedStage"
import { AppContainer } from "./global/styles/styles"
const App = () => {
  const [stage, setStage] = useState("game")
  const [message, setMessage] = useState("")
  const [step, setStep] = useState({
    number: 0,
    item: "",
    wrongMSG: "",
  })

  const renderStage = () => {
    switch (stage) {
      case "welcome":
        return <WelcomeStage setStage={setStage} />
      case "game":
        return (
          <GameStage
            setStage={setStage}
            setMessage={setMessage}
            setStep={setStep}
            step={step}
          />
        )
      case "finished":
        return (
          <FinishedStage
            setStage={setStage}
            message={message}
            step={step}
            setStep={setStep}
          />
        )
      default:
        return "welcome"
    }
  }

  return (
    <div className="App">
      <AppContainer>{renderStage()}</AppContainer>
    </div>
  )
}

export default App
