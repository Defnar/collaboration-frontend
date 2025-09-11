import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-barbiePink text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-anime">Anime Barbie Shop</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-softPurple transition">Home</Link>
        <Link to="/login" className="hover:text-softPurple transition">Login</Link>
        <Link to="/register" className="hover:text-softPurple transition">Register</Link>
        <Link to="/cart" className="hover:text-softPurple transition">Cart</Link>
      </div>
    </nav>
  );
}