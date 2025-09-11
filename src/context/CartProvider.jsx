import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [cart, setCart] = useState(user?.cart || []);

  useEffect(() => {
    setCart(user.cart);
  }, [user])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Optional: sync cart to user object
  useState(() => {
    if (user) setUser({ ...user, cart });
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
