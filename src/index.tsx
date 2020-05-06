import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function Home(props: any) {
  return <div>home</div>;
}
function Abount(props: any) {
  return <div>Abount</div>;
}
function User(props: any) {
  return <div>User</div>;
}

ReactDOM.render(
  <Router>
    <>
      <Route path="/" component={Home}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/abount" component={Abount}></Route>
    </>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
