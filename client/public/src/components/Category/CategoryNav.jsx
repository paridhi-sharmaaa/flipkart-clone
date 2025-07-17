import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Mobiles', icon: '📱', path: '/category/mobiles' },
  { id: 2, name: 'Fashion', icon: '👕', path: '/category/fashion' },
  { id: 3, name: 'Electronics', icon: '💻', path: '/category/electronics' },
  { id: 4, name: 'Home', icon: '🏠', path: '/category/home' },
  { id: 5, name: 'Appliances', icon: '🔌', path: '/category/appliances' },
  { id: 6, name: 'Beauty', icon: '💄', path: '/category/beauty' },
  { id: 7, name: 'Grocery', icon: '🛒', path: '/category/grocery' },
  { id: 8, name: 'Toys', icon: '🧸', path: '/category/toys' },
  { id: 9, name: 'Furniture', icon: '🛋️', path: '/category/furniture' },
  { id: 10, name: 'Sports', icon: '⚽', path: '/category/sports' },
];

const CategoryNav = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm py-3 px-2 overflow-x-auto">
      <div className="flex space-x-8 w-max mx-auto">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="flex flex-col items-center min-w-[60px] group"
          >
            <div className="text-2xl mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {category.icon}
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;