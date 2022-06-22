import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

//jsx rules
// Always return a single element, ie use self closing tags if need be
// In react you cant use inline attributes the way it is used in html, onclick becomes onClick and class becomes className
//close every element

ReactDOM.render(<App />, document.getElementById("root"));

//React tools
