import React, { useState } from "react";
import Card from "../productCard/Card";
import data from "../../data";
import "./Shop.css";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import Filter from "../filter/Filter";

function Shop() {
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

  console.log(data);
  return (
    <div className="shop">
      <Filter />

      <div className="shop-content">{mainData}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Shop);
