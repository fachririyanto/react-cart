import { CartProps } from '../../Types/Cart'

const initialState: CartProps[] = []

export const initializer = (initialValue = initialState): CartProps[] => {
    return JSON.parse(localStorage.getItem('cart') || '') || initialValue
}

export function cartReducer(state: any, action: any) {
    let newState: CartProps[] = []

    switch (action.type) {
        case 'ADD_TO_CART':
            const exist = state.find((item: any) => item.id === action.payload.id)

            if (exist) {
                return state.map((item: any) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            }

            newState = [...state, action.payload]
            break

        case 'REMOVE_FROM_CART':
            newState = state.filter((item: any) => item.id !== action.payload)
            break

        case 'INCREASE_QTY':
            newState = state.map((item: any) => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item)
            break

        case 'DECREASE_QTY':
            const item = state.find((item: any) => item.id === action.payload)

            if (item.qty <= 1) {
                return state
            }

            newState = state.map((item: any) => item.id === action.payload ? { ...item, qty: item.qty - 1 } : item)
            break

        case 'CLEAR_CART':
            newState = []
            break

        default:
            return state
    }

    // update to localstorage
    localStorage.setItem('cart', JSON.stringify(newState))

    return newState
}