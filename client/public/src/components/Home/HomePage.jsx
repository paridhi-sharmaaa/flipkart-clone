import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import PromoGrid from '../PromoGrid/PromoGrid';
import CategoryNav from '../Category/CategoryNav';
import ProductCard from '../Common/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch products
    const fetchProducts = async () => {
      try {
        // In a real app, you would fetch from your backend API
        const dummyProducts = [
          {
            id: 1,
            name: 'iPhone 13',
            price: 69999,
            originalPrice: 79900,
            discount: 12,
            image: 'https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg',
            rating: 4.7,
            reviews: 1245,
          },
          {
            id: 2,
            name: 'Samsung Galaxy S21',
            price: 49999,
            originalPrice: 69999,
            discount: 28,
            image: 'https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/samsung-galaxy-s21-5g-sm-g991bzvgins-samsung-original-imafwgj8ysgqaqyy.jpeg',
            rating: 4.5,
            reviews: 876,
          },
          {
            id: 3,
            name: 'OnePlus 9 Pro',
            price: 54999,
            originalPrice: 64999,
            discount: 15,
            image: 'https://rukminim2.flixcart.com/image/416/416/ko1smfk0/mobile/7/g/d/9-pro-le2121-oneplus-original-imag2hg7bftbnz8y.jpeg',
            rating: 4.6,
            reviews: 932,
          },
          {
            id: 4,
            name: 'Mi 11X',
            price: 29999,
            originalPrice: 31999,
            discount: 6,
            image: 'https://rukminim2.flixcart.com/image/416/416/kqse07k0/mobile/g/7/d/mi-11x-5g-mzb08y8in-redmi-original-imag4q6zhhzmjghf.jpeg',
            rating: 4.3,
            reviews: 542,
          },
        ];
        
        setTimeout(() => {
          setProducts(dummyProducts);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <HeroSection />
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-6">
        <PromoGrid />
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Deals of the Day</h2>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded"></div>
                  <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-4 rounded"></div>
                  <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;