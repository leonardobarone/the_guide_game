import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import Board from '../../components/Board';
import Title from "../../components/Title";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";
import { useRef } from "react";
import Error from "../Error";
// Immagini 
import quindici1 from '../../images/games/quindici/1.png';
import quindici2 from '../../images/games/quindici/2.png';
import quindici3 from '../../images/games/quindici/3.png';
import quindici4 from '../../images/games/quindici/4.png';
import quindici5 from '../../images/games/quindici/5.png';
import quindici6 from '../../images/games/quindici/6.png';
import quindici7 from '../../images/games/quindici/7.png';
import quindici8 from '../../images/games/quindici/8.png';
import quindici9 from '../../images/games/quindici/9.png';
import quindici10 from '../../images/games/quindici/10.png';
import quindici11 from '../../images/games/quindici/11.png';
import quindici12 from '../../images/games/quindici/12.png';
import quindici13 from '../../images/games/quindici/13.png';
import quindici14 from '../../images/games/quindici/14.png';
import quindici15 from '../../images/games/quindici/15.png';
import quindici16 from '../../images/games/quindici/16.png';
import useImagesLoaded from "../../utils/useImagesLoaded";
import Loading from "../../components/Loading";

const Quindici = () => {

    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '6');
    const place = findById(places, '5');
    const card = findById(cards, '11');
    const sanLeonardo = {
      'card' : card,
      'place' : place,
      'game' : game,
      'images' : [
        quindici1,
        quindici2,
        quindici3,
        quindici4,
        quindici5,
        quindici6,
        quindici7,
        quindici8,
        quindici9,
        quindici10,
        quindici11,
        quindici12,
        quindici13,
        quindici14,
        quindici15,
        quindici16,
    ]
  }

    const loading = useImagesLoaded(sanLeonardo.images);
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
