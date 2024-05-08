import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults, setErrorMessage }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${value}`
      );
      if (!response.ok)
        throw new Error(
          response.status === 404 ? "Country not found" : response.statusText
        );
      const json = await response.json();
      setResults(json);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setResults([]);
    }
  };

  const handleChange = async (value) => {
    setInput(value);
    if (!value) return setResults([]); // Clear results
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search by country name..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
