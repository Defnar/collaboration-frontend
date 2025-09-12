import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch("products");

  return (
    <>
      {loading && (
        <div class="flex justify-center">
          <div class=" animate-spin size-20 border-10 border-gray-300 border-t-black rounded-full"></div>
        </div>
      )}
      <div className="p-6">
        <div className="mb-8 text-center">
          {user ? (
            <div className="p-6 bg-pink-100 border-2 border-pink-400 rounded-2xl shadow-md inline-block">
              <h2 className="text-3xl font-bold text-pink-700">
                Welcome back, {user.username}!
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
          {data &&
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}
