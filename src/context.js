import {useState, useContext, createContext} from 'react';

import dbCards from './utils/dbCards';
import dbGames from './utils/dbGames';
import dbPlaces from './utils/dbPlaces';

// Prova Auth
// import { auth } from './firebase/firebase';
// import { onAuthStateChanged } from 'firebase/auth';

const AppContext = createContext();

const AppProvider = ({children}) => {

    // Prova Auth
    // const [currentUser, setCurrentUser] = useState(null);
    // const [userLoggedIn, setUserLoggedIn] = useState(false);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=> {
    //     const unsubscribe = onAuthStateChanged(auth, initializeUser);
    //     return unsubscribe;
    // })

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