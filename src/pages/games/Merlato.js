import QuizNumeric from "../../components/QuizNumeric";
import { useGlobalContext } from "../../context";
import lace from '../../images/games/merlato/lace.svg';
import arch from '../../images/games/merlato/arch.svg';
import styled from "styled-components";
import findById from "../../utils/findById";
import Error from "../Error";
import useImagesLoaded from "../../utils/useImagesLoaded";
import Loading from "../../components/Loading";

const Merlato = () => {

    const images = [lace, arch];
    const loading = useImagesLoaded(images);

    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '14');
    const place = findById(places, '12');
    const card = findById(cards, '6');
    
    const quizNumericMerlato = {
        'card' : card,
        'place' : place,
        'game' : game,
        'cards' : cards,
        'places' : places,
        'games' : games,
        'hex' : 'var(--rosaPeppe)'
    }

  if (!loading) return <Loading height={50} />
  return (
    <div>
      {
        game.unblocked ? <Error /> : (
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
        )
      }
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
  }

`
