import { useQuery } from "@tanstack/react-query"
import { Products } from "../../../services/products"
import styles from "./Home.module.scss"
import { FC } from "react"

const Home: FC = () => {

    const {
        data: products,
        isLoading
    } = useQuery(['products'], () => Products.getProducts())

    return (
        <div className={styles.bg}>
            {isLoading ? <div>Loading...</div> : products?.map(product => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))}
        </div>
    )
}

export default Home