import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="p-6">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.qty}</span>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${getCartTotal()}</p>
      <button onClick={clearCart} className="bg-red-500 text-white px-3 py-1 mt-2 rounded">Clear Cart</button>
    </div>
  );
};

export default CartPage;