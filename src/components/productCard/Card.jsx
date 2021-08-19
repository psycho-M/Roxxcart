import React, { useState } from "react";
import "./Card.css";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addQuantity, updateTotal } from '../../redux/actions'

export default function Card({ name, price, image, description, id, item }) {
  const [liked, setLiked] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function handleClick() {
    setLiked(!liked);
  }

  function isPresentInCart(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        dispatch(addQuantity(cart[i].id));
        dispatch(updateTotal(item.price));
        return true;
      }
    }
    return false;
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
          <button onClick={() => {
            if(!isPresentInCart(item.id)) {
              dispatch(addProduct({
                ...item,
                quantity: 1,
                currPrice: item.price
              }));
              dispatch(updateTotal(item.price));
            }
            
            console.log(cart);
            
          }} className="add-to-cart">
            <MdAddShoppingCart style={{
              cursor: 'pointer'
            }} />
          </button>
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
