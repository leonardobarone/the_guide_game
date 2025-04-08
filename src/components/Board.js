import styled from "styled-components";
import Overlay from "./Overlay";
import Tile from "./Tile";
import { useState } from "react";

const Board = () => {

  const shuffle = () => 
    new Array (16)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - .5)
      .map((x, i) => ({value : x, index : i}))

  const [numbers] = useState(shuffle());     

  return <Game>
    <div className="board">
        <Overlay />
        {numbers.map((x, i) => 
          <Tile key={i} number={x} />
          // <div key={i}>{x.value}</div>
        )}
    </div>
  </Game>
}

export default Board;

const Game = styled.section`
  position: relative;
  width: 100%;
  .board {
    height: 400px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, var(--size));
    grid-template-rows: repeat(4, var(--size));
    overflow: hidden;
    border: 1px solid red;
  }
`