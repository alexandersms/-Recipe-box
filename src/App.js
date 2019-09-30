import React, { Component } from "react";
// CSS
import "./App.css";
import Header from "./components/Header";
import recettes from "./recettes";
import Admin from "./components/Admin";
import Card from "./components/Card";

// Firebase
import base from "./base";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: "recettes"
    });
  }

  //Quand il se ferme
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addRecette = recette => {
    const recettes = { ...this.state.recettes };
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({ recettes });
  };

  editRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes };
    recettes[key] = newRecette;
    this.setState({ recettes });
  };

  deleteRecette = key => {
    const recettes = { ...this.state.recettes };
    recettes[key] = null;
    this.setState({ recettes });
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
        <Admin
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          addRecette={this.addRecette}
          editRecette={this.editRecette}
          deleteRecette={this.deleteRecette}
          chargerExemple={this.chargerExemple}
        />
      </div>
    );
  }
}

export default App;
