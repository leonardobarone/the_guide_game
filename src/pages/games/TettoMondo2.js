import Quindici from '../../components/Quindici';
// Immagini 
import quindici1 from '../../images/games/tetto_mondo/1.webp';
import quindici2 from '../../images/games/tetto_mondo/2.webp';
import quindici3 from '../../images/games/tetto_mondo/3.webp';
import quindici4 from '../../images/games/tetto_mondo/4.webp';
import quindici5 from '../../images/games/tetto_mondo/5.webp';
import quindici6 from '../../images/games/tetto_mondo/6.webp';
import quindici7 from '../../images/games/tetto_mondo/7.webp';
import quindici8 from '../../images/games/tetto_mondo/8.webp';
import quindici9 from '../../images/games/tetto_mondo/9.webp';
import quindici10 from '../../images/games/tetto_mondo/10.webp';
import quindici11 from '../../images/games/tetto_mondo/11.webp';
import quindici12 from '../../images/games/tetto_mondo/12.webp';
import quindici13 from '../../images/games/tetto_mondo/13.webp';
import quindici14 from '../../images/games/tetto_mondo/14.webp';
import quindici15 from '../../images/games/tetto_mondo/15.webp';
import quindici16 from '../../images/games/tetto_mondo/16.webp';
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";

const TettoMondo2 = () => {
    const {cards, games, places} = useGlobalContext();
    const game = findById(games, '11');
    const place = findById(places, '9');
    const card = findById(cards, '1');

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
  
  export default TettoMondo2;
  