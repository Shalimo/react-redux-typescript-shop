import styles from "./Cart.module.scss";
import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Layout from "../../ui/layout/Layout";

const Cart: FC = () => {
  const { products } = useTypedSelector((state) => state.cart);

  const { removeProductFromCart } = useActions();

  return (
    <Layout>
      {products.map((item) => (
        <div key={item.id}>
            {item.title}
        </div>
      ))}
    </Layout>
  );
};

export default Cart;
