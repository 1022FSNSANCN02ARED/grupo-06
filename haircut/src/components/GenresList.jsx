import React, { Component } from "react";
import GenreItem from "./GenreItem.jsx";
import BigCard from "./BigCard.jsx";

class GenresList extends Component {
    constructor(props) {
        super(props);

        //Especifico de GenresList
        this.state = {
            genres: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/category")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    genres: result.data,
                });
            });
    }

    render() {
        return (
            <BigCard title="Categories in Data Base">
                <div className="row">
                    {this.state.genres.length === 0
                        ? "Cargando..."
                        : this.state.genres.map((genre) => {
                              return (
                                  <GenreItem key={genre.id} name={genre.name} />
                              );
                          })}
                </div>
            </BigCard>
        );
    }
}

export default GenresList;
