import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, removeFromCart, addToCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        <div className="food-item-actions">
          {!cartItems[id] ? (
            <button
              className="add-to-cart"
              onClick={() => addToCart(id)}
              aria-label={`Add ${name} to cart`}
            >
              <img src={assets.add_icon_white} alt="Add" />
            </button>
          ) : (
            <div className="food-item-counter">
              <button
                onClick={() => removeFromCart(id)}
                aria-label={`Remove one ${name}`}
              >
                <img src={assets.remove_icon_red} alt="Remove" />
              </button>
              <p>{cartItems[id]}</p>
              <button
                onClick={() => addToCart(id)}
                aria-label={`Add one ${name}`}
              >
                <img src={assets.add_icon_green} alt="Add" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
