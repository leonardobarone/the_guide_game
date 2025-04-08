import {useState, useContext, createContext} from 'react';

import dbCards from './utils/dbCards';
import dbGames from './utils/dbGames';
import dbPlaces from './utils/dbPlaces';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [cards, setCards] = useState(dbCards);
    const [games, setGames] = useState(dbGames);
    const [places, setPlaces] = useState(dbPlaces);
    

    return <AppContext.Provider value={{
        cards, setCards,
        games, setGames,
        places, setPlaces,
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};