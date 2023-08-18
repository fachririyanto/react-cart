import { useContext } from 'react'
import { AppContext, CartContextProps } from '../../App/Provider'
import { CartProps } from "../../Types/Cart"

export default function Cart({ id, image, title, qty, price }: CartProps) {
    const { dispatch }: CartContextProps = useContext(AppContext)

    const removeProduct = (productId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
    }

    const increaseQty = (productId: number) => {
        dispatch({ type: 'INCREASE_QTY', payload: productId })
    }

    const decreaseQty = (productId: number) => {
        dispatch({ type: 'DECREASE_QTY', payload: productId })
    }

    return (
        <li key={ id } className="flex justify-between py-4 border-b">
            <div className="flex">
                <img className="w-16 h-16 min-w-[64px] object-cover rounded-full" src={ image } alt={ title } />
                <div className="ml-4 flex-grow self-center">
                    <h3 className="font-semibold">{ title }</h3>
                    <p className="mt-1 text-sm text-gray-500">${ price.toLocaleString('id-ID') }</p>
                    <div className="flex mt-2 items-center">
                        <button className="text-xs font-semibold text-blue-500" onClick={ () => decreaseQty(id) }>-</button>
                        <span className="mx-2">{ qty }</span>
                        <button className="text-xs font-semibold text-blue-500" onClick={ () => increaseQty(id) }>+</button>
                    </div>
                    <div className="flex mt-2 items-center">
                        <button className="text-xs font-semibold text-red-500" onClick={ () => removeProduct(id) }>Remove</button>
                    </div>
                </div>
            </div>
        </li>
    )
}