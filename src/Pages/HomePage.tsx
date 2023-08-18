import {
    BlockContainer,
    Container
} from '../Components/Container'

import ListProduct from '../Components/Products/ListProduct'

export default function HomePage() {
    return (
        <BlockContainer>
            <Container>
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-semibold">
                        Welcome to our Store
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Fork me on <a className="text-green-500 underline font-semibold" href="https://github.com/fachririyanto/react-cart">Github</a>.
                        API using <a className="text-green-500 underline font-semibold" href="https://fakestoreapi.com/">Fake Store API</a>.
                    </p>
                </header>
                <ListProduct />
            </Container>
        </BlockContainer>
    )
}