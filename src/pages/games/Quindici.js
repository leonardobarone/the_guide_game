import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import Board from '../../components/Board';
import Title from "../../components/Title";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";
import { useRef } from "react";
import Error from "../Error";

const Quindici = () => {

    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '6');
    const place = findById(places, '5');
    const card = findById(cards, '11');
    const sanLeonardo = {
      'card' : card,
      'place' : place,
      'game' : game,
  }

    // Per calcolare l'altezza
    const height = useHeight(110);

    const ref = useRef();

  return <>{game.unblocked ? <Error /> : (<Wrapper>
    <Title name={game.name} />
    <div className="bigContainer" style={{ height: `${height}px` }}>
      <div className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <Board ref={ref} infoQuindici={sanLeonardo} />
      <div className="buttonContainer">
        <div className="p-absolute">
          <button onClick={() => ref.current?.reset()} className="btn">RESET (al momento vinci)</button>
        </div>
      </div>
    </div>
  </Wrapper>)}</>
}

export default Quindici;

const Wrapper = styled.section`
    margin-top: 50px;
    .bigContainer {
      background-color: yellow;
    }

`
