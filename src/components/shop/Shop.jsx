import React, { useState } from "react";
import data from "../../data.js";
import Card from "../productCard/Card";
import "./Shop.css";
import Filter from "../filter/Filter";

export default function Shop() {
  const mainData = data.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      price={item.price}
      image={item.main_img}
      description={item.description}
      id={item.id}
      item={item}
    />
  ));
  return (
    <div className="shop">
      <Filter />

      <div className="shop-content">{mainData}</div>
    </div>
  );
}
