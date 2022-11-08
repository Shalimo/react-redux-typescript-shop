import { useQuery } from "@tanstack/react-query";
import {useParams} from 'react-router-dom';
import { Products } from "../../../services/products.service";
import styles from "./Product.module.scss";
import { FC } from "react";
import Layout from "../../ui/layout/Layout";
import ProductInfo from "../../ui/productInfo/ProductInfo";
import Button from "../../ui/buttonCart/Button";

const Product: FC = () => {

  const params = useParams()

  const { data: product, isLoading } = useQuery(["product", params.id], () =>
    Products.getProductByID(params.id || '')
  );

  return (
    <Layout>
        {isLoading && (<div>Loading...</div>)}
        <h1>{product?.title}</h1>
        {product ? <ProductInfo images={product?.images}/> : <div>Empty</div>}
    </Layout>
  )
}

export default Product;
