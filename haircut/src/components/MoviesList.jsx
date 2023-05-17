import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                console.log("[MOVIES LIST] Cambió el estado");
            });
    }

    deleteMovie(movie) {
        const url = "http://localhost:3000/products/" + movie.id + "/edit/";
        window.open(url, "_blank");
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Descripción</th>
                        <th>Descuento</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map((movie) => {
                        return (
                            <tr key={movie.id}>
                                <th>{movie.id}</th>
                                <th>{movie.name}</th>
                                <th>{movie.price}</th>
                                <th>{movie.brand}</th>
                                <th>{movie.category}</th>
                                <th>{movie.description}</th>
                                <th>{movie.discount}</th>
                                <th>{movie.image}</th>
                                <th>
                                    <Link to={`/movies/${movie.id}`}>
                                        <button className="btn text-success">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </Link>
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
