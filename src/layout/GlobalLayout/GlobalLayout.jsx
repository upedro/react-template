import React from 'react'
import { Header } from '../../components/Header/Index'
import { LayoutContainer, Main } from './Style'

export default function GlobalLayout({ children }) {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                { children }
            </Main>
        </LayoutContainer>
    )
}
