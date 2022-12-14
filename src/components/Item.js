import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const cartsClassName = inCart ? "in-cart" : "";
  const buttonMessage = inCart ? "Remove From Cart" : "Add to Cart";
  const buttonClassName = inCart ? "remove":"add" 
  
  return (
    <li className={cartsClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={() => {setInCart(!inCart)}}>{buttonMessage}</button>
    </li>
  );
}

export default Item;
