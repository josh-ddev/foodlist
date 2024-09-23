export function AddToCart({
  handleCartIncrement,
  handleCardDecrement,
  quantity,
}) {
  return (
    <div className="bg-red-600 rounded-full flex gap-6  px-4 py-2 ">
      <img
        src="./assets/images/icon-decrement-quantity.svg"
        alt="decrement"
        className="rounded-full border-2  p-2 border-white"
        onClick={handleCardDecrement}
      />
      <span className="text-white">{quantity}</span>
      <img
        src="./assets/images/icon-increment-quantity.svg"
        alt="increment"
        className="rounded-full border-2 p-2 border-white"
        onClick={handleCartIncrement}
      ></img>
    </div>
  );
}
