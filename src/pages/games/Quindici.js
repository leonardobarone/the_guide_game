import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import Board from '../../components/Board';
import Title from "../../components/Title";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";
import { useRef } from "react";

const Quindici = () => {

    const {games} = useGlobalContext();
    const game = findById(games, '6');

    // Per calcolare l'altezza
    const height = useHeight(110);

    const ref = useRef();

  return <Wrapper>
    <Title name={game.name} />
    <div className="bigContainer" style={{ height: `${height}px` }}>
      <div className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <Board ref={ref} />
      <div className="buttonContainer">
        <div className="p-absolute">
          <button onClick={() => ref.current?.reset()} className="btn">RESET (al momento vinci)</button>
        </div>
      </div>
    </div>
  </Wrapper>
}

export default Quindici;

const Wrapper = styled.section`
    margin-top: 50px;
    .bigContainer {
      background-color: yellow;
    }

`
