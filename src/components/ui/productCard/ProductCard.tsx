import { FC } from "react"
import { IProduct } from "../../../types/product.interfase"
import styles from "./ProductCard.module.scss"

const ProductCard: FC<{product: IProduct}> = ({product}) => {

    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.title}/>
            <div className={styles.titles}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>{`${product.price}$`}</div>
            </div>
        </div>
    )
}

export default ProductCard