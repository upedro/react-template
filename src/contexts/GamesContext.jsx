import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const GamesContext = createContext()

export function GamesContextProvider({ children }) {

    const [games, setGames] = useState()

    const data = async () => {
        const data = await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=60");
        setGames(data.data);
    }

    useEffect(() => {
        data()
    }, [])

    return (
        <GamesContext.Provider value={{ games }}>
            { children }
        </GamesContext.Provider>
    )
}