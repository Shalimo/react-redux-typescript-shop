import { useQuery } from "@tanstack/react-query";
import { Products } from "../../../services/products";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./Product.module.scss";
import { FC } from "react";
import Layout from "../../ui/layout/Layout";

const Product: FC = () => {
  const { data: products, isLoading } = useQuery(["products"], () =>
    Products.getProducts()
  );

  return (
    <Layout>
        <div>Product</div>
    </Layout>
  )
}

export default Product;
