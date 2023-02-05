import { ControlBar } from "./components/ControlBar";
import { Meaning } from "./components/Meaning";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  const getWord = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getWord();
  }, [searchInput]);

  return (
    <div className="app">
      <ControlBar />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Meaning data={data} />
    </div>
  );
}

export default App;
