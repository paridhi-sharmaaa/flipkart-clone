import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const CartPage = () => {
  const { user } = useAuth();
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">My Cart ({cart.length})</h1>
      
      {cart.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-medium mb-2 dark:text-white">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You have no items in your cart. Start shopping to add items!
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-200"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {cart.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium mb-4 dark:text-white">Price Details</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Price ({cart.length} items)</span>
                  <span className="font-medium dark:text-white">₹{calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Delivery Charges</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between">
                <span className="font-bold text-lg dark:text-white">Total Amount</span>
                <span className="font-bold text-lg dark:text-white">₹{calculateTotal().toFixed(2)}</span>
              </div>
              
              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200"
              >
                Place Order
              </button>
            </div>
            
            <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm font-medium">Safe and Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;