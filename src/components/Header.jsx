export default function Header({ cartItems }) {
  const totalItems = cartItems
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-extrabold my-6 text-red-800 ">Desserts</h1>
      <p className="text-base">{totalItems}</p>
    </div>
  );
}
