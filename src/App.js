import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriveteRoute from "./components/priveteRoute";
import SignUp from "./pages/signUp";
import LogIn from "./pages/login";
import Recover from "./pages/recover";
import MydModalWithGrid from "./components/addTask";
import Home from "./pages/home";
import formUpload from "./pages/form";
import DocumentDetail from './pages/documentDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MydModalWrapperDoc from "./components/modalDoc";
import ModalAddCont from "./components/modalCont"
import ModalExp from "./components/modalExpJud";




function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/recover" component={Recover} />
          <Route path="/addTask" component={MydModalWithGrid} />
          <Route path="/modalDoc" component={MydModalWrapperDoc} />
          <Route path="/modalCont" component={ModalAddCont} />
          <Route path="/modalExpJud" component={ModalExp} />
          <PriveteRoute path="/home" route={Home} />
          <PriveteRoute path="/dataTable" route={formUpload} />
          <PriveteRoute path="/documentDetail" route={DocumentDetail} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
