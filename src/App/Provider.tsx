import {
    createContext,
    ReactNode,
    useReducer,
    useEffect
} from 'react'

import { cartReducer, initializer } from './reducers/cartReducer'

export interface CartContextProps {
    cart: any
    dispatch: any
}

interface AppProviderProps {
    children: ReactNode
}

export const AppContext = createContext<CartContextProps>({
    cart: [],
    dispatch: () => null
})

export const AppProvider = ({ children } : AppProviderProps) => {
    const [cart, dispatch] = useReducer(cartReducer, [], initializer)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <AppContext.Provider value={{
            cart,
            dispatch
        }}>
            { children }
        </AppContext.Provider>
    )
}