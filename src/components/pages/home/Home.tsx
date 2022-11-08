import { useQuery } from "@tanstack/react-query";
import { Products } from "../../../services/products";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./Home.module.scss";
import { FC } from "react";

const Home: FC = () => {
  const { data: products, isLoading } = useQuery(["products"], () =>
    Products.getProducts()
  );

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Fakeshop</h1>
      <div className={styles.gridContainer}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
