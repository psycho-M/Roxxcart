import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addQuantity,
  subQuantity,
  removeProduct,
  updateTotal,
} from "../../redux/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="table-product">
      <div className="product">
        <img src={item.main_img} />
        <div className="product-name">{item.name}</div>
      </div>
      <div className="size">{item.size[0]}</div>
      <div className="amount">
        <div className="amount-container">
          <button
            onClick={() => {
              dispatch(updateTotal(-item.price));
              dispatch(subQuantity(item.id));
            }}
            style={{ color: "#CECECE" }}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => {
              dispatch(addQuantity(item.id));
              dispatch(updateTotal(item.price));
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="price">Rs. {item.currPrice}</div>
      <button
        onClick={() => {
          dispatch(removeProduct(item.id));
          dispatch(updateTotal(-item.currPrice));
        }}
        className="remove"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
