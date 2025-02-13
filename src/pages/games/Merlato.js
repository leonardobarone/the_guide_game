import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import lace from '../../images/games/lace.svg';
import arch from '../../images/games/arch.svg';
import styled from "styled-components";
import findById from "../../utils/findById";


const Merlato = () => {
    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '14');
    const place = findById(places, '12');
    const card = findById(cards, '6');
    
    const quizNumericMerlato = {
        'question' : 'Il Palazzo fa da cornice ai saluti. Gli archi e i merli moltiplicandosi, li osservano, e moltiplicandosi nuovamente per 8 ti danno il risultato di questo livello!',
        'answer' : '2968',
        'arrayCards' : cards,
        'idCard' : card.id,        
        'arrayPlaces' : places,
        'idPlace' : place.id,
        'arrayGames' : games,
        'idGame' : game.id,
        'hex' : '#DD6C70',
        'name' : game.name,
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
  /* border: 1px solid black; */
  height: calc(100% - 140px);
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
