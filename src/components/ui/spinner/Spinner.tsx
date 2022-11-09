import styles from "./Spinner.module.scss";
import { FC } from "react";
import Layout from "../layout/Layout";


const Spinner: FC = () => {

  return (
    <span className={styles.spinner}></span>
  )
}

export default Spinner;
