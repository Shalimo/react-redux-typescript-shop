import styles from "./ProductInfo.module.scss";
import { FC, useState } from "react"

const ProductInfo: FC<{ images: string[], price: number, title: string }> = ({ images, price, title }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
      <div className={styles.container}>

        <div
            style={{ backgroundImage: `url(${images[imageIndex]})` }}
            className={styles.mainImage}
        ></div>

        <div className={styles.gridImages}>
        {images.map((item, index) => (
          <button
            className={index === imageIndex ? styles.active : styles.unActive}
            onClick={() => {
              setImageIndex(index);
            }}
            key={index}
          >
            <div
              style={{ backgroundImage: `url(${item})` }}
              className={styles.image}
            ></div>
          </button>
        ))}
        </div>
        <h1>{title}</h1>
        <h2>${price}</h2>
      </div>
  );
};

export default ProductInfo;
