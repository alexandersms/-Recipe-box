import React, { Component } from "react";
import AddRecette from "./AddRecette";

class Admin extends Component {
  render() {
    return (
      <div className="cards">
        <AddRecette addRecette={this.props.addRecette} />

        <footer>
          <button onClick={this.props.chargerExemple}>Remplir</button>
        </footer>
      </div>
    );
  }
}

export default Admin;
