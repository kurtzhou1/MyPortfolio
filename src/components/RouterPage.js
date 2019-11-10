import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from './Routes';
import { Nav, ElectronicsNav, Breadcrumb } from './Components';
import { Switch, Route } from 'react-router-dom';

const Home = ({ location }) => {
    return (
        <div>
            <h1 className="py-3">Home</h1>
            <Breadcrumb locationPath={location.pathname} />
        </div>
    );
}
const Portfolio = ({ route, location }) => {
    // Customize breadcrumb through modifying matchRoutes array
    // matchedRoutes = [
    //     {
    //         route: {
    //             path: '/home',
    //             breadcrumbName: 'Home'
    //         }
    //     },
    //     ...matchedRoutes
    // ];

    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/home',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };

    return (
        <div>
            <h1 className="py-3">Portfolio</h1>

            {/* Pass onMatchedRoutes function as props here */}
            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />

            {/* move to component */}
            {renderRoutes(route.routes)}
        </div>
    );
}
// {/* Breadcrumb */}
// <nav>
//     <ol className="breadcrumb">
//         {matchedRoutes.map((matchRoute, i) => {
//             const { path, breadcrumbName } = matchRoute.route;
//             // check whether the the path is the Page path user currently at
//             const isActive = path !== location.pathname;
//             // if the Page path is user currently at, then do not show <Link />
//             return isActive ? (
//                 <li key={i} className="breadcrumb-item">
//                     <Link to={path}>{breadcrumbName} </Link>
//                 </li>
//             ) : (
//                     <li key={i} className="breadcrumb-item active">
//                         {breadcrumbName}
//                     </li>
//                 )
//         })}
//     </ol>
// </nav>
// {renderRoutes(route.routes)}

{/* <Switch> */ }
{/* Refactor for using routes config */ }
{/* {routes.map((route, i) => {
                    const { path, exact, routess } = route;
                    return (
                        <Route
                            key={i}
                            path={path}
                            exact={exact}
                            render={(routeProps) => (
                                <route.component routes={routess} {...routeProps} />
                            )}
                        />
                    );
                })} */}

{/* <Route path="/home/portfolio/banner" component={Banner} />
                <Route path="/home/portfolio/fztable" component={Fztable} />
                <Route path="/home/portfolio/calendar" component={Calendar} /> */}
{/* </Switch> */ }


const Contact = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
            {
                route: {
                    path: '/home',
                    breadcrumbName: 'Home'
                }
            },
            ...matchedRoutes
        ];
    };
    return (
        <div>
            <h1 className="py-3">Contact</h1>
            <Breadcrumb
                locationPath={location.pathname}
                onMatchedRoutes={onMatchedRoutes}
            />
        </div>
    )
}

const Banner = (props) => {
    console.log('props', props)
    return <h3>Banner</h3>
}

const Fztable = () => {
    return <h3>Fztable</h3>
}

const Calendar = () => {
    return <h3>Calendar</h3>
}

export { Home, Portfolio, Contact, Banner, Fztable, Calendar };