// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart, pay, clearCart }) => {
      // Calculate the total price of all items in the cart
      const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

      return (
            <div className="cart-container">
                  <ul className="cart-items">
                        {cartItems.map((item) => (
                              <li key={item.id} className="cart-item">
                                    <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                          <h3>{item.title}</h3>
                                          <hr />
                                          <p>${item.price}</p>

                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                          Remove
                                    </button>

                              </li>

                        ))}
                  </ul>
                  <div className="cart-summary">
                        <p className="total-price">

                              <strong>Total:</strong> ${totalPrice.toFixed(2)}
                              0
           ///             </p>
                        <button className="pay-btn" onClick={clearCart}>
                              Pay
                        </button>
                  </div>
            </div>
      );
};

export default Cart;
