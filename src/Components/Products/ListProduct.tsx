import { useEffect, useState } from 'react'
import { ProductProps } from '../../Types/Product'
import Product from './Product'

const initialProducts: ProductProps[] = []

export default function ListProduct() {
    const [listProduct, setListProduct] = useState(initialProducts)

    const fetchProduct = async () => {
        if (localStorage.getItem('listProduct')) {
            setListProduct(JSON.parse(localStorage.getItem('listProduct') as string))
            return
        }

        // fetch from fakestoreapi
        const results = await fetch('https://fakestoreapi.com/products')
        const data = await results.json()

        // save to localstorage
        localStorage.setItem('listProduct', JSON.stringify(data))

        // set state
        setListProduct(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className="flex flex-wrap -mx-2 md:-mx-3">
            { listProduct.length && listProduct.map((product) => (
                <Product
                    key={ product.id }
                    id={ product.id }
                    title={ product.title }
                    price={ product.price }
                    description={ product.description }
                    image={ product.image }
                    rating={ product.rating }
                    category={ product.category }
                />
            )) }
        </div>
    )
}