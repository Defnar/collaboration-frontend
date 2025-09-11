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
    </div>
  );
}
