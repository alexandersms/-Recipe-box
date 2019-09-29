import React, { Component } from "react";

class AddRecette extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nom, image, ingredients, instructions } = this.state;
    return (
      <div className="card">
        <form className="admin-form ajouter-recette">
          <input
            type="text"
            name="nom"
            placeholder="Nom de la recette"
            value={nom}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Nom de l'image"
            value={image}
            onChange={this.handleChange}
          />
          <textarea
            name="ingredients"
            id=""
            rows="3"
            placeholder="liste des ingrédients"
            value={ingredients}
            onChange={this.handleChange}
          />
          <textarea
            name="instructions"
            id=""
            rows="15"
            placeholder="liste des instructions"
            value={instructions}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddRecette;
