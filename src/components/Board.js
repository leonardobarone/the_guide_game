import styled from "styled-components";
import Overlay from "./Overlay";

const Board = () => {
  return <Game>
    <div className="board">
        <Overlay />
    </div>
  </Game>
}

export default Board;

const Game = styled.section`

`