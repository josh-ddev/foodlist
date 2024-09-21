import Food from "./Food";

export function FoodList({ items, setCartItems, cartItems }) {
  return (
    <div>
      {items.map((food) => (
        <Food
          foodObj={food}
          key={food.name}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}
