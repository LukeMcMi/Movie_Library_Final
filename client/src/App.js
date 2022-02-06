import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./utils/auth";

import LandingPage from "./pages/LandingPage/LandingPage.js.js";
import LoginPage from "./pages/LoginPage/LoginPage.js.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.js.js";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import FavoritePage from "./pages/FavoritePage/FavoritePage"


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 72px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;