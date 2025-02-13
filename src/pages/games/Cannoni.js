import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import cannon from '../../images/games/cannon.png';
import findById from "../../utils/findById";

const Cannoni = () => {
    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '9');
    const place = findById(places, '7');
    const card = findById(cards, '4');
    
    const quizNumericCannoni = {
      'question' : "In quest'oasi di pace troverete uno strumento di guerra. In che anno è stato costruito?",
      'answer' : '1785',
      'arrayCards' : cards,
      'idCard' : card.id,
      'arrayPlaces' : places,
      'idPlace' : place.id,
      'arrayGames' : games,
      'idGame' : game.id,
      'hex' : '#89B8F6',
      'name' : game.name,
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





