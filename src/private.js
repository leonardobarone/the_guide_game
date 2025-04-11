import {useContext, createContext} from 'react';

const PrivateContext = createContext();

const PrivateProvider = ({children}) => {



    return <PrivateContext.Provider value={{
    }}>
        {children}
    </PrivateContext.Provider>
}

const usePrivateContext = () => {
    return useContext(PrivateContext);
}

export {PrivateProvider, usePrivateContext};