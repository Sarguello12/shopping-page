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
    let pageNum = page + 1;
    setPage(pageNum);
    let response = await searchFunctionality(search, page);
    setResults(response);
  };

  const previousPageHandler = async (event) => {
    event.preventDefault();
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
          //   return <p key={index}>{result.id}</p>;
          return <ResultsCards key={index} {...result}></ResultsCards>;
        })}
      </div>
      <div>
        <button onClick={previousPageHandler}>back</button>
        <button onClick={forwadPageHandler}>forward</button>
      </div>
    </div>
  );
};
export default SearchResults;
