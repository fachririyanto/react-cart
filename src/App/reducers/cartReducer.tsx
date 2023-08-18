import { CartProps } from '../../Types/Cart'

const initialState: CartProps[] = []

const storageName: string = 'react_cart'

export const initializer = (initialValue = initialState): CartProps[] => {
    return JSON.parse(localStorage.getItem(storageName) || '{}') || initialValue
}

export function cartReducer(state: any, action: any) {
    let newState: CartProps[] = []

    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.length) {
                const exist = state.find((item: any) => item.id === action.payload.id)

                if (exist) {
                    return state.map((item: any) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                }

                newState = [...state, action.payload]
            } else {
                newState.push(action.payload)
            }
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
    localStorage.setItem(storageName, JSON.stringify(newState))

    return newState
}