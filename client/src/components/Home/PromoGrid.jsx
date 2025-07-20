import { Link } from 'react-router-dom';

const PromoGrid = () => {
  const promoItems = [
    {
      id: 1,
      title: 'Auto Accessories',
      subtitle: 'Up to 60% off',
      image: 'https://rukminim2.flixcart.com/image/200/200/kqfj1jk0/vehicle-cover/3/7/y/universal-xxl-vehicle-cover-for-car-suv-upto-500cm-coverland-original-imag4k8xhvzggz5y.jpeg',
      link: '/category/auto-accessories'
    },
    {
      id: 2,
      title: 'Dry Fruits & Nuts',
      subtitle: 'From ₹99',
      image: 'https://rukminim2.flixcart.com/image/200/200/kqjtd3k0/dry-fruit/5/z/y/100-american-almonds-premium-almonds-badam-giri-100-gm-almond-original-imag4j79yghbqhkz.jpeg',
      link: '/category/dry-fruits'
    },
    {
      id: 3,
      title: 'Cardio Equipment',
      subtitle: 'Top brands',
      image: 'https://rukminim2.flixcart.com/image/200/200/kq18n0w0/exercise-bike/z/x/q/2-0-professional-magnetic-exercise-bike-for-home-20-kg-fly-501-original-imag4fpgk8zghhzh.jpeg',
      link: '/category/fitness'
    },
    {
      id: 4,
      title: 'Gen Young Fashion',
      subtitle: 'Trendy styles',
      image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/ethnic-set/6/3/o/l-na-3-4-sleeve-solid-women-semi-stitched-original-imagm9n9mzfjhzhz.jpeg',
      link: '/category/fashion'
    },
    {
      id: 5,
      title: 'Core Ultra AI PC',
      subtitle: 'Just ₹59990',
      image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/computer/z/z/g/-original-imagt46gjqnf8zph.jpeg',
      link: '/category/laptops'
    },
    {
      id: 6,
      title: 'Home Emergency Light',
      subtitle: '60% off',
      image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/emergency-light/5/q/0/-original-imagqy6gz3bsggju.jpeg',
      link: '/category/home-appliances'
    },
    {
      id: 7,
      title: 'Smart Watches',
      subtitle: 'From ₹1499',
      image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/watch/p/j/z/-original-imagthfkwkq9vqbg.jpeg',
      link: '/category/wearables'
    },
    {
      id: 8,
      title: 'Air Conditioners',
      subtitle: 'Starting ₹22990',
      image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/air-conditioner-new/j/z/o/-original-imagqy6gdrhxpkzp.jpeg',
      link: '/category/air-conditioners'
    },
    {
      id: 9,
      title: 'Grocery Essentials',
      subtitle: 'Daily needs',
      image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/grocery-certification/z/p/q/1-kismis-rice-bran-oil-pouch-1-ltr-kismis-original-imagp8zqzmhxggzq.jpeg',
      link: '/category/grocery'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md my-6">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Best of Electronics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {promoItems.map((item) => (
          <Link 
            to={item.link} 
            key={item.id}
            className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 h-full flex flex-col items-center">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-24 h-24 object-contain mb-2"
              />
              <h3 className="text-sm font-medium text-center text-gray-800 dark:text-white group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PromoGrid;