import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({children, ...rest}) => {

  return (
    <button className={styles.button} {...rest}>{children}</button>
  )
}

export default Button;
