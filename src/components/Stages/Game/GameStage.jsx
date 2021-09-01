import { useState, useEffect } from "react"
import FoodItem from "../../FoodItem/FoodItem"
import {
  GameStageContainer,
  Header,
  SubHeader,
  ItemsContainer,
} from "./gameStageStyles"

const GameStage = ({
  setMessage,
  setStage,
  step,
  setStep,
  setFoodItems,
  foodItems,
}) => {
  const [header, setHeader] = useState({
    header: "alight, chef, prove it.",
    subHeader:
      "click on the first ingredient or tool you need to make a pot of pasta",
  })
  const [stoveGlow, setStoveGlow] = useState(false)

  useEffect(() => {
    checkStep()
  }, [step])

  //Game logic
  const checkStep = () => {
    switch (step.number) {
      case 1:
        if (step.item === "pot") {
          setTimeout(() => {
            updateItemSteps()
          }, 1500)
          setHeader({
            header: "ok...you're impressive. What's next?",
            subHeader: "",
          })
        } else {
          sendToFinished()
        }
        break
      case 2:
        if (step.item === "sink") {
          setTimeout(() => {
            updateItemSteps()
          }, 1500)
          setHeader({
            header: "now you're just showing off. keep it going!",
            subHeader: "",
          })
        } else {
          sendToFinished()
        }
        break
      case 3:
        if (step.item === "salt") {
          setTimeout(() => {
            updateItemSteps()
          }, 1500)
          setHeader({
            header: "you're going sicko mode. almost there...what's next?",
            subHeader: "",
          })
        } else {
          sendToFinished()
        }
        break
      case 4:
        if (step.item === "stove") {
          setTimeout(() => {
            updateItemSteps()
          }, 1500)
          setHeader({
            header: "you're a pasta prodigy, whats the last step?",
            subHeader: "",
          })
        } else {
          sendToFinished()
        }
        break
      case 5:
        if (step.item === "pasta") {
          setTimeout(() => {
            setStage("finished")
          }, 1500)
          setHeader({
            header: "Amazing, truly well done!",
            subHeader: "",
          })
        } else {
          sendToFinished()
        }
        break
      default:
        return
    }
  }

  const selectStove = () => {
    let newStep = step.number + 1
    if (newStep === 4) {
      setStoveGlow(true)
      setTimeout(() => {
        setStoveGlow(false)
      }, 1500)

      setStep({
        number: newStep,
        item: "stove",
        wrongMSG: "test",
      })
    }
  }

  const sendToFinished = () => {
    setMessage(step.wrongMSG)
    setStage("finished")
    setStep({ number: 0, item: "", wrongMSG: "" })
  }

  const updateItemSteps = () => {
    let changedGoodNames = []
    switch (step.number) {
      case 1:
        changedGoodNames = foodItems.map((item) => {
          item.name === "pot" ? (item.selected = true) : (item.selected = false)
          switch (item.name) {
            case "pepper":
              item.wrongMSG =
                "we’re literally called Pepper and we’re not even touching this anytime soon"
              return item
            case "pan":
              item.wrongMSG = "are we supposed to put this on top of the pot?"
              return item
            case "oil":
              item.wrongMSG =
                "this is the OPPOSITE of what you should be using right now"
              return item
            case "butter":
              item.wrongMSG = "you butter be joking with this choice right now"
              return item
            case "pasta":
              item.wrongMSG = "I too like my pasta really hard"
              return item
            case "salt":
              item.wrongMSG =
                "you’re just salty you don’t know how to cook pasta properly"
              return item
            default:
              return item
          }
        })
        setFoodItems(changedGoodNames)
        break
      case 2:
        changedGoodNames = foodItems.map((item) => {
          item.name === "sink" || item.name === "pot"
            ? (item.selected = true)
            : (item.selected = false)
          switch (item.name) {
            case "pepper":
              item.wrongMSG =
                "we’re literally called Pepper and we’re not even touching this anytime soon"
              return item
            case "pan":
              item.wrongMSG = "are we supposed to put this on top of the pot?"
              return item
            case "oil":
              item.wrongMSG =
                "this is the OPPOSITE of what you should be using right now"
              return item
            case "butter":
              item.wrongMSG = "you butter be joking with this choice right now"
              return item
            case "pasta":
              item.wrongMSG = "I too like my pasta really hard"
              return item
            case "salt":
              item.wrongMSG =
                "you’re just salty you don’t know how to cook pasta properly"
              return item
            default:
              return item
          }
        })
        setFoodItems(changedGoodNames)
        break
      case 3:
        changedGoodNames = foodItems.map((item) => {
          item.name === "sink" || item.name === "pot" || item.name === "salt"
            ? (item.selected = true)
            : (item.selected = false)
          switch (item.name) {
            case "pepper":
              item.wrongMSG =
                "I appreciate how much you love Pepper but not yet"
              return item
            case "pan":
              item.wrongMSG = "how are you still clicking this?"
              return item
            case "oil":
              item.wrongMSG =
                "oil up those abs because your cooking skills are not what’s gonna do it for ya"
              return item
            case "butter":
              item.wrongMSG =
                "I like how you think but I really dislike how you cook"
              return item
            case "pasta":
              item.wrongMSG =
                "think of all the pastabiltiies! except this one. not this one"
              return item
            default:
              return item
          }
        })
        setFoodItems(changedGoodNames)
        break
      case 4:
        changedGoodNames = foodItems.map((item) => {
          switch (item.name) {
            case "pepper":
              item.wrongMSG = "honestly we get it. we like Pepper too :)"
              return item
            case "pan":
              item.wrongMSG =
                "at this point, I’m just intrigued how you’d use this"
              return item
            case "oil":
              item.wrongMSG = "when was the last time you fried pasta?"
              return item
            case "butter":
              item.wrongMSG =
                "my tastebuds say yes but my cold water says absolutely not"
              return item
            case "pasta":
              item.wrongMSG = "this pasta ain’t gonna boil itself"
              return item
            default:
              return item
          }
        })
        setFoodItems(changedGoodNames)
        break
    }
  }

  return (
    <GameStageContainer stoveGlow={stoveGlow}>
      <Header>{header.header}</Header>
      <SubHeader>{header.subHeader}</SubHeader>
      <ItemsContainer>
        {foodItems.map((item) => {
          return (
            <FoodItem
              key={item.name}
              item={item}
              setStep={setStep}
              step={step}
            />
          )
        })}
      </ItemsContainer>
      <img
        alt="stove-top"
        className="stove"
        src="../../../../images/stove_small.png"
        onClick={selectStove}
      />
    </GameStageContainer>
  )
}

export default GameStage
