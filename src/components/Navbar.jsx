import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-purple-400 via-pink-300 to-blue-300 p-4 shadow-md flex justify-between items-center'>
      <h1 className='text-xl font-bold text-white'>ShopEase</h1>
      <div className='space-x-4'>
        <Link to='/' className='text-white hover:underline'>Home</Link>
        <Link to='/login' className='text-white hover:underline'>Login</Link>
        <Link to='/register' className='text-white hover:underline'>Register</Link>
        <Link to='/cart' className='text-white hover:underline'>Cart</Link>
      </div>
    </nav>
  );
}