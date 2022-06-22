type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0DAD69", icon: "up", imc: [18.6, 24.9] },
  { title: "SobrePeso", color: "#E2B039", icon: "down", imc: [25, 30] },
  { title: "Obsidade", color: "#C3423F", icon: "down", imc: [30.1, 99] },
];

export const calcImc = (height: number, weight: number) => {
  let imc = weight / Math.pow(height, 2);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      levels[i].yourImc = imc;
      return levels[i];
    }
  }

  return null;
};
