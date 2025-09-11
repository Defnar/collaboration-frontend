import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transform transition duration-300">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-anime mt-2 text-barbiePink">{product.title}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <button
        className="mt-2 w-full bg-barbiePink text-white p-2 rounded hover:bg-softPurple transition"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}