import "./SearchResultsList.css";
import { SearchResults } from "../SearchResults/SearchResults";
import Country from "../Card/Country.interface";

export const SearchResultsList = ({
  results,
  errorMessage,
}: {
  results: Country[];
  errorMessage: string;
}) => {
  console.log("Results:", results);

  let content;
  if (errorMessage) {
    content = <p className="error-message">{errorMessage}</p>;
  } else {
    content = results.map((result, index) => (
      <SearchResults result={result} key={index} />
    ));
  }

  return <div className="results-list">{content}</div>;
};
