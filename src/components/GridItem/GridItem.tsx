import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "./../../assets/images/up.png";
import downImage from "../../assets/images/down.png";

type Props = {
  levels: Level;
};

export const GridItem = ({ levels }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: levels.color }}>
      <div className={styles.gridIcon}>
        {levels.icon === "up" ? (
          <img src={upImage} alt="Good IMC" width={30} />
        ) : (
          <img src={downImage} alt="Bad IMC" width={30} />
        )}
      </div>

      <div className={styles.GridTitle}>
        <h4>{levels.title}</h4>
      </div>

      {levels.yourImc && (
        <div className={styles.userIMC}>
          <p>Seu IMC é: {levels.yourImc?.toFixed(2)}</p>
        </div>
      )}

      <div className={styles.gridInfo}>
        <p> Faixa do IMC: {levels.imc[0] + " - " + levels.imc[1]}</p>
      </div>
    </div>
  );
};
