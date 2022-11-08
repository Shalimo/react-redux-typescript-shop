import styles from "./ProductInfo.module.scss";
import { FC, useState } from "react";
import Button from "../buttonCart/Button";

const ProductInfo: FC<{ images: string[] }> = ({ images }) => {
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
        <Button>Add to cart</Button>
      </div>
  );
};

export default ProductInfo;
