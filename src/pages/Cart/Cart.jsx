import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/storeContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const navigate = useNavigate();

  const handlePromoSubmit = () => {
    if (!promoCode) {
      setPromoError("Please enter a promo code");
      return;
    }
    // Add your promo code validation logic here
    setPromoError("Invalid promo code");
  };

  return (
    <div className="cart-container">
      {Object.keys(cartItems).length === 0 ? (
        <div className="empty-cart">
          <AiOutlineShoppingCart size={100} />
          <h2>Your Cart is Empty</h2>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <span>{Object.keys(cartItems).length} Items</span>
          </div>

          <div className="cart-items">
            <div className="cart-items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id} className="cart-item">
                    <div className="item-info">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <AiOutlineClose />
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="price">${item.price.toFixed(2)}</span>
                    <span className="quantity">{cartItems[item._id]}</span>
                    <span className="total">
                      ${(item.price * cartItems[item._id]).toFixed(2)}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-summary">
            <div className="promo-section">
              <div className="promo-input">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    setPromoError("");
                  }}
                  placeholder="Enter promo code"
                />
                <button onClick={handlePromoSubmit}>Apply</button>
              </div>
              {promoError && <p className="promo-error">{promoError}</p>}
            </div>

            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>${getTotalCartAmount().toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Delivery Fee</span>
                <span>${getTotalCartAmount() === 0 ? 0 : 2}</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>
                  $
                  {(
                    getTotalCartAmount() + (getTotalCartAmount() ? 2 : 0)
                  ).toFixed(2)}
                </span>
              </div>
              <button
                className="checkout-btn"
                onClick={() => navigate("/order")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
