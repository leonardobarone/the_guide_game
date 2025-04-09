import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import Board from '../../components/Board';
import Title from "../../components/Title";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";

const Quindici = () => {

    const {games} = useGlobalContext();
    const game = findById(games, '6');

    // Per calcolare l'altezza
    const height = useHeight(110);

  return <Wrapper>
    <Title name={game.name} />
    <div className="bigContainer" style={{ height: `${height}px` }}>
      <div className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <Board />
      <div className="buttonContainer">
        <div className="p-absolute">
          <button className="btn">RESET</button>
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
