import { useQuery } from "@tanstack/react-query";
import { Products } from "../../../services/products";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./Layout.module.scss";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => {
  const { data: products, isLoading } = useQuery(["products"], () =>
    Products.getProducts()
  );

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/">Cart</Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
