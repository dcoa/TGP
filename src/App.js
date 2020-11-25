import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriveteRoute from "./components/priveteRoute";
import SignUp from "./pages/signUp";
import LogIn from "./pages/login";
import Recover from "./pages/recover";
import Home from "./pages/home";
import formUpload from "./pages/form";
import DocumentDetail from './pages/documentDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";




function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/recover" component={Recover} />
          <PriveteRoute exact path="/" route={Home} />
          <PriveteRoute path="/dataTable" route={formUpload} />
          <PriveteRoute path="/documentDetail" route={DocumentDetail} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
