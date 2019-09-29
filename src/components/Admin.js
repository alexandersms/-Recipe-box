import React, { Component } from "react";
import AddRecette from "./AddRecette";
import AdminForm from "./AdminForm";

class Admin extends Component {
  render() {
    const { recettes, addRecette, editRecette, chargerExemple } = this.props;
    return (
      <div className="cards">
        <AddRecette addRecette={addRecette} />
        {Object.keys(recettes).map(key => (
          <AdminForm
            key={key}
            id={key}
            editRecette={editRecette}
            recettes={recettes}
          />
        ))}
        <footer>
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>
    );
  }
}

export default Admin;
