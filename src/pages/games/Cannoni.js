import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import cannon from '../../images/games/cannon.png';

const Cannoni = () => {
    const {cards, games, places} = useGlobalContext();

    
    const quizNumericCannoni = {
      'question' : 'In che anno è stato costruito il cannone?',
      'answer' : '1785',
      'arrayCards' : cards,
      'idCard' : '4',
      'arrayPlaces' : places,
      'idPlace' : '7',
      'arrayGames' : games,
      'idGame' : '9',
      'hex' : '#89B8F6',
      'one' : 'Belvedere',
      'two' : 'Cannoni'
    }

  
  return (
    <div>
      <QuizNumeric infoQuizNumeric={quizNumericCannoni} >


        <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img width={90} src={cannon} alt="" />
        </div> 
      </QuizNumeric>
    </div>
  )
}

export default Cannoni;





