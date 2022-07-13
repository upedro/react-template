import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyle, NavMenu } from './Style'

export function Header() {
    return (
        <HeaderStyle>
            <h1>Descount Store</h1>
            <NavMenu>
                <Link to="/">Home</Link>
                <Link to="/SearchPage">Search Page</Link>
            </NavMenu>
        </HeaderStyle>
    )
}
