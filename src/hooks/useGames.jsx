import { useContext } from "react"
import { GamesContext } from "../contexts/GamesContext"

export const useGames = () => {
    const context = useContext(GamesContext)
    return context
}