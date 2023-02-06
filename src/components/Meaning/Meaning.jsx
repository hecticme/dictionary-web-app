import { Word } from "./Word";
import { Etymologies } from "./Etymologies";
import { Source } from "./Source";
import { useTheme } from "../../contexts/ThemeContext";

export function Meaning({ data }) {
  const [darkTheme] = useTheme();

  let result;
  if (Array.isArray(data) && !data.length == 0) {
    result = (
      <div className={`meaning ${darkTheme ? "dark" : ""}`}>
        <Word data={data} />
        <Etymologies data={data} />
        <Source data={data} />
      </div>
    );
  }

  return result;
}
