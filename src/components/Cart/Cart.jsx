import "./CartStyle.css"
import data from "../../data"

import CartItem from "./CartItem";

function Cart(){
    return(
        <div className="cart">
            <div className="nav">
            </div>
            <main>
                <h2>Shopping Cart</h2>
                <div className="cart-product-container">
                    <div className="table-header">
                        <div className="product">Product</div>
                        <div className="size">Size</div>
                        <div className="amount">Amount</div>
                        <div className="price">Price</div>
                        <div className="remove"></div>
                    </div>
                    <CartItem productImage={data[0].main_img} productName={data[0].name} size="XL" price="23" quantity="1" />
                    <CartItem productImage={data[0].main_img} productName={data[0].name} size="XL" price="23" quantity="1" />
                </div>
                <div className="checkout">
                    <span className="total-cost">Total Amount: <span>Rs. 1234</span></span>
                    <span className="checkout-btn">
                        <button>Checkout</button>
                    </span>
                </div>
            </main>
        </div>
    )
}

export default Cart;