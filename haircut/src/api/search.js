export async function searchAPI(searchText) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=4083683d&s=${searchText}`
  );
  const result = await response.json();
  if (result.Search) {
    return result.Search;
  } else {
    return [];
  }
}
