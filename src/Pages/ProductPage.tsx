import {
    useState,
    useEffect,
    useContext
} from 'react'

import { useParams } from 'react-router-dom'

import {
    BlockContainer,
    Container
} from '../Components/Container'

import { Button } from '../Components/Button'

import { ProductProps } from '../Types/Product'
import { AppContext, CartContextProps } from '../App/Provider'

export default function ProductPage() {
    const { productId } = useParams()

    const [product, setProduct] = useState<ProductProps>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { dispatch }: CartContextProps = useContext(AppContext)

    const fetchProduct = async () => {
        const results = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await results.json()

        setProduct(data)
        setIsLoading(false)
    }

    const addToCart = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (! product) return

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...product,
                qty: 1,
            },
        })
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return isLoading && ! product ? null : (
        <BlockContainer>
            <Container>
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-auto md:w-[400px] md:min-w-[400px]">
                        <figure className="relative pt-[100%] overflow-hidden border">
                            <picture className="flex absolute inset-0">
                                <img src={ product?.image } loading="lazy" alt={ product?.title } className="block w-full h-full object-cover object-top" />
                            </picture>
                        </figure>
                    </div>
                    <div className="flex-grow pt-6 md:pt-0 md:pl-10">
                        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                            { product?.title }
                            </h1>
                        <p className="mt-1 text-sm text-gray-700">
                            Rating: { product?.rating.rate } ({ product?.rating.count } votes)
                        </p>
                        <p className="mt-3">
                            { product?.description }
                        </p>
                        <p className="mt-5 text-xl md:text-2xl font-semibold">
                            ${ product?.price }
                        </p>
                        <p className="md:max-w-[200px]">
                            <Button className="block mt-5 w-full" onClick={ (e) => addToCart(e) }>Add to cart</Button>
                        </p>
                    </div>
                </div>
            </Container>
        </BlockContainer>
    )
}