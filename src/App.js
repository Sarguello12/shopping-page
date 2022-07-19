import "./App.scss";
import React from "react";
import SearchResults from "./Components/SearchResults";
import Footer from "./UI/Footer";

function App() {
  return (
    <div className="app">
      <SearchResults />
      <Footer />
    </div>
  );
}

export default App;
