import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.jsx';
import { CartProvider } from '../context/CartContext.jsx';
import Navbar from '../components/Common/Navbar.jsx';
import HomePage from '../components/Home/HomePage.jsx';
import Login from '../components/Auth/Login.jsx';
import Signup from '../components/Auth/Signup.jsx';
import CartPage from '../components/Cart/CartPage.jsx';
import CategoryPage from '../components/Category/CategoryPage.jsx';
import Footer from '../components/Common/Footer.jsx';
import PrivateRoute from '../components/Common/PrivateRoute.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/cart" element={
                  <PrivateRoute>
                    <CartPage />
                  </PrivateRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
    );
}

export default App;