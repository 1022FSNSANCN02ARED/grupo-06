import React from "react";

import logoDH from "../images/logo-letra-negro.svg";

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* <!-- Sidebar - Brand --> */}
            <Link
                to="/"
                className="sidebar-brand d-flex align-items-center justify-content-center"
            >
                <div className="sidebar-brand-icon mt-3 mx-3">
                    <img className="w-50" src={logoDH} alt="Digital House" />
                </div>
            </Link>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />
            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - HairCut</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />
            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>
            {/* <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/genres">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Users List</span>
                </Link>
            </li>
            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/movies">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Products List</span>
                </Link>
            </li>
            {/* <!-- Nav Item - Tables --> */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/movies/search">
                    <i className="fas fa-fw fa-search"></i>
                    <span>Movies Search</span>
                </Link>
            </li> */}
            {/* <!-- Nav Item - Tables --> */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/actors">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Actors</span>
                </Link>
            </li> */}

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default Sidebar;
