import "./SearchResultsList.css";
import { SearchResult } from "../SearchResults/SearchResult";

export const SearchResultsList = ({ results, errorMessage }) => {
  console.log("Results:", results);

  let content;
  if (errorMessage) {
    content = <p className="error-message">{errorMessage}</p>;
  } else {
    content = results.map((result, index) => (
      <SearchResult result={result} key={index} />
    ));
  }

  return <div className="results-list">{content}</div>;
};
