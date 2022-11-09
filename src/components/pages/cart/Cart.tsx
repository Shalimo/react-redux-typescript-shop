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
      <div className={styles.container}>
        {products.length === 0 ? <h1>Cart is empty</h1> : products.map((item) => (
          <div className={styles.product} key={item.id}>
            <h3>{item.title}</h3>
            <h4>{`$${item.price}`}</h4>
            <button onClick={() => {removeProductFromCart(item.id)}}>Remove</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Cart;
