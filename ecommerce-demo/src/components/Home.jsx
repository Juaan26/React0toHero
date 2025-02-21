import { Products } from "./Products"
import { Header } from "./Header"

export const Home = ({ products }) => {

    return (
        <>
            <Header />
            <Products products={ products } />

        </>
    )
}