import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList/SearchResultsList";
import VideoBackground from "./components/VideoBackground";

function App() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <VideoBackground />
      <div className="search-bar-container">
        <SearchBar setResults={setResults} setErrorMessage={setErrorMessage} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {results.length > 0 && (
          <SearchResultsList results={results} errorMessage={errorMessage} />
        )}
      </div>
    </div>
  );
}

export default App;
