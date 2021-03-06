import React, { useEffect, useState } from "react";
import { searchFunctionality } from "../Services/SearchFunctionality";
import ResultsCards from "./ResultsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchResults = () => {
  // results state will contain array of objects fetched from API
  const [results, setResults] = useState([]);
  // search state will contain string user inputs in the search bar
  const [search, setSearch] = useState("");
  // page state will contain number that indicates which page the user is on
  const [page, setPage] = useState(1);

  const [fetchingData, setfetchingData] = useState(false);

  //========== Search Logic ==========
  // function will update search to contain value entered in search bar
  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  // executes the initial fetch request to populate data based on the users input on submit
  // using the search state that was previously set
  const searchHandler = async (event) => {
    event.preventDefault();
    // let response = await searchFunctionality(search, page);
    // setResults(response);
    setfetchingData(true);
  };

  //========== Pagination Logic ==========
  // useEffect hook handles the pagination logic
  // whenever the page is changed a new fetch request is called to repopulate the data
  useEffect(() => {
    const getData = async () => {
      let data = await searchFunctionality(search, page);
      setResults(data);
      setfetchingData(false);
    };
    getData();
  }, [fetchingData]);

  // updates page state to increment the page by one on button click
  const nextPageHandler = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setPage(page + 1);
    setfetchingData(true);
  };

  // updates page state to decrease the page by one on button click
  const previousPageHandler = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setPage(page - 1);
    setfetchingData(true);
  };

  return (
    <div>
      <div className="searchbar">
        <h1>Shopping</h1>
        <form onSubmit={searchHandler}>
          <input
            onChange={searchChangeHandler}
            placeholder="search for item, color..."
          ></input>
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} type="submit" />
          </button>
        </form>
      </div>
      <div className="suggestions-container">
        <h4>Jeans</h4>
        <h4>Tops</h4>
        <h4>Dresses</h4>
        <h4>Swimwear</h4>
        <h4>Accessories</h4>
      </div>

      <div className="results-container">
        {/* creates a new array of objects and passes them into the ResultsCard component via props */}
        {results.map((result, index) => {
          return <ResultsCards key={index} {...result}></ResultsCards>;
        })}
      </div>
      <div className="pagination-buttons">
        <div>
          {/* if user is on the first page button will be hidden */}
          {page === 1 ? (
            <span></span>
          ) : (
            <button onClick={previousPageHandler}>Previous</button>
          )}
        </div>
        <div>
          {/* if user is on the last page (results are less than the 20 which are displayed on each page) button will be hidden */}
          {results.length < 19 ? (
            <span></span>
          ) : (
            <button onClick={nextPageHandler}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
