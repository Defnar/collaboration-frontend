import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-anime mb-6 text-barbiePink">Welcome to Anime Barbie Shop!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}