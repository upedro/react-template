import React from "react";
import GameCard from "../components/GameCard/Index";
import { useGames } from "../hooks/useGames";

export default function Home() {
    const { games } = useGames()
    console.log(games)
    return (
        <>
            {games?.map(game => (
                <GameCard
                    image={game.thumb}
                    name={game.title}
                    normalPrice={game.normalPrice}
                    price={game.salePrice}
                    key={game.gameId}
                />
            ))}
        </>
    );
}
