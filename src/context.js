import {useState, useContext, createContext} from 'react';
// import scialoja from './images/scialoja.jpg'
// import venerdiSanto from './images/venerdiSanto.jpg'
// import elsaMorante from './images/elsaMorante.jpg';
import dbCards from './utils/dbCards';
import dbGames from './utils/dbGames';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [cards, setCards] = useState(dbCards);
    const [games, setGames] = useState(dbGames);

    

    return <AppContext.Provider value={{
        cards, setCards,
        games, setGames
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};