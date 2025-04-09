import styled from "styled-components";
import Overlay from "./Overlay";
import Tile from "./Tile";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import Winner from "./Winner";

const Board = forwardRef((_, ref) => {

  const shuffle = () => 
    new Array (16)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - .5)
      .map((x, i) => ({value : x, index : i}))

  const [numbers, setNumbers] = useState(shuffle());  
  const [animating, setAnimating] = useState(false);
  
  const moveTile = tile => {
    const i16 = numbers.find(n => n.value === 16).index
    if (![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index) || animating)
      return

    const newNumbers = 
      [...numbers]
      .map(number => {
        if (number.index !== i16 && number.index !== tile.index)
            return number
          else if (number.value === 16) 
            return {value: 16, index: tile.index}
          
          return {value : tile.value, index: i16}
      })
      setAnimating(true);
      setNumbers(newNumbers)
      setTimeout(()=> setAnimating(false), 400)
  }

  const reset = () => setNumbers(shuffle());

  // 🔥 Espone la funzione reset al padre
  useImperativeHandle(ref, () => ({
    reset
  }));


  // TASTIERA
  const handleKeyDown = e => {
    const i16 = numbers.find(n => n.value === 16).index
    if (e.keyCode === 37 && !(i16 % 4 === 3))
      moveTile(numbers.find(n => n.index === i16 + 1))
    if (e.keyCode === 38 && !(i16 > 11))
      moveTile(numbers.find(n => n.index === i16 + 4))
    if (e.keyCode === 39 && !(i16 % 4 === 0))
      moveTile(numbers.find(n => n.index === i16 - 1))
    if (e.keyCode === 40 && !(i16 < 4))
      moveTile(numbers.find(n => n.index === i16 - 4))
  } 

  // TASTIERA
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  return <Game>
    <div className="board">
        <Overlay />
        {numbers.map((x, i) => 
          <Tile key={i} number={x} moveTile={moveTile} />
          // <div key={i}>{x.value}</div>
        )}
        <Winner numbers={numbers} />
    </div>
  </Game>
})

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
  }
`