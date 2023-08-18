import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { ProductProps } from '../../Types/Product'
import { AppContext, CartContextProps } from '../../App/Provider'

export default function Product(props: ProductProps) {
    const { dispatch }: CartContextProps = useContext(AppContext)

    const { id, title, image, price } = props

    const addToCart = (e: React.SyntheticEvent) => {
        e.preventDefault()

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                title,
                image,
                price,
                qty: 1,
            },
        })
    }

    return (
        <div className="px-2 pb-4 md:px-3 md:pb-6 w-1/2 md:w-1/3 lg:w-1/4" id={ "product-" + id }>
            <div className="flex flex-col relative p-4 h-full bg-white rounded-lg shadow-md overflow-hidden">
                <figure className="relative pt-[100%] overflow-hidden">
                    <picture className="flex absolute inset-0">
                        <img src={ image } loading="lazy" alt={ title } className="block w-full h-full object-cover object-top" />
                    </picture>
                    <Link to={ "/product/" + id } className="block absolute inset-0"></Link>
                </figure>
                <div className="flex flex-col pt-4 h-full">
                    <div className="flex-grow">
                        <h3 className="font-semibold text-sm line-clamp-2">
                            <Link to={ "/product/" + id }>{ title }</Link>
                        </h3>
                        <span className="block mt-3 font-bold text-lg">${ price }</span>
                    </div>
                    <Button className="mt-3 w-full" onClick={ (e) => addToCart(e) }>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}