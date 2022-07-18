import React, { useEffect, useState } from "react";
import { searchFunctionality } from "../Services/SearchFunctionality";
import ResultsCards from "./ResultsCards";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      let data = await searchFunctionality(search, page);
      setResults(data);
    };
    getData();
  }, [page]);

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const searchHandler = async (event) => {
    event.preventDefault();
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
    let pageNum = page - 1;
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
          <span></span>
        ) : (
          <button onClick={previousPageHandler}>back</button>
        )}
      </div>
      <div>
        {results.length < 19 ? (
          <span></span>
        ) : (
          <button onClick={forwadPageHandler}>forward</button>
        )}
      </div>
    </div>
  );
};
export default SearchResults;
