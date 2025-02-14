import styled from "styled-components";
import Title from '../../components/Title';
import { useGlobalContext } from "../../context";
import findById from '../../utils/findById'


const Borgo = () => {
  const { games } = useGlobalContext();
  const game = findById(games, '16');
  const boxes = [
    {
      "id" : "1",
      "name" : "lupo1",
    }, 
    {
      "id" : "2",
      "name" : "lupo2",
    }, 
    {
      "id" : "3",
      "name" : "lupo3",
    }, 
    {
      "id" : "4",
      "name" : "lupo4",
    },
    {
      "id" : "5",
      "name" : "madonna1",
    }, 
    {
      "id" : "6",
      "name" : "madonna2",
    }, 
    {
      "id" : "7",
      "name" : "madonna3",
    }, 
    {
      "id" : "8",
      "name" : "madonna4",
    }, 
    {
      "id" : "9",
      "name" : "croce1",
    }, 
    {
      "id" : "10",
      "name" : "croce2",
    }, 
    {
      "id" : "11",
      "name" : "croce3",
    }, 
    {
      "id" : "12",
      "name" : "croce4",
    }, 
    {
      "id" : "13",
      "name" : "catena1",
    }, 
    {
      "id" : "14",
      "name" : "catena2",
    }, 
    {
      "id" : "15",
      "name" : "catena3",
    }, 
    {
      "id" : "16",
      "name" : "catena4",
    }, 
  ];

  const cliccato = (num) => {
    alert(num);
  }

  return <Wrapper>
    <Title name={game.name} />
    <div className="container">
      {
        boxes.map((box) => {
          return <div 
            key={box.id}
            onClick={() => cliccato(box.id)}
          >
            {box.name}
          </div>
        })
      }
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