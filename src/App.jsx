import { ControlBar } from "./components/ControlBar";
import { Meaning } from "./components/Meaning";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <ControlBar />
      <SearchBar />
      <Meaning />
    </div>
  );
}

export default App;
