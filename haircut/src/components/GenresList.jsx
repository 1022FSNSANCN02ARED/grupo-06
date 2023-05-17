import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        fetch("http://localhost:3000/api/user/")
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
            <BigCard title="Users in Data Base">
                <div className="column">
                    {this.state.genres.length === 0
                        ? "Cargando..."
                        : this.state.genres.map((genre) => {
                              return (
                                  <Link to={`/user/${genre.userName}`}>
                                      <GenreItem
                                          key={genre.id}
                                          name={genre.userName}
                                      />
                                  </Link>
                              );
                          })}
                </div>
            </BigCard>
        );
    }
}

export default GenresList;
