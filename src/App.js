import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Hotel from "./components/Hotel/Hotel";
import Header from "./components/Header/Header";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>  
      <Header/>     
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/login">
            <Login />
          </Route>  
          <PrivateRoute path="/hotel">
            <Hotel />
          </PrivateRoute>                 
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      
      </Router>
    </UserContext.Provider>
  );
}

export default App;
