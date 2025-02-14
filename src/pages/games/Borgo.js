import styled from "styled-components";
import Title from '../../components/Title';
import { useGlobalContext } from "../../context";
import findById from '../../utils/findById'
import { useState, useEffect } from "react";
import lupo1 from '../../images/games/borgo/lupo1.png';
import lupo2 from '../../images/games/borgo/lupo2.png';
import lupo3 from '../../images/games/borgo/lupo3.png';
import lupo4 from '../../images/games/borgo/lupo4.png';
import madonna1 from '../../images/games/borgo/madonna1.png';
import madonna2 from '../../images/games/borgo/madonna2.png';
import madonna3 from '../../images/games/borgo/madonna3.png';
import madonna4 from '../../images/games/borgo/madonna4.png';
import croce1 from '../../images/games/borgo/croce1.png';
import croce2 from '../../images/games/borgo/croce2.png';
import croce3 from '../../images/games/borgo/croce3.png';
import croce4 from '../../images/games/borgo/croce4.png';
import catena1 from '../../images/games/borgo/catena1.png';
import catena2 from '../../images/games/borgo/catena2.png';
import catena3 from '../../images/games/borgo/catena3.png';
import catena4 from '../../images/games/borgo/catena4.png';

const Borgo = () => {
  const { games } = useGlobalContext();
  const game = findById(games, '16');
  const [array, setArray] = useState({});
  // const [arrResult] = useState(['2', '4', '1', '1']);

  const boxes1 = [
    {
      "id" : "1",
      "name" : "lupo1",
      "img" :  lupo1
    }, 
    {
      "id" : "2",
      "name" : "lupo2",
      "img" :  lupo2
    }, 
    {
      "id" : "3",
      "name" : "lupo3",
      "img" :  lupo3
    }, 
    {
      "id" : "4",
      "name" : "lupo4",
      "img" :  lupo4
    },
  ];

  const boxes2 = [
    {
      "id" : "1",
      "name" : "madonna1",
      "img" : madonna1
    }, 
    {
      "id" : "2",
      "name" : "madonna2",
      "img" : madonna2
    }, 
    {
      "id" : "3",
      "name" : "madonna3",
      "img" : madonna3
    }, 
    {
      "id" : "4",
      "name" : "madonna4",
      "img" : madonna4
    },
  ];
  
  const boxes3 = [
    {
      "id" : "1",
      "name" : "croce1",
      "img" : croce1
    }, 
    {
      "id" : "2",
      "name" : "croce2",
      "img" : croce2
    }, 
    {
      "id" : "3",
      "name" : "croce3",
      "img" : croce3
    }, 
    {
      "id" : "4",
      "name" : "croce4",
      "img" : croce4
    },
  ];

  const boxes4 = [
    {
      "id" : "1",
      "name" : "catena1",
      "img" : catena1
    }, 
    {
      "id" : "2",
      "name" : "catena2",
      "img" : catena2
    }, 
    {
      "id" : "3",
      "name" : "catena3",
      "img" : catena3
    }, 
    {
      "id" : "4",
      "name" : "catena4",
      "img" : catena4
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
    console.log("Stato (dopo il re-rendering):", array);
    console.log(array[1]) // Valore aggiornato
  }, [array]);


  return <Wrapper>
    <Title name={game.name} />
    <div className="container">
      {
        boxes1.map((box) => {
          return <div 
            key={box.id}
            onClick={() => cliccato(box.id, "1")}
          >
            <img 
              className={array["1"] == box.id ? 'active' : ''}
              src={box.img} 
              alt="" 
            />
            {/* {box.name} */}
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
            <img 
              className={array["2"] == box.id ? 'active' : ''}
              src={box.img} 
              alt="" 
            />
            {/* {box.name} */}
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
            <img 
              className={array["3"] == box.id ? 'active' : ''}
              src={box.img} 
              alt="" 
            />
            {/* {box.name} */}
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
            <img 
              className={array["4"] == box.id ? 'active' : ''}
              src={box.img} 
              alt="" 
            />
            {/* {box.name} */}
          </div>
        })
      }
    </div>
    <div className="containerButton">
      <button>Prova</button>
    </div>
      <div>PULSANTE ANCORA NON FUNZIONANTE, QUESTO PER NON FARVI DIRE: HO CLICCATO MA NON SUCCEDE NIENTE</div>
      <hr />
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
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 4px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        img {
          border-radius: 7px;
          padding: 3px;
          display: block;
          width: 100%;
          &.active {
            padding: 0px;
            border: 2px solid red;
          }
        }
      }
    }
    .containerButton {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 7px 7px;
      button {
        background-color: var(--orange);
        border-style: none;
        width: 100%;
        padding: 10px 0px;
        border-radius: 4px;
        color: white;
      }
    }
`