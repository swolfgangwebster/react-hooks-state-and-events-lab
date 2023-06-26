import React, { useState } from "react";

function Item({ name, category }) {

  const [carted,setCarted] = useState(false)

  function cc(){
    setCarted(!carted)
  }

  return (
    <li className={carted ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cc} className="add">{carted ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
