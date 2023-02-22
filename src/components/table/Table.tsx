import styles from "./Table.module.css";
import { RiSkull2Fill } from "react-icons/ri";
import { FC } from "react";
import { Team, Teams } from "../../types";
import { AddButton, Tooltip } from "./components";

interface TableProps {
  team?: Team;
}

const Table: FC<TableProps> = ({ team }) => {
  return (
    <table className={styles.table}>
      <thead
        className={
          team?.name === Teams.Orange ? styles.orangeHeader : styles.cyanHeader
        }
      >
        <tr>
          <th className={styles.headerCell}></th>
          <th className={styles.headerCell}>NickName</th>
          <th className={styles.headerCell}>Score</th>
        </tr>
      </thead>
      <tbody>
        {team?.players.map((player) => (
          <tr
            className={`${styles.row} ${player.dead ? styles.dead : ""}`}
            key={player.id}
          >
            <td className={styles.cell} width="10%">
              {player.dead && <RiSkull2Fill />}
            </td>
            <td className={styles.cell} width="70%">
              {player.name}
            </td>
            <td className={styles.scoreCell} width="20%">
              <span>{player.score}</span>
              <Tooltip kills={player.kills} deaths={player.deaths} />
            </td>
            <td className={styles.cell} width="5%">
              <AddButton name={player.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
