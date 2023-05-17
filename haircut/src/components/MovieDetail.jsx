import React, { Component } from "react";
import MovieAbstract from "./MovieAbstract.jsx";

class MovieDetail extends Component {
    constructor(props) {
        super(props);

        const id = props.match.params.id;
        console.log("Match:", props.match);

        this.state = {
            id,
            movie: null,
        };
    }

    componentDidMount() {
        const id = this.state.id;

        fetch(`http://localhost:3000/api/product/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const movie = result.data;
                this.setState({
                    id,
                    movie,
                });
            });
    }

    render() {
        const movie = this.state.movie;
        if (movie && movie.length > 0) {
            const movieData = movie[0];
            return (
                <div className="text-center">
                    <h1>Nombre: {movieData.name} </h1>
                    <p>Categoria: {movieData.category} </p>
                    <p>Marca: {movieData.brand} </p>
                    <p>Precio: ${movieData.price} </p>
                    <p>Descuento: {movieData.discount}% </p>
                    <p>
                        Precio final: $
                        {movieData.price -
                            movieData.price * (movieData.discount / 100)}
                    </p>
                    <MovieAbstract
                        img={movieData.image}
                        title={movieData.name}
                        desc={movieData.description}
                        url={
                            "http://localhost:3000/products/" +
                            movieData.id +
                            "/edit"
                        }
                    />
                </div>
            );
        } else {
            // No tengo movie todavía
            return <p>Cargando...</p>;
        }
    }
}

export default MovieDetail;
