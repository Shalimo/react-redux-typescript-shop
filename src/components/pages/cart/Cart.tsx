import styles from "./Cart.module.scss";
import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Layout from "../../ui/layout/Layout";

const Cart: FC = () => {
  const { products } = useTypedSelector((state) => state.cart);

  return (
    <Layout>
      <h1>Cart</h1>
    </Layout>
  );
};

export default Cart;
