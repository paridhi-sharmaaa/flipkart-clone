import { useCart } from '../context/CartContext';

const CartItem = ({ item, onRemove }) => {
  const { updateQuantity } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-20 h-20 object-contain rounded"
        />
        <div>
          <h3 className="font-medium dark:text-white">{item.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">₹{item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md dark:border-gray-600">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 text-lg dark:text-white"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="px-3 dark:text-white">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 text-lg dark:text-white"
          >
            +
          </button>
        </div>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;