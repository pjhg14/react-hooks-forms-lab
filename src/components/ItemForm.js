import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleItemSubmit(event) {
    event.preventDefault()

    if(name != "") {
      //add newitem to list
      onItemFormSubmit({
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name: name,
        category: category,
        }
      )

      setName("")
    } //else don't
  }

  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
