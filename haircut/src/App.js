import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Sidebar from "./components/Sidebar.jsx";
import GenresList from "./components/GenresList.jsx";
import UserDetail from "./components/userDetail.jsx";
import MoviesList from "./components/MoviesList.jsx";
import MovieDetail from "./components/MovieDetail.jsx";

function App() {
    return (
        <Router>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={MainContent} />
                            <Route
                                exact
                                path="/genres"
                                component={GenresList}
                            />
                            <Route
                                exact
                                path="/user/:userName"
                                component={UserDetail}
                            />
                            <Route
                                exact
                                path="/movies"
                                component={MoviesList}
                            />
                            <Route
                                exact
                                path="/movies/:id"
                                component={MovieDetail}
                            />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
