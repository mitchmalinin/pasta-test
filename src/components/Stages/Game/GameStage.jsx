import { useState } from "react"
import FoodItem from "../../FoodItem/FoodItem"
import {
  GameStageContainer,
  Header,
  SubHeader,
  ItemsContainer,
} from "./gameStageStyles"
import { items } from "../../../global/utils/items"

const GameStage = () => {
  const [header, setHeader] = useState({
    header: "alight, chef, prove it.",
    subHeader:
      "click on the first ingredient or tool you need to make a pot of pasta",
  })

  return (
    <GameStageContainer>
      <Header>{header.header}</Header>
      <SubHeader>{header.subHeader}</SubHeader>
      <ItemsContainer>
        {items.map((item) => {
          return <FoodItem item={item} />
        })}
      </ItemsContainer>
      <img className="stove" src="../../../../images/stove_small.png" />
    </GameStageContainer>
  )
}

export default GameStage
