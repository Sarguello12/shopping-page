import React, { useState } from "react";
import { searchFunctionality } from "../Services/SearchFunctionality";
import ResultsCards from "./ResultsCards";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    setPage(1);
    let response = await searchFunctionality(search, page);
    setResults(response);
  };

  const forwadPageHandler = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    let pageNum = page + 1;
    setPage(pageNum);
    let response = await searchFunctionality(search, page);
    setResults(response);
  };

  const previousPageHandler = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    let pageNum = -1;
    setPage(pageNum);
    let response = await searchFunctionality(search, page);
    setResults(response);
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <label>Search:</label>
        <input onChange={searchChangeHandler}></input>
        <button type="submit">Go</button>
      </form>
      <div>
        {results.map((result, index) => {
          return <ResultsCards key={index} {...result}></ResultsCards>;
        })}
      </div>
      <div>
        {page === 1 ? (
          <button onClick={forwadPageHandler}>forward</button>
        ) : (
          <div>
            <button onClick={previousPageHandler}>back</button>{" "}
            <button onClick={forwadPageHandler}>forward</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchResults;
