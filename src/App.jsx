import { ControlBar } from "./components/ControlBar";
import { Meaning } from "./components/Meaning";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [noMatches, setNoMatches] = useState(false);

  const getWord = async (signal) => {
    // Original fetch function so that I don't forget
    // fetch(
    //   `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.trim()}`
    // )
    //   .then((res) => {
    //     if (res.ok === true) {
    //       return res.json();
    //     }
    //   })
    //   .then((data) => {
    //     setData(data);
    //   });
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.trim()}`,
        { signal: signal }
      );
      if (res.status == 200) {
        setData(res.data);
        // If have results remove no matches warning
        setNoMatches(false);
      }
    } catch (error) {
      if (error.name === "CanceledError") {
        console.log("Request Aborted");
        return;
      } else if (error.response.status === 404) {
        setNoMatches(true);
        console.log(error.response.data.title);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    if (searchInput) {
      getWord(controller.signal);
    } else if (!searchInput) {
      // If search input is empty remove no matches warning
      setNoMatches(false);
    }
    // Abort request type too fast. Reduce unnecessary API hit.
    return () => {
      controller.abort();
    };
  }, [searchInput]);

  return (
    <div className="app">
      <ControlBar />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        noMatches={noMatches}
      />
      <Meaning data={data} />
    </div>
  );
}

export default App;
