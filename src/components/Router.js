import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Navbar } from './Components';
import routes from './Routes';
import { Route } from 'react-router-dom';
import { Home, Portfolio, Contact } from './RouterPage'


class Router extends Component {

    render() {
        return (
            <div className='container'>
                <Navbar />

                {/* use renderRoutes method here*/}
                {renderRoutes(routes)}

                {/* {routes.map((route, i) => {
                    const { path, exact, routess } = route;
                    // 接著把在 routes 設定檔中寫好的 path, exact 透過 props 傳進去 <Route path={path} exact={exact} /> 。
                    return (     
                        <Route
                            key={i}
                            path={path}
                            exact={exact}
                            render={(routeProps) => (
                                <route.component routes={routess} {...routeProps} />
                                // 對於有使用到嵌套式路由的頁面，為了要把嵌套在內的 routes 傳到該頁面內，我們不能直接寫 <Route component={PageComponent} />
                                // 因為這種寫法無法把資料透過 props 傳到頁面內。因此需要使用 React-Router 中另外提供的 render 屬性。
                                // 在 render 屬性中需要代入一個函式，並回傳要渲染的頁面，例如， render={() => <PageComponent />} ，這種寫法可以把資料透過 props 傳到某一 Page 當中。
                                // 如果 routes 裡面還有 routes 表示它是嵌套式路由（nesting routes），一層路由裡還有其他路由，
                                // 這時候要把它當成該頁面的組件傳進去，所以會有 render={() => <PageComponent routes={routes} />} 的寫法。
                                // 在 render 屬性後面接的這個函式中，可以接收一個參數，我們把這個參數取名為 routeProps ，routeProps 會傳回原本在 <Route /> 中可以拿到的 match, location, history 等屬性。
                                // 接著透過 {...routeProps} 可以在把這些屬性注回到 Page 當中。寫起來會是這樣， render={(routeProps) => <PageComponent routes={routes} {...routeProps}/>} 。
                                // 最後， <route.component /> 可以動態指定要渲染的 Page 為何。
                            )}
                        />
                    );
                })} */}

                {/* <Route path="/home" exact component={Home} />
                <Route path="/home/portfolio" component={Portfolio} />
                <Route path="/home/contact" component={Contact} /> */}
            </div >
        );
    }
}

export default Router;

//Router = App.js
//RouterPage = Pages.js
//index.js = index.js
//Components.js = Components.js