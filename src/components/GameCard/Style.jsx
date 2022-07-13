import styled from 'styled-components'

export const GameCardContainer = styled.div`
    width: 18rem;
    height: 15rem;
    background-color: #5215fc;
    margin: .5rem;
    
    img {
        width: 100%;
    }

    h3 {
        padding: 1rem;
        color: white;
        text-decoration: line-through;
    }
`

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem;
`