import products from '../data/products';

export default function Home() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((p) => (
          <div key={p.id} className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition'>
            <img src={p.image} alt={p.title} className='w-full h-40 object-cover rounded' />
            <h3 className='mt-2 font-semibold'>{p.title}</h3>
            <p className='text-gray-600'>${p.price}</p>
            <p className='text-sm text-purple-600'>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}