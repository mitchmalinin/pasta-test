import "./global/styles/reset.css"
import { useState } from "react"
import WelcomeStage from "./components/Stages/Welcome/WelcomeStage"
import GameStage from "./components/Stages/Game/GameStage"
import { AppContainer } from "./global/styles/styles"
const App = () => {
  const [stage, setStage] = useState("game")

  const renderStage = () => {
    switch (stage) {
      case "welcome":
        return <WelcomeStage setStage={setStage} />
      case "game":
        return <GameStage setStage={setStage} />
      case "finished":
        return
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
