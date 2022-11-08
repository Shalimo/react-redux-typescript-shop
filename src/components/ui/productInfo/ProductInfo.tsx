import styles from "./ProductInfo.module.scss";
import { FC } from "react";

const ProductInfo: FC<{images: string[]}> = ({images}) => {

  return (
    <div className={styles.container}>
        {images.map((item) => (
            <img src={item}/>
        ))}
    </div>
  )
}

export default ProductInfo;
