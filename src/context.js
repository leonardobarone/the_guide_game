import {useState, useContext, createContext} from 'react';
import scialoja from './images/scialoja.jpg'
import venerdiSanto from './images/venerdiSanto.jpg'
import elsaMorante from './images/elsaMorante.jpg';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const db = [
        {
            'id' : '1',
            'title' : 'venerdì santo',
            'img' : venerdiSanto,
            'sbloccato' : true
        },
        {
            'id' : '2',
            'title' : 'antonio scialoja',
            'img' : scialoja,
            'sbloccato' : true
        },
        {
            'id' : '3',
            'title' : 'l\'isola di arturo',
            'img' : elsaMorante,
            'sbloccato' : false
        },
    ];

    const [cards, setCards] = useState(db);

    

    return <AppContext.Provider value={{
        cards,
        setCards
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};