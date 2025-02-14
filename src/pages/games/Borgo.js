import styled from "styled-components";
import Title from '../../components/Title';
import { useGlobalContext } from "../../context";
import findById from '../../utils/findById'
import { useState, useEffect } from "react";


const Borgo = () => {
  const { games } = useGlobalContext();
  const game = findById(games, '16');
  const [array, setArray] = useState({});
  // const [arrResult] = useState(['2', '4', '1', '1']);

  const boxes1 = [
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
  ];

  const boxes2 = [
    {
      "id" : "1",
      "name" : "madonna1",
    }, 
    {
      "id" : "2",
      "name" : "madonna2",
    }, 
    {
      "id" : "3",
      "name" : "madonna3",
    }, 
    {
      "id" : "4",
      "name" : "madonna4",
    },
  ];
  
  const boxes3 = [
    {
      "id" : "1",
      "name" : "croce1",
    }, 
    {
      "id" : "2",
      "name" : "croce2",
    }, 
    {
      "id" : "3",
      "name" : "croce3",
    }, 
    {
      "id" : "4",
      "name" : "croce4",
    },
  ];

  const boxes4 = [
    {
      "id" : "1",
      "name" : "catena1",
    }, 
    {
      "id" : "2",
      "name" : "catena2",
    }, 
    {
      "id" : "3",
      "name" : "catena3",
    }, 
    {
      "id" : "4",
      "name" : "catena4",
    },
  ];

  const cliccato = (value, row) => {
    setArray(prevState => {
      const nuovoArray = { ...prevState }; // Crea una copia dell'oggetto precedente
      nuovoArray[row] = value; // Assegna il valore alla proprietà corrispondente alla riga
      return nuovoArray; // Restituisci il nuovo oggetto
    });
  }

  useEffect(() => {
    console.log("Stato (dopo il re-rendering):", array); // Valore aggiornato
  }, [array]);


  return <Wrapper>
    <Title name={game.name} />
    <div className="container">
      {
        boxes1.map((box) => {
          return <div 
            // className={arr.find(elm => elm === box.id) ? 'active' : ''}
            key={box.id}
            onClick={() => cliccato(box.id, "1")}
          >
            {box.name}
          </div>
        })
      }
      {
        boxes2.map((box) => {
          return <div 
            // className={arr.find(elm => elm === box.id) ? 'active' : ''}
            key={box.id}
            onClick={() => cliccato(box.id, "2")}
          >
            {box.name}
          </div>
        })
      }
      {
        boxes3.map((box) => {
          return <div 
            // className={arr.find(elm => elm === box.id) ? 'active' : ''}
            key={box.id}
            onClick={() => cliccato(box.id, "3")}
          >
            {box.name}
          </div>
        })
      }
      {
        boxes4.map((box) => {
          return <div 
            // className={arr.find(elm => elm === box.id) ? 'active' : ''}
            key={box.id}
            onClick={() => cliccato(box.id, "4")}
          >
            {box.name}
          </div>
        })
      }
    </div>
    <div>
      VALORE PRIMA RIGA: {array[1]}
      <br/>
      VALORE SECONDA RIGA: {array[2]}
      <br/>
      VALORE TERZA RIGA: {array[3]}
      <br/>
      VALORE QUARTA RIGA: {array[4]}
      <br/> 
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
        &.active {
          border: 3px solid red;
        }
      }
    }
`