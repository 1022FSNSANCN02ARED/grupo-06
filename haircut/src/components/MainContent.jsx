import React from "react";
import Stats from "./Stats.jsx";
import LastMovie from "./LastMovie.jsx";
import GenresList from "./GenresList.jsx";
import MoviesList from "./MoviesList.jsx";

function MainContent() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <Stats />
            <div className="row">
                <LastMovie />
                <GenresList />
                <MoviesList />
            </div>
        </div>
    );
}

export default MainContent;
