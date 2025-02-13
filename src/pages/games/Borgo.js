import styled from "styled-components";
import Title from '../../components/Title';
import { useGlobalContext } from "../../context";
import findById from '../../utils/findById'


const Borgo = () => {
  const { games } = useGlobalContext();
  const game = findById(games, '16');

  return <Wrapper>
    <Title name={game.name} />
    <div className="container">
      <div>catena1</div>
      <div>catena2</div>
      <div>catena3</div>
      <div>catena4</div>
      <div>croce1</div>
      <div>croce2</div>
      <div>croce3</div>
      <div>croce4</div>
      <div>lupo1</div>
      <div>lupo2</div>
      <div>lupo3</div>
      <div>lupo4</div>
      <div>madonna1</div>
      <div>madonna2</div>
      <div>madonna3</div>
      <div>madonna4</div>
    </div>
  </Wrapper>
}

export default Borgo;

const Wrapper = styled.main`
    margin-top: 40px;
    border: 1px solid black;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        width: 25%;
      }
    }
`