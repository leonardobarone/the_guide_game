import Quindici from '../../components/Quindici';
// Immagini 
import quindici1 from '../../images/games/san_leonardo/1.png';
import quindici2 from '../../images/games/san_leonardo/2.png';
import quindici3 from '../../images/games/san_leonardo/3.png';
import quindici4 from '../../images/games/san_leonardo/4.png';
import quindici5 from '../../images/games/san_leonardo/5.png';
import quindici6 from '../../images/games/san_leonardo/6.png';
import quindici7 from '../../images/games/san_leonardo/7.png';
import quindici8 from '../../images/games/san_leonardo/8.png';
import quindici9 from '../../images/games/san_leonardo/9.png';
import quindici10 from '../../images/games/san_leonardo/10.png';
import quindici11 from '../../images/games/san_leonardo/11.png';
import quindici12 from '../../images/games/san_leonardo/12.png';
import quindici13 from '../../images/games/san_leonardo/13.png';
import quindici14 from '../../images/games/san_leonardo/14.png';
import quindici15 from '../../images/games/san_leonardo/15.png';
import quindici16 from '../../images/games/san_leonardo/16.png';
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";

const SanLeonardo2 = () => {
    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '6');
    const place = findById(places, '5');
    const card = findById(cards, '11');

    const sanLeonardo = {
        'card' : card,
        'place' : place,
        'game' : game,
        'images' : [
          quindici1,
          quindici2,
          quindici3,
          quindici4,
          quindici5,
          quindici6,
          quindici7,
          quindici8,
          quindici9,
          quindici10,
          quindici11,
          quindici12,
          quindici13,
          quindici14,
          quindici15,
          quindici16,
      ]
    }
  return <Quindici 
    infoRequest={sanLeonardo}
  />
}

export default SanLeonardo2;
