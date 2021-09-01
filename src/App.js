import { useState, useEffect } from "react"
import WelcomeStage from "./components/Stages/Welcome/WelcomeStage"
import GameStage from "./components/Stages/Game/GameStage"
import FinishedStage from "./components/Stages/Finished/FinishedStage"
import { AppContainer } from "./global/styles/styles"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const [foodItems, setFoodItems] = useState([])
  const [stage, setStage] = useState("welcome")
  const [message, setMessage] = useState("")
  const [step, setStep] = useState({
    number: 0,
    item: "",
    wrongMSG: "",
  })

  useEffect(() => {
    const items = [
      {
        name: "pot",
        img: "../../../images/pot.png",
        selected: false,
        wrongMSG: "",
      },
      {
        name: "oil",
        img: "../../../images/oil.png",
        selected: false,
        wrongMSG:
          "either you listened to some bad advice or you’ve been the one giving it. that stops today",
      },
      {
        name: "pepper",
        img: "../../../images/pepper.png",
        selected: false,
        wrongMSG:
          "we LOVE Pepper, but if that’s where you’re starting your pasta journey you’ve got some reflecting to do",
      },
      {
        name: "salt",
        img: "../../../images/salt.png",
        selected: false,
        wrongMSG: "can’t salt a wound if there’s no wound!",
      },
      {
        name: "skillet",
        img: "../../../images/skillet.png",
        selected: false,
        wrongMSG:
          "we don’t want to hear your argument for higher starch density in the pasta water. you don’t cook pasta in a pan.",
      },
      {
        name: "butter",
        img: "../../../images/butter.png",
        selected: false,
        wrongMSG:
          "ahh, butter, good ol butter. glad/worried you thought to use it at this stage in the game. you’re doing great sweetie.",
      },
      {
        name: "pasta",
        img: "../../../images/pasta.png",
        selected: false,
        wrongMSG:
          "you jumped the gun! what are you cooking that pasta in? your hands?",
      },
      {
        name: "sink",
        img: "../../../images/sink.png",
        selected: false,
        wrongMSG:
          "oh no! now there’s water all over the floor! your cat just slipped on it and now it’s mad! 😾",
      },
    ]

    setFoodItems([...items])
  }, [stage])

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
            setFoodItems={setFoodItems}
            foodItems={foodItems}
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
      <ToastContainer />
      <AppContainer>{renderStage()}</AppContainer>
    </div>
  )
}

export default App
