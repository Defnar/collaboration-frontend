import { useContext } from "react";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const {cart} = useContext(CartContext);

  return (
    <>
    {cart.length===0 && <p>No items in cart</p>}
    {cart.length >0 && cart.map(product => <CartCard key={product.id} product={product}/>)}
    </>
  );
};

export default CartPage;