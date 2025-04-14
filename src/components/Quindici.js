import styled from "styled-components";
import useHeight from "../utils/useHeight";
import Board from './Board';
import Title from "./Title";

import { useRef } from "react";
import Error from "../pages/Error";

import useImagesLoaded from "../utils/useImagesLoaded";
import Loading from "./Loading";

const Quindici = (props) => {

    const {game, images} = props.infoRequest;

    

    const loading = useImagesLoaded(images);
    // Per calcolare l'altezza
    const height = useHeight(110);

    const ref = useRef();

  if (!loading) return <Loading height={50} />

  return <>{game.unblocked ? <Error /> : (<Wrapper>
    <Title name={game.name} />
    <div className="bigContainer" style={{ height: `${height}px` }}>
      <div className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <Board ref={ref} infoQuindici={props.infoRequest} />
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
      background-color: var(--violaPeppe);
    }

`
