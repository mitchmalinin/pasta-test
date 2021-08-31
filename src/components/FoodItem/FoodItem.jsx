import React from "react"
import { FoodItemContainer } from "./foodItemStyles"

const FoodItem = ({ item }) => {
  return (
    <FoodItemContainer>
      <img src={item.img} />
    </FoodItemContainer>
  )
}

export default FoodItem
