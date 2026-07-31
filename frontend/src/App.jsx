import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all 8 Pages
import Auth from './pages/Auth';
import Home from './pages/Home';
import Collection from './pages/Collection';
import AIPersonalStylist from './pages/AIPersonalStylist';
import ProductDetails from './pages/ProductDetails';
import VirtualWardrobe from './pages/VirtualWardrobe';
import MyAccount from './pages/MyAccount';
import Checkout from './pages/Checkout';
import FitCheck from './pages/FitCheck';
import NotFound from './pages/NotFound';
import AdminDashbord from './pages/admin/AdminDashbord';
import AdminLogin from './pages/admin/AdminLogin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/stylist" element={<AIPersonalStylist />} />
        <Route path="/fitcheck" element={<FitCheck />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wardrobe" element={<VirtualWardrobe />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}