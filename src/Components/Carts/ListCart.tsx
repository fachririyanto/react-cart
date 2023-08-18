import { useContext, useMemo } from 'react'
import { AppContext, CartContextProps } from '../../App/Provider'
import Cart from './Cart'
import { CartProps } from '../../Types/Cart'
import { Button } from '../Button'

interface ListCartProps {
    isOpen: boolean
}

export default function ListCart({ isOpen }: ListCartProps) {
    const { cart, dispatch }: CartContextProps = useContext(AppContext)

    let totalAmount = 0

    if (cart.length) {
        totalAmount = useMemo(() => {
            cart.forEach((item: CartProps) => {
                totalAmount += item.price * item.qty
            })

            return totalAmount
        }, [cart])
    }

    return (
        <>
            <aside className={ "fixed p-4 top-20 right-0 bottom-0 overflow-auto w-[320px] z-10 bg-white border-l" + (isOpen ? ' block' : ' hidden') }>
                <header className="pb-4 border-b">
                    <span className="font-semibold">{ cart.length } item(s)</span> in your Cart
                    <p>
                        <button className="text-xs font-semibold text-red-500" onClick={ () => dispatch({ type: 'CLEAR_CART' }) }>Clear Cart</button>
                    </p>
                </header>
                <div>
                    <ul>
                        { cart.length && cart.map((item: CartProps) => <Cart key={ item.id } { ...item } />) }
                    </ul>
                </div>
                <footer className="mt-6">
                    <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${ totalAmount.toLocaleString('id-ID') }</span>
                    </div>
                    <Button className="w-full mt-4">Checkout</Button>
                </footer>
            </aside>
        </>
    )
}