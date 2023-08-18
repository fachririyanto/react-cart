import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/product/:productId" element={ <ProductPage /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}