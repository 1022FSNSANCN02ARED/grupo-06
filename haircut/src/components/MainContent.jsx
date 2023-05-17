import React from "react";
import Stats from "./Stats.jsx";
import LastMovie from "./LastMovie.jsx";
import GenresList from "./GenresList.jsx";
import MoviesList from "./MoviesList.jsx";

import { Route, Switch } from "react-router-dom";
import Page404 from "../pages/page404.jsx";
import MovieDetail from "./MovieDetail.jsx";
import MoviesSearch from "./MoviesSearch.jsx";

function MainContent() {
    return (
        <div className="container-fluid">
            <Switch>
                <Route path="/" exact>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
                    <Stats />
                    <LastMovie />
                </Route>
                <Route path="/genres">
                    <GenresList />
                </Route>
                <Route path="/movies" exact={true}>
                    <MoviesList />
                </Route>
                <Route path="/movies/search" component={MoviesSearch} />
                <Route path="/movies/:id" component={MovieDetail} />
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    );
}

export default MainContent;
