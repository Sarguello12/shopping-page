import "./App.css";
import React, { useState } from "react";
import { searchFunctionality } from "./Services/SearchFunctionality";
import SearchResults from "./Components/SearchResults";

function App() {
  // searchFunctionality("jeans", 1);
  // const [search, setSearch] = useState("");

  // const searchChangeHandler = (event) => {
  //   setSearch(event.target.value);
  // };

  // const searchHandler = (event) => {
  //   event.preventDefault();
  //   searchFunctionality(search, 1);
  // };

  return (
    <div className="App">
      {/* <form onSubmit={searchHandler}>
        <label>Search:</label>
        <input onKeyUp={searchChangeHandler}></input>
        <button>Go</button>
      </form> */}
      <SearchResults />
    </div>
  );
}

export default App;
