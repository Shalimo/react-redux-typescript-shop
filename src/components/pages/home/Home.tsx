import { useEffect, useState } from "react"
import { Products } from "../../../services/products"
import styles from "./Home.module.scss"
import { IProduct } from "../../../types/product.interfase"

const Home = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Products.getProducts()
            .then(products => setProducts(products))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className={styles.bg}>
            {error && <div>{error}</div>}
            {isLoading ? <div>Loading...</div> : products.map(product => (
                <div>
                    {product.title}
                </div>
            ))}
        </div>
    )
}

export default Home