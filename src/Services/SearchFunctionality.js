// function will handle the work of querying the API and generating response JSON, function will take in two parameters (search and page)
// these will be updated with the search query input by the user and the page of results
export const searchFunctionality = (search, page) => {
  return new Promise((resolve) => {
    fetch(
      // search and page will be updated through state variables and then passed into the search url
      `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${search}&resultsFormat=native&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        resolve(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
