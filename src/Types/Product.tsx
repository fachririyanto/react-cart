export interface RatingProps {
    count: number
    rate: number
}

export interface ProductProps {
    id: number
    title: string
    category: string
    price: number
    description: string
    image: string
    rating: RatingProps
}