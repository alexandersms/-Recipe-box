import React, { Component } from "react";
// CSS
import "./App.css";
import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";
import Card from "./components/Card";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };

  chargerExemple = () => {
    this.setState({ recettes });
  };

  render() {
    let { pseudo } = this.state;
    const cards = Object.keys(this.state.recettes).map(key => (
      <Card key={key} details={this.state.recettes[key]}></Card>
    ));

    return (
      <div className="box">
        <Header pseudo={pseudo}></Header>
        <div className="cards">{cards}</div>
        <Admin chargerExemple={this.chargerExemple}></Admin>
      </div>
    );
  }
}

export default App;
