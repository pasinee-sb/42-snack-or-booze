import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";

const AddItemForm = ({ onItemAdded }) => {
  const INITIAL_STATE = {
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
    menuType: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique ID based on the item's name
    const id = formData.name.toLowerCase().replace(/ /g, "-"); // Convert to lowercase and replace spaces with underscores

    // Create a new item object with the generated ID
    const newItem = {
      ...formData,
      id: id,
    };
    if (formData.menuType === "food") {
      const res = await SnackOrBoozeApi.addSnacks(newItem);
      console.log(res);
    } else {
      const res = await SnackOrBoozeApi.addDrinks(newItem);
      console.log(res);
    }

    // Notify the parent component that an item has been added
    onItemAdded(newItem);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Add item"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="recipe">Recipe</label>
      <input
        id="recipe"
        type="text"
        name="recipe"
        placeholder="recipe"
        value={formData.recipe}
        onChange={handleChange}
      />
      <label htmlFor="serve">Serve</label>
      <input
        id="serve"
        type="text"
        name="serve"
        placeholder="serve"
        value={formData.serve}
        onChange={handleChange}
      />
      <label htmlFor="menuType">Menu Type</label>
      <select
        id="menuType"
        name="menuType"
        value={formData.menuType}
        onChange={handleChange}
      >
        <option value="drinks">Drinks</option>
        <option value="food">Food</option>
      </select>

      <button>Add Item</button>
    </form>
  );
};

export default AddItemForm;
