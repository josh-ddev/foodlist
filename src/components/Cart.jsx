export default function Cart({ cartItems }) {
  const totalItems = cartItems
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  return (
    <div className="bg-white rounded-md pb-8 mb-8 ">
      <div>
        <h2 className="text-red-700 text-3xl mt-4 ml-4 font-bold">
          Your Cart({totalItems})
        </h2>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="empty-cart"
          className="mx-auto"
        ></img>
        <p className="text-sm text-customBrown mx-8 opacity-60 font-bold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}
