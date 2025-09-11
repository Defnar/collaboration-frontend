import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;