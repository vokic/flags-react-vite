import { useState } from "react";
import "./SearchResults.css";
import { Card } from "../Card/Card";

import Country from "../Card/Country.interface";

export const SearchResults = ({ result }: { result: Country }) => {
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
      {showCard && result && (
        <Card country={result} onClose={handleCloseCard} />
      )}
    </>
  );
};
