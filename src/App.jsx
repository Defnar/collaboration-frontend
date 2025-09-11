import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';

export default function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100'>
        <Navbar />
        <div className='p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
