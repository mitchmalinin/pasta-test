import React, { useState } from "react"
import { FoodItemContainer } from "./foodItemStyles"

const FoodItem = ({ item, setStep, step }) => {
  const [glow, setGlow] = useState(false)

  const nextStep = (e) => {
    let newStep = step.number + 1

    switch (newStep) {
      case 1:
        if (e.target.name === "pot") {
          setGlow(true)
          setTimeout(() => {
            setGlow(false)
          }, 1500)
        }
        break
      case 2:
        if (e.target.name === "sink") {
          setGlow(true)
          setTimeout(() => {
            setGlow(false)
          }, 1500)
        }
        break
      case 3:
        if (e.target.name === "salt") {
          setGlow(true)
          setTimeout(() => {
            setGlow(false)
          }, 1500)
        }
        break
      case 5:
        if (e.target.name === "pasta") {
          setGlow(true)
          setTimeout(() => {
            setGlow(false)
          }, 1500)
        }
        break
    }

    setStep({
      number: newStep,
      item: item.name,
      wrongMSG: item.wrongMSG,
    })
  }

  return (
    <FoodItemContainer
      onClick={(e) => nextStep(e)}
      selected={item.selected}
      glow={glow}
    >
      <img alt="food-item" src={item.img} name={item.name} />
    </FoodItemContainer>
  )
}

export default FoodItem
