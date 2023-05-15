import React, { Component } from "react";

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        this.fetchAllMovies();
    }

    fetchAllMovies() {
        fetch("http://localhost:3000/api/product")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    movies: result.data,
                });
            });
    }

    deleteMovie(movie) {
        fetch("http://localhost:3001/api/movies/delete/" + movie.id, {
            method: "delete",
        }).then(() => {
            this.fetchAllMovies();
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Id de Marca</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map((movie) => {
                        return (
                            <tr key={movie.id}>
                                <th>{movie.id}</th>
                                <th>{movie.name}</th>
                                <th>{movie.brand_id}</th>
                                <th>{movie.description}</th>
                                <th>
                                    <button
                                        className="btn text-danger"
                                        onClick={() => this.deleteMovie(movie)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default MoviesList;
