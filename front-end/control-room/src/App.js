import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./config/GlobalStyle";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Layout } from "./components/shared/Layout";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Layout>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          <GlobalStyle />
        </Layout>
      </Router>
    </>
  );
}

export default App;
