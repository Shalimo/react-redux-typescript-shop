import { useQuery } from "@tanstack/react-query";
import {useParams} from 'react-router-dom';
import { Products } from "../../../services/products";
import styles from "./Product.module.scss";
import { FC } from "react";
import Layout from "../../ui/layout/Layout";

const Product: FC = () => {

  const params = useParams()

  const { data: product, isLoading } = useQuery(["product", params.id], () =>
    Products.getProductByID(params.id || '')
  );

  return (
    <Layout>
        {isLoading && (<div>Loading...</div>)}
        {product?.title}
    </Layout>
  )
}

export default Product;
