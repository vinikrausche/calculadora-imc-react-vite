import { useState } from "react";
import styles from "./assets/css/styles.module.css";
import poweredImage from "./assets/images/powered.png";
import { levels } from "./helpers/imc";
import { GridItem } from "./components/GridItem/GridItem";

function App() {
  const [weight, getWeightField] = useState<number>(0);
  const [height, getHeightField] = useState<number>(0);

  const calcImcButton = () => {};
  return (
    <div>
      <div className="mx-8 py-3 flex justify-center md:flex md:justify-start">
        <img className={styles.powered + " md:"} src={poweredImage} alt="" />
      </div>

      <div className=" mt-10 mx-8 flex justify-between">
        <div className=" flex-1 items-center mr-5">
          <div>
            <h1 className={styles.title1 + " md: text-center"}>
              Calcule seu IMC
            </h1>
            <p className="mx-5 my-4 text-justify">
              IMC sigla para índice de Massa Corpórea. Preencha os campos
              abaixo, com seu peso e altura e veja o resultado ao lado.
            </p>

            <div className="flex flex-col items-center">
              <input
                className="w-80 md:w-96 mt-3 mb-3 p-3  focus:outline-none"
                type="number"
                onChange={(e) => getWeightField(parseFloat(e.target.value))}
                value={weight > 0 ? weight : ""}
                placeholder="Digite seu peso. Ex: 79.99 (kg)"
              />

              <input
                className="w-80 md:w-96 mt-3 p-3 focus:outline-none"
                type="number"
                onChange={(e) => getHeightField(parseFloat(e.target.value))}
                value={height > 0 ? height : ""}
                placeholder="Digite sua altura. Ex: 1.89 (m)"
              />

              <button
                className={styles.calcbutton + " mt-9"}
                onClick={calcImcButton}
              >
                Calcular
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center flex justify-center  ml-5">
          <div className={styles.gridItem}>
            {levels.map((item) => (
              <GridItem levels={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
