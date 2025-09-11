import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold">{product.title}</h2>
      <img alt="product image" src={product.image}/>
      <p>${product.price}</p>
      <button
        onClick={() => removeFromCart(product.id)}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Remove From Cart
      </button>
    </div>
  );
};

export default CartCard;