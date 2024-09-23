import { useState } from "react";
import initialFoods from "./data/food";
import { FoodList } from "./components/FoodList";
import Cart from "./components/Cart";
import Header from "./components/Header";

export default function App() {
  const [items, setItems] = useState(initialFoods);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className=" bg-red-50 flex flex-col align-middle px-10 min-h-screen ">
      <Header cartItems={cartItems} />
      <FoodList
        items={items}
        setItems={setItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
}
