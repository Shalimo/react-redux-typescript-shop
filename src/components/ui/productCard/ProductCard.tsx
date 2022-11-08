import { FC } from "react";
import { IProduct } from "../../../types/product.interfase";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Link className={styles.container} to={`/product/${product.id}`}>
      <div
        style={{ backgroundImage: `url(${product.image})` }}
        className={styles.image}
      ></div>
      <div className={styles.titles}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(product.price)}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
