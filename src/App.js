import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieForm from "./components/movieForm";
import Customers from "./components/customer";
import NotFound from "./components/notFound";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path={"/movies"} component={Movies}></Route>
            <Route exact path={"/login"} component={Login}></Route>

            <Route exact path={"/customers"} component={Customers}></Route>
            <Route exact path={"/movie-form"} component={MovieForm}></Route>
            <Route exact path={"/not-found"} component={NotFound}></Route>
            <Redirect to={"/not-found"} />
          </Switch>
        </main>
      </>
    );
  }
}
export default App;
