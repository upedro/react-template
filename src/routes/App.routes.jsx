import React from 'react'
import { 
    Routes, Route

} from 'react-router-dom'
import Home from './Home'
import SearchPage from './SearchPage'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } >
                <Route path="/SerchPage" element={<SearchPage />} />
            </Route>
        </Routes>
    )
}
