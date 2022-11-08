import { useQuery } from "@tanstack/react-query";
import { Products } from "../../../services/products";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./Product.module.scss";
import { FC } from "react";

const Product: FC = () => {
  const { data: products, isLoading } = useQuery(["products"], () =>
    Products.getProducts()
  );

  return (
    <div>Product</div>
  )
}

export default Product;
