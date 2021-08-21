import "./productPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const ProductPage = ({item}) => {
  return (
    <div className="mainbodycard">
      <div className="left">
        <div className="collectimg">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            alt="img1"
          />
          <img
            src="https://www.thesprucepets.com/thmb/wpN_ZunUaRQAc_WRdAQRxeTbyoc=/4231x2820/filters:fill(auto,1)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
            alt="img2"
          />
          <img
            src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
            alt="img3"
          />
          <img
            src=" https://tvar.org/wp-content/uploads/2018/04/iStock-486330501-copy.jpg"
            alt="img4"
          />
        </div>
        <div className="mainimg">
          <img
            src=" https://tvar.org/wp-content/uploads/2018/04/iStock-486330501-copy.jpg"
            // src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            alt="img4"
          />
        </div>
      </div>
      <div className="right">
        <div className="shippingcontainer">
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon="truck" />
            <text>
              <b>Standard</b>
              <br /> Free within 3-6 business days
            </text>
          </Button>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon="shipping-fast" />
            <text>
              <b>Express</b>
              <br /> $10 within 1-2 business days
            </text>
          </Button>
        </div>
        <div className="prod-id">
          <text>Product ID: 2148</text>
          <h1 className="prod-name">cutie</h1>
          <div className="price">
            <h3>$priceless</h3>
          </div>
        </div>
        <div className="prod-color">
          <h5 className="label">Color:</h5>
          <button style={{ backgroundColor: "red" }}></button>
          <button style={{ backgroundColor: "golden" }}></button>
          <button style={{ backgroundColor: "blue" }}></button>
          <button style={{ backgroundColor: "orange" }}></button>
        </div>
        <div className="prod-size">
          <h5 className="label">Size:</h5>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              Select Size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">XS</Dropdown.Item>
              <Dropdown.Item href="">S</Dropdown.Item>
              <Dropdown.Item href="">M</Dropdown.Item>
              <Dropdown.Item href="">X</Dropdown.Item>
              <Dropdown.Item href="">XL</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="quantity">
          <h5 className="label">Quantity:</h5>
          <Button variant="warning">ADD TO CART </Button>favourite button
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
