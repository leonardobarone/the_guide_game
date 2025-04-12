import PrimaQuindici from "../../components/PrimaQuindici";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";

const SanLeonardo = () => {
  const {games} = useGlobalContext();
  const game = findById(games, '6');

  const infoSanLeonardo = {
    'game' : game,
    'hex' : 'green',
    'inner' : 'AVE MARIA'
}
  return <PrimaQuindici 
     infoRequest={infoSanLeonardo}
  />
}

export default SanLeonardo;
