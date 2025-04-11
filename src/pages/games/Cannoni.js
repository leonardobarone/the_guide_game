import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import cannon from '../../images/games/cannoni/cannon2.png';
import findById from "../../utils/findById";
import Error from "../Error";
import useImagesLoaded from '../../utils/useImagesLoaded';
import Loading from "../../components/Loading";

const Cannoni = () => {
    const images = [cannon]
    const loading = useImagesLoaded(images);
    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '9');
    const place = findById(places, '7');
    const card = findById(cards, '4');
    
    const quizNumericCannoni = {
      'cards' : cards,
      'places' : places,
      'games' : games,
      'card' : card,
      'place' : place,
      'game' : game,
       'hex' : '#89B8F6'
    }

    if (!loading) return <Loading height={50} />
  
  return (
    <div>
      {game.unblocked ? <Error /> : (
        <QuizNumeric infoQuizNumeric={quizNumericCannoni} >
          <div style={{height: 'calc(100% - 102px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img width={150} src={cannon} alt="" />
          </div> 
        </QuizNumeric>
      )}
    </div>
  )
}

export default Cannoni;





