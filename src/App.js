import React, { useContext } from "react";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { AppContext } from "./context/globalContext";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [state] = useContext(AppContext);

  return (
    <Router>
      <div>
        {state.isLogin && <Navbar />}
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
