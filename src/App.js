import "./App.css";
import TitrePrincipal from "./components/Titres/TitrePrincipal";
import Time from "./containers/Time/Time";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import DataGridDemo from "./containers/Time/Datagrid/Datagrid";

class App extends Component {
  state = {
    users: [
      { id: 1, firstName: "John", lastName: "Doe", age: 32, sexe: true },
      { id: 2, name: "Khalid", lastname: "Sookia", age: 27, sexe: false },
      { id: 3, name: "Celia", lastname: "m2i", age: 12, sexe: false },
      { id: 4, name: "Jessica", lastname: "Macron", age: 90, sexe: false },
      { id: 5, name: "Pierre", lastname: "Paul-Jacques", age: 22, sexe: true },
    ],
  };
  render() {
    return (
      <div className="container text-center">
        <TitrePrincipal texte="h1">Ceci est mon titre</TitrePrincipal>
        <div className="row">
          <div className="col-6">{this.props.text}</div>
          <div className="col-6">{this.props.children}</div>
        </div>
        <div className="row">
          <Time />
        </div>
        <div className="row"></div>
        <div className="grid">
          <DataGridDemo />
        </div>
      </div>
    );
  }
}

export default App;
