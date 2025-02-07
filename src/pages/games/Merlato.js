import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import lace from '../../images/games/lace.svg';
import arch from '../../images/games/arch.svg';
import styled from "styled-components";


const Merlato = () => {
    const {cards, games, places} = useGlobalContext();

    
    const quizNumericMerlato = {
        'question' : 'Conta il numero dei merletti, moltiplicalo per il numero degli archi e poi per 8!',
        'answer' : '2968',
        'arrayCards' : cards,
        'idCard' : '6',
        'arrayPlaces' : places,
        'idPlace' : '12',
        'arrayGames' : games,
        'idGame' : '14',
        'hex' : '#DD6C70',
        'one' : 'Palazzo',
        'two' : 'Merlato'
    }

  
  return (
    <div>
      <QuizNumeric infoQuizNumeric={quizNumericMerlato} >

        <Wrapper>
          <div>
              <img src={arch} alt="" />
          </div>
          <div className="operator">x</div>
          <div>
            <img src={lace} alt="" />
          </div>
          <div className="operator">x</div>
          <div className="num">8</div>
        </Wrapper>
      </QuizNumeric>
    </div>
  )
}

export default Merlato;


const Wrapper = styled.div`
  height: calc(100% - 87px);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    height: 75px;
    display: block;
    object-fit: cover;
    object-position: center;
  }
  .num {
    height: 75px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: white;
    font-weight: bold;
  }
  
  .operator {
    height: 75px;
    width: 20px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

`
