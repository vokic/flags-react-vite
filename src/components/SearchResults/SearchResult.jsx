import React, { useState } from "react";
import "./SearchResult.css";
import { Card } from "../Card/Card";

const SearchResult = ({ result }) => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    if (result && result.name && result.name.common) {
      setShowCard(true);
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <>
      <div className="search-result" onClick={handleClick}>
        {result && result.name && result.name.common}
      </div>
      {showCard && result && <Card country={result} onClose={handleCloseCard} />}
    </>
  );
};

export { SearchResult };
