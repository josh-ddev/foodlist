import React from "react";
// import { AddToCart } from "./AddToCart";
import { FoodInfo } from "./FoodInfo";
import { AddToCart } from "./AddToCart";

function Food({ foodObj, cartItems, setCartItems }) {
  // get the quantity of the item in the cart
  function getCartQuantity(id) {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  }

  // get the item from the cart
  function getCartItem(id) {
    const item = cartItems.find((item) => item.id === id);

    // if the item is not in the cart, add it
    if (!item) {
      const newItem = {
        id: id,
        quantity: 1,
      };

      setCartItems([...cartItems, newItem]);
      return;
    }
    // if the item is in the cart, increment the quantity
    if (item.quantity === 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  // increment the quantity of the item in the cart
  const handleCartIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    getCartQuantity(id);
  };

  // decrement the quantity of the item in the cart
  const handleCardDecrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <>
      <li className="list-none relative">
        <img
          src={foodObj.image.mobile}
          alt={foodObj.name}
          className="rounded-md"
        ></img>
        <div className="absolute -bottom-4 left-20">
          {getCartQuantity(foodObj.id) > 0 ? (
            <AddToCart
              handleCardDecrement={() => handleCardDecrement(foodObj.id)}
              handleCartIncrement={() => handleCartIncrement(foodObj.id)}
              quantity={getCartQuantity(foodObj.id)}
            />
          ) : (
            <button
              className="bg-white border-red-200 border-2 rounded-full flex px-4 py-1"
              onClick={() => getCartItem(foodObj.id)}
            >
              <span>
                <img
                  src="./assets/images/icon-add-to-cart.svg"
                  alt="Cart-img"
                ></img>
              </span>
              <span> Add to Cart</span>
            </button>
          )}
        </div>
      </li>
      <FoodInfo foodObj={foodObj} />
    </>
  );
}

export default Food;
