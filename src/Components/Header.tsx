import { useState } from 'react'
import { Link } from 'react-router-dom'
import ListCart from './Carts/ListCart'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <>
            <header className="h-20">
                <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b z-20">
                    <div className="flex items-center h-full px-4">
                        <Link to="/" className="flex items-center">
                            <figure className="">
                                <img className="block" src="/vite.svg" alt="App Name" />
                            </figure>
                            <div className="flex-grow pl-4">
                                <h1 className="font-semibold uppercase">
                                    React Cart
                                </h1>
                            </div>
                        </Link>
                        <div className="flex-grow text-right">
                            <button className="" onClick={ () => setIsMenuOpen(!isMenuOpen) }>
                                <span className="material-symbols-outlined text-3xl">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <ListCart isOpen={ isMenuOpen } />
        </>
    )
}