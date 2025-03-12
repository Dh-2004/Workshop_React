import { useState, useEffect } from "react";
import { fetchWordDefinition } from "./fetchDictionary"; 
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (word.trim() !== "") {
      fetchWordDefinition(word, setData, setError);
    }
  }, [word]);

  return (
    <div className="app-container">
    
      <div className="search-container">
        <h1 className="title">Digi Word</h1>
        <input
          type="text"
          placeholder="Enter a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="search-input"
        />
      </div>

      
      <div className="output-container">
        {error && <p className="error-message">{error}</p>}

        {data && (
          <div className="result-box">
            <h2 className="word-title">{data.word}</h2>
            {data.phonetics?.length > 0 && (
              <p className="phonetic-text">{data.phonetics[0]?.text || "No pronunciation available"}</p>
            )}
            <h3 className="meaning-title">Meanings:</h3>
            <ul className="meaning-list">
              {data.meanings?.map((meaning, index) => (
                <li key={index}>
                  <strong>{meaning.partOfSpeech}:</strong> {meaning.definitions[0]?.definition || "No definition available"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
