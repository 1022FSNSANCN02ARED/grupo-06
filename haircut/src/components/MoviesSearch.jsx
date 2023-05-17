import React, { useState, useRef } from "react";
import MoviesSearchResult from "./MoviesSearchResult.jsx";
import { searchAPI } from "../api/search.js";

function MoviesSearch(props) {
  //Formulario o un input, con un botón
  //Lista de resultados

  const [movies, setMovies] = useState(null);

  const searchInput = useRef();

  async function search() {
    const searchText = searchInput.current.value;
    const foundMovies = searchAPI(searchText);
    setMovies(foundMovies);
  }

  return (
    <>
      <div>
        <input ref={searchInput} type="text" />
        <button onClick={search}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <MoviesSearchResult movies={movies} />
    </>
  );
}

export default MoviesSearch;
