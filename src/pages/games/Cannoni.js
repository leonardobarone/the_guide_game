import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import cannon from '../../images/games/cannon.png';

const Cannoni = () => {
    const {cards, games, places} = useGlobalContext();

    
    const quizNumericCannoni = {
      'question' : "In quest'oasi di pace troverete uno strumento di guerra. In che anno è stato costruito?",
      'answer' : '1785',
      'arrayCards' : cards,
      'idCard' : '4',
      'arrayPlaces' : places,
      'idPlace' : '7',
      'arrayGames' : games,
      'idGame' : '9',
      'hex' : '#89B8F6',
      'one' : 'Guerra e ',
      'two' : 'Pace'
    }

  
  return (
    <div>
      <QuizNumeric infoQuizNumeric={quizNumericCannoni} >


        <div style={{height: 'calc(100% - 102px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img width={90} src={cannon} alt="" />
        </div> 
      </QuizNumeric>
    </div>
  )
}

export default Cannoni;





