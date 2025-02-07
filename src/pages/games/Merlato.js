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
            <div className="row">
              <img src={arch} alt="" />
              <div className="operator">x</div>
            </div>
            <div className="row">
              <img src={lace} alt="" />
              <div className="operator">x</div>
            </div>
            <div className="row">
              <div className="num">8</div>
              <div className="operator">=</div>
            </div>
        </Wrapper>
      </QuizNumeric>
    </div>
  )
}

export default Merlato;


const Wrapper = styled.div`
  height: calc(100% - 87px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .num {
    height: 100px;
    font-size: 75px;
    width: 100px;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img {
    width: 100px;
    height: 100px;
    display: block;
    object-fit: cover;
    object-position: center;
  }
  .operator {
    height: 100px;
    width: 25px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

`
