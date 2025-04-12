import PrimaQuindici from "../../components/PrimaQuindici";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";

const TettoMondo = () => {
  const {games} = useGlobalContext();
  const game = findById(games, '11');

  const infoTettoMondo = {
    'game' : game,
    'hex' : 'blue',
    'inner' : "S. M. REGINA DEL. PURITA'"
}
  return <PrimaQuindici 
     infoRequest={infoTettoMondo}
  />
}

export default TettoMondo;