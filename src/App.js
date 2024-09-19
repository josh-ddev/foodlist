import { useState } from 'react';

const initialFoods = [
  {
    image: {
      thumbnail: './assets/images/image-waffle-thumbnail.jpg',
      mobile: './assets/images/image-waffle-mobile.jpg',
      tablet: './assets/images/image-waffle-tablet.jpg',
      desktop: './assets/images/image-waffle-desktop.jpg',
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
      mobile: './assets/images/image-creme-brulee-mobile.jpg',
      tablet: './assets/images/image-creme-brulee-tablet.jpg',
      desktop: './assets/images/image-creme-brulee-desktop.jpg',
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-macaron-thumbnail.jpg',
      mobile: './assets/images/image-macaron-mobile.jpg',
      tablet: './assets/images/image-macaron-tablet.jpg',
      desktop: './assets/images/image-macaron-desktop.jpg',
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
      mobile: './assets/images/image-tiramisu-mobile.jpg',
      tablet: './assets/images/image-tiramisu-tablet.jpg',
      desktop: './assets/images/image-tiramisu-desktop.jpg',
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-baklava-thumbnail.jpg',
      mobile: './assets/images/image-baklava-mobile.jpg',
      tablet: './assets/images/image-baklava-tablet.jpg',
      desktop: './assets/images/image-baklava-desktop.jpg',
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-meringue-thumbnail.jpg',
      mobile: './assets/images/image-meringue-mobile.jpg',
      tablet: './assets/images/image-meringue-tablet.jpg',
      desktop: './assets/images/image-meringue-desktop.jpg',
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-cake-thumbnail.jpg',
      mobile: './assets/images/image-cake-mobile.jpg',
      tablet: './assets/images/image-cake-tablet.jpg',
      desktop: './assets/images/image-cake-desktop.jpg',
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-brownie-thumbnail.jpg',
      mobile: './assets/images/image-brownie-mobile.jpg',
      tablet: './assets/images/image-brownie-tablet.jpg',
      desktop: './assets/images/image-brownie-desktop.jpg',
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
    quantity: 0,
  },
  {
    image: {
      thumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
      mobile: './assets/images/image-panna-cotta-mobile.jpg',
      tablet: './assets/images/image-panna-cotta-tablet.jpg',
      desktop: './assets/images/image-panna-cotta-desktop.jpg',
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
    quantity: 0,
  },
];

export default function App() {
  const [items, setItems] = useState(initialFoods);

  return (
    <div className=" bg-red-50 flex flex-col align-middle px-10 min-h-screen ">
      <Header />
      <FoodList items={items} setItems={setItems} />
      <Cart />
    </div>
  );
}

function Header() {
  return (
    <h1 className="text-4xl font-extrabold my-6 text-red-800 ">Desserts</h1>
  );
}

function FoodList({ items }) {
  return (
    <div>
      {items.map(food => (
        <Food foodObj={food} key={food.name} />
      ))}
    </div>
  );
}

function Food({ foodObj, items, setItems }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenQuantity() {
    setIsOpen(true);
  }

  function handleCloseQuantity() {
    console.log('dkfkf');
    setIsOpen(false);
    console.log(isOpen);
  }
  return (
    <>
      <li className="list-none relative">
        <img
          src={foodObj.image.mobile}
          alt={foodObj.name}
          className="rounded-md"
        ></img>
        <button
          className="absolute -bottom-4 left-20"
          onClick={handleOpenQuantity}
        >
          {isOpen ? (
            <AddToCart onHandleCloseQuantity={handleCloseQuantity} />
          ) : (
            <div className="bg-white border-red-200 border-2 rounded-full flex px-4 py-1">
              <span>
                <img
                  src="./assets/images/icon-add-to-cart.svg"
                  alt="Cart-img"
                ></img>
              </span>
              <span> Add to Cart</span>
            </div>
          )}
        </button>
      </li>
      <FoodInfo foodObj={foodObj} />
    </>
  );
}

function FoodInfo({ foodObj }) {
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
function AddToCart({ onHandleCloseQuantity }) {
  const [quantity, setQuantity] = useState(1);
  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      console.log('closing modal with quantity:', quantity);
      onHandleCloseQuantity();
    }
  }
  function handleIncrement() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }
  return (
    <div className="bg-red-600 rounded-full flex gap-6  px-4 py-2 ">
      <img
        src="./assets/images/icon-decrement-quantity.svg"
        alt="decrement"
        className="rounded-full border-2  p-2 border-white"
        onClick={handleDecrement}
      />
      <span className="text-white">{quantity}</span>
      <img
        src="./assets/images/icon-increment-quantity.svg"
        alt="increment"
        className="rounded-full border-2 p-2 border-white"
        onClick={handleIncrement}
      ></img>
    </div>
  );
}

function Cart() {
  return (
    <div className="bg-white rounded-md pb-8 mb-8 ">
      <div>
        <h2 className="text-red-700 text-3xl mt-4 ml-4 font-bold">
          Your Cart(0)
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

// function CartItem({ cart }) {
//   return (
//     <div>
//       <li></li>
//     </div>
//   );
// }
