import styles from "./Header.module.css";
import { FC } from "react";

interface HeaderProps {
  winner?: string;
  loading: boolean;
}

const Header: FC<HeaderProps> = ({ winner, loading }) => {
  return loading ? (
    <h2 className={styles.title}>Loading...</h2>
  ) : (
    <h2
      className={`${styles.title} ${
        winner === "cyan" ? styles.cyan : styles.orange
      }`}
    >
      {winner === "orange" ? "Orange" : "Cyan"} wins
    </h2>
  );
};

export default Header;
