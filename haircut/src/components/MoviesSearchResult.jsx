function MoviesSearchResult({ movies }) {
  // 1. estoy esperando para hacer una búsqueda; movies = null
  if (!movies) {
    return "Realizá tu búsqueda!";
  }

  // 2. se realizó la búsqueda y tengo resultados; movies = [ con elementos ]
  if (movies.length === 0) {
    return "No se encontraron resultados";
  }

  // 3. se realizó la búsqueda y no tengo resultados; movies = []
  return (
    <ul className="d-flex flex-wrap">
      {movies.map((movie) => {
        return (
          <li key={movie.imdbID} className="card" style={{ width: "18rem" }}>
            <img
              src={movie.Poster}
              alt={`Poster de ${movie.Title}`}
              className="card-img-top"
            />
            <div className="card-body">
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesSearchResult;
