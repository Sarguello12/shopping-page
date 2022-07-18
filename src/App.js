import "./App.scss";
import React, { useState } from "react";
import { searchFunctionality } from "./Services/SearchFunctionality";
import SearchResults from "./Components/SearchResults";

function App() {
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
