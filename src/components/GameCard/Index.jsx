import React from 'react'
import { GameCardContainer, Prices } from './Style'

export default function GameCard({ image, name, normalPrice, price }) {

    return (
        <GameCardContainer>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <Prices>
                <p>Preço Normal: R$ {(normalPrice * 5.40).toFixed(2)}</p>
                <p>Preço: R$ {(price * 5.40).toFixed(2)}</p>
            </Prices>
        </GameCardContainer>
    )
}
