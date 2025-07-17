const HeroSection = () => {
  return (
    <div className="relative bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Shop the Latest Trends</h1>
          <p className="text-xl mb-6">Discover amazing deals on thousands of products</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;