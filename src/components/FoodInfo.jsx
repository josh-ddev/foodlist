export function FoodInfo({ foodObj }) {
  return (
    <div className="py-4">
      <p className="opacity-40  text-red-400">{foodObj.category}</p>
      <p>{foodObj.name}</p>
      <p className="text-red-700 text-md font-bold">
        ${foodObj.price.toFixed(2)}
      </p>
    </div>
  );
}
