import styles from "./Tooltip.module.css";
import { SlGraph } from "react-icons/sl";
import { FC } from "react";

interface TooltipProps {
  deaths: number;
  kills: number;
}

const Tooltip: FC<TooltipProps> = ({ deaths, kills }) => {
  return (
    <div className={styles.tooltip}>
      <SlGraph color="white" />
      <div className={styles.tooltipText}>
        <span>Kills: {kills}</span>
        <span>Deaths: {deaths}</span>
      </div>
    </div>
  );
};

export default Tooltip;
