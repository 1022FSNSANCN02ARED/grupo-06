import "./App.css";
import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <MainContent />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
