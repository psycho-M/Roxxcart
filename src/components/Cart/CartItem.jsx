import React from 'react'


const CartItem = ({productImage, productName, size, price, quantity}) => {
    return (
        <div className="table-product">
            <div className="product">
                <img src={productImage}/>
                <div className="product-name">{productName}</div>
            </div>
            <div className="size">{size}</div>
            <div className="amount">
                <div className="amount-container">
                    <button style={{color: "#CECECE"}}>-</button>
                    <span>{quantity}</span>
                    <button>+</button>
                </div>
            </div>
            <div className="price">Rs. {price}</div>
            <div className="remove">X</div>
        </div>
    )
}

export default CartItem;