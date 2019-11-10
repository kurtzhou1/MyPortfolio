import React from 'react';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from './Routes';

// User can use the onMatchedRoutes callback to modify breadcrumb
const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
    let matchedRoutes = matchRoutes(routes, locationPath);

    if (typeof onMatchedRoutes === 'function') {
        matchedRoutes = onMatchedRoutes(matchedRoutes);
    }

    return (

        <nav>
            <ol className="breadcrumb">
                {matchedRoutes.map((matchRoute, i) => {
                    const { path, breadcrumbName } = matchRoute.route;
                    const isActive = path !== locationPath;
                    return isActive ? (
                        <li key={i} className="breadcrumb-item">
                            <Link to={path}>{breadcrumbName} </Link>
                        </li>
                    ) : (
                            <li key={i} className="breadcrumb-item active">
                                {breadcrumbName}
                            </li>
                        )
                })}
            </ol>
        </nav>


    );
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/home">
                <img src="https://www.liontravel.com/favicon.ico" alt="react-router-breadcrumb" width="30" height="30" />
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">
                            Home
                    </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            to="/home/portfolio"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Portfolio
              </Link>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <Link className="dropdown-item" to="/home/portfolio/banner">
                                Banner
                            </Link>
                            <Link className="dropdown-item" to="/home/portfolio/fztable">
                                Fztable
                            </Link>
                            <Link className="dropdown-item" to="/home/portfolio/calendar">
                                Calendar
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home/contact">
                            Contact US
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Navbar, Breadcrumb };