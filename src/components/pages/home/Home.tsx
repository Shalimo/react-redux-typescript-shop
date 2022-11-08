import { useQuery } from "@tanstack/react-query";
import { Products } from "../../../services/products.service";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./Home.module.scss";
import { FC } from "react";
import Layout from "../../ui/layout/Layout";

const Home: FC = () => {
  const { data: products, isLoading } = useQuery(["products"], () =>
    Products.getProducts(), {
      select: ({products}) => products 
    }
  );

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
