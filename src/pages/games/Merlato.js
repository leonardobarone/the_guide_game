import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import lace from '../../images/games/lace.svg';
import arch from '../../images/games/arch.svg';


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

        <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img width={90} src={arch} alt="" />
            <span style={{fontWeight: 'bold', fontSize: '45px', marginLeft: '10px', color: 'white'}}>x</span>
            <img width={90} src={lace} alt="" />
        </div>
      </QuizNumeric>
    </div>
  )
}

export default Merlato;



