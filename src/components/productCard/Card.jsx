import React, { useState } from "react";
import "./Card.css";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Card({ name, price, image, description, id }) {
  const [liked, setLiked] = useState(true);
  function handleClick() {
    setLiked(!liked);
  }
  return (
    <IconContext.Provider
      value={{ style: { fontSize: "22px", color: "#4C4C6D" } }}
    >
      <div className="card">
        <img className="card-image" src={image} alt="Logo" />
        <div className="card-bottom">
          <div className="card-header">
            <h4 className="card-title">{name}</h4>
            <p>Price ₹ : {price}</p>
          </div>
          <div className="cart">
            <MdAddShoppingCart />
          </div>
        </div>
        <div className="card-like-bar">
          {liked ? (
            <BsHeart onClick={handleClick} />
          ) : (
            <BsFillHeartFill onClick={handleClick} />
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
}
