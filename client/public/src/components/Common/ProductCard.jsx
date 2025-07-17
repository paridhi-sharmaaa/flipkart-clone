import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-contain p-4"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 dark:text-white mb-1 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
            )}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 dark:bg-gray-700 dark:text-white"
            aria-label="Add to cart"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;