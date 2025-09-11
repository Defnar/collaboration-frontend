
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <div className="mb-8 text-center">
        {user ? (
          <div className="p-6 bg-pink-100 border-2 border-pink-400 rounded-2xl shadow-md inline-block">
            <h2 className="text-3xl font-bold text-pink-700">
              Welcome back, {user.name}!
            </h2>
            <p className="text-gray-700 mt-2">
              Enjoy shopping, we have got new arrivals just for you
            </p>
          </div>
        ) : (
          <div className="p-6 bg-gray-100 border-2 border-gray-300 rounded-2xl shadow-md inline-block">
            <h2 className="text-3xl font-bold text-gray-700">
              Welcome to the Shop!
            </h2>
            <p className="text-gray-500 mt-2">
              Please log in to get personalized offers
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
=======
import ProductCard from "../components/ProductCard";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const { loading, data, error } = useFetch("/products");

  return (
    <div className="p-6">
      <h2 className="text-3xl font-anime mb-6 text-barbiePink">
        Welcome to Anime Barbie Shop!
      </h2>
      {error && <p>Internal server error</p>}
      {loading && <p>data loading-replace with spinner wheel later</p>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
>>>>>>> 5e27f2a8e659d1acfd9b293b8c9510445bbfe9bd
    </div>
  );
}
