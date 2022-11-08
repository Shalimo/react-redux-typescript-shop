import { FC } from "react"
import { IProduct } from "../../../types/product.interfase"
import styles from "./ProductCard.module.scss"

const ProductCard: FC<{product: IProduct}> = ({product}) => {

    return (
        <div className={styles.container}>
            <div style={{backgroundImage: `url(${product.image})`}} className={styles.image}></div>
            <div className={styles.titles}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                }).format(product.price)}</div>
            </div>
        </div>
    )
}

export default ProductCard