import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodDiningGuide: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // All food items with categories
  const foodItems = [
    {
      id: 'kalamay',
      name: 'Kalamay',
      category: 'Dessert',
      subtitle: 'Traditional Delicacy',
      description: 'Sticky rice cake with coconut milk and brown sugar.',
      price: '₱50-100',
      emoji: '',
      gradient: '',
      flavor: 'Sweet'
    },
    {
      id: 'peanut-kisses',
      name: 'Peanut Kisses',
      category: 'Snack',
      subtitle: 'Famous Pasalubong',
      description: 'Bite-sized peanut and sugar treats from Bohol.',
      price: '₱30-80',
      emoji: '',
      gradient: '',
      flavor: 'Nutty'
    },
    {
      id: 'humba',
      name: 'Humba',
      category: 'Main',
      subtitle: 'Chinese-Filipino',
      description: 'Slow-cooked pork belly in soy sauce and spices.',
      price: '₱150-250',
      emoji: '',
      gradient: '',
      flavor: 'Savory'
    },
    {
      id: 'sikwate',
      name: 'Sikwate',
      category: 'Drink',
      subtitle: 'Hot Chocolate',
      description: 'Traditional cacao drink, perfect with local bread.',
      price: '₱40-80',
      emoji: '',
      gradient: '',
      flavor: 'Rich'
    },
    {
      id: 'sagay',
      name: 'Sagay',
      category: 'Appetizer',
      subtitle: 'Filipino Ceviche',
      description: 'Fresh raw fish cured in vinegar and spices.',
      price: '₱120-200',
      emoji: '',
      gradient: '',
      flavor: 'Tangy'
    },
    {
      id: 'boholano-pizza',
      name: 'Boholano Pizza',
      category: 'Fusion',
      subtitle: 'Local Innovation',
      description: 'Pizza with longganisa, kesong puti, and Filipino toppings.',
      price: '₱200-350',
      emoji: '',
      gradient: '',
      flavor: 'Savory'
    },
    {
      id: 'lechon',
      name: 'Lechon',
      category: 'Main',
      subtitle: 'Roasted Pork',
      description: 'Whole roasted pig, crispy skin with tender meat.',
      price: '₱300-500',
      emoji: '',
      gradient: '',
      flavor: 'Crispy'
    },
    {
      id: 'tuna-kinilaw',
      name: 'Tuna Kinilaw',
      category: 'Appetizer',
      subtitle: 'Fresh Tuna Ceviche',
      description: 'Fresh tuna in vinegar, onions, and chili.',
      price: '₱180-280',
      emoji: '',
      gradient: '',
      flavor: 'Fresh'
    },
    {
      id: 'biko',
      name: 'Biko',
      category: 'Dessert',
      subtitle: 'Rice Cake',
      description: 'Sweet glutinous rice cake with coconut caramel.',
      price: '₱60-120',
      emoji: '',
      gradient: '',
      flavor: 'Sweet'
    },
    {
      id: 'adobo',
      name: 'Adobo',
      category: 'Main',
      subtitle: 'Filipino Classic',
      description: 'Pork or chicken in vinegar, soy sauce, garlic.',
      price: '₱120-200',
      emoji: '',
      gradient: '',
      flavor: 'Tangy'
    },
    {
      id: 'suman',
      name: 'Suman',
      category: 'Snack',
      subtitle: 'Rice Delicacy',
      description: 'Steamed rice cake wrapped in banana leaves.',
      price: '₱40-80',
      emoji: '',
      gradient: '',
      flavor: 'Mild'
    },
    {
      id: 'pancit-bihon',
      name: 'Pancit Bihon',
      category: 'Main',
      subtitle: 'Stir-fried Noodles',
      description: 'Rice noodles with vegetables and meat.',
      price: '₱100-180',
      emoji: '',
      gradient: '',
      flavor: 'Savory'
    },
    {
      id: 'turon',
      name: 'Turon',
      category: 'Snack',
      subtitle: 'Fried Spring Roll',
      description: 'Banana and jackfruit in crispy wrapper.',
      price: '₱25-50',
      emoji: '',
      gradient: '',
      flavor: 'Sweet'
    },
    {
      id: 'buko-pie',
      name: 'Buko Pie',
      category: 'Dessert',
      subtitle: 'Coconut Pie',
      description: 'Creamy coconut pie with flaky pastry crust.',
      price: '₱150-250',
      emoji: '',
      gradient: '',
      flavor: 'Creamy'
    },
    {
      id: 'tinola',
      name: 'Tinola',
      category: 'Main',
      subtitle: 'Chicken Soup',
      description: 'Clear chicken soup with ginger and vegetables.',
      price: '₱120-180',
      emoji: '',
      gradient: '',
      flavor: 'Light'
    },
    {
      id: 'mais',
      name: 'Mais',
      category: 'Snack',
      subtitle: 'Grilled Corn',
      description: 'Street-style grilled corn with butter and cheese.',
      price: '₱20-40',
      emoji: '',
      gradient: '',
      flavor: 'Savory'
    }
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(foodItems.map(item => item.category)))];

  // Filter food items based on active filter
  const filteredItems = activeFilter === 'All' 
    ? foodItems 
    : foodItems.filter(item => item.category === activeFilter);

  // Get category colors - plain gray theme
  const getCategoryColor = (category: string) => {
    return 'bg-gray-600 text-white';
  };

  const getCategoryEmoji = (category: string) => {
    // Return blank image instead of emojis
    return <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Back Button */}
      <div className="sm:hidden bg-white border-b py-3 px-4">
        <Link to="/travel-guides" className="inline-flex items-center text-blue-600 font-medium">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Travel Guides
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Food & Dining Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Savor the flavors of Bohol with our comprehensive guide to local cuisine, 
            must-try dishes, and the best restaurants across the island.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Must-Try Local Dishes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Must-Try Local Dishes</h2>
            
            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 flex items-center space-x-2 ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {getCategoryEmoji(category)}
                    <span>{category}</span>
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                      {category === 'All' ? foodItems.length : foodItems.filter(item => item.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gray-100 relative flex items-center justify-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-12 h-12 opacity-50" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">{item.subtitle}</p>
                    <p className="text-gray-600 text-xs mb-3">{item.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center text-gray-600">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-1" /> {item.flavor}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-1" /> {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Results Counter */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
                {activeFilter !== 'All' && ` in ${activeFilter} category`}
              </p>
            </div>
          </section>

          {/* Restaurant Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dining Categories</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Fine Dining Header */}
                <div className="h-32 bg-gray-100 relative flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-16 h-16 opacity-50" />
                  <div className="absolute bottom-2 left-4 text-gray-900 font-bold text-lg">Fine Dining</div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="font-semibold text-gray-900">Giuseppe Pizzeria & Sicilian Roast</h4>
                      <p className="text-gray-600">Authentic Italian cuisine with a tropical twist</p>
                      <p className="text-sm text-gray-500">Location: Panglao Island</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="font-semibold text-gray-900">Bohol Bee Farm Restaurant</h4>
                      <p className="text-gray-600">Organic farm-to-table dining experience</p>
                      <p className="text-sm text-gray-500">Location: Panglao Island</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="font-semibold text-gray-900">Linaw Beach Resort Restaurant</h4>
                      <p className="text-gray-600">Beachfront dining with fresh seafood</p>
                      <p className="text-sm text-gray-500">Location: Panglao Island</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Local Favorites Header */}
                <div className="h-32 bg-gray-100 relative flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-16 h-16 opacity-50" />
                  <div className="absolute bottom-2 left-4 text-gray-900 font-bold text-lg">Local Favorites</div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="font-semibold text-gray-900">Payag Restaurant</h4>
                      <p className="text-gray-600">Traditional Filipino dishes in native hut setting</p>
                      <p className="text-sm text-gray-500">Location: Loboc</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="font-semibold text-gray-900">Garden Cafe</h4>
                      <p className="text-gray-600">Home-style cooking in a garden setting</p>
                      <p className="text-sm text-gray-500">Location: Tagbilaran City</p>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h4 className="font-semibold text-gray-900">Loboc River Resort Restaurant</h4>
                      <p className="text-gray-600">Floating restaurant with cultural shows</p>
                      <p className="text-sm text-gray-500">Location: Loboc River</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Food Markets */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Markets & Street Food</h2>
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              {/* Markets Header */}
              <div className="h-40 bg-gray-100 relative flex items-center justify-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-20 h-20 opacity-50" />
                <div className="absolute bottom-4 left-6 text-gray-900">
                  <h3 className="text-2xl font-bold">Markets & Street Food</h3>
                  <p className="text-gray-600">Authentic local flavors</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-6 h-6 mr-2" />
                      Best Markets
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                          Tagbilaran Public Market
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Fresh produce, local delicacies, and authentic street food experience
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                          ICM Shopping Mall Food Court
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Various local and international food options in air-conditioned comfort
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 flex items-center mb-2">
                          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                          Panglao Night Market
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Evening street food scene with grilled seafood and local snacks
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-6 h-6 mr-2" />
                      Street Food Must-Tries
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <div className="text-sm font-medium text-gray-900">Grilled Squid</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <div className="text-sm font-medium text-gray-900">Lechon Manok</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <div className="text-sm font-medium text-gray-900">Grilled Corn</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <div className="text-sm font-medium text-gray-900">Turon</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <div className="text-sm font-medium text-gray-900">Fresh Fruits</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <div className="text-sm font-medium text-gray-900">Buko Juice</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dining Etiquette */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dining Etiquette & Tips</h2>
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              {/* Etiquette Header */}
              <div className="h-32 bg-gray-100 relative flex items-center justify-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-16 h-16 opacity-50" />
                <div className="absolute bottom-3 left-6 text-gray-900">
                  <h3 className="text-xl font-bold">Filipino Dining Culture</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="font-semibold text-gray-900 mb-3">Sharing Culture</h3>
                    <p className="text-gray-600 text-sm">
                      Filipino dining culture emphasizes sharing. Order multiple dishes to share with your group.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="font-semibold text-gray-900 mb-3">Pricing</h3>
                    <p className="text-gray-600 text-sm">
                      Expect very affordable prices. Tipping is appreciated but not mandatory 
                      (10% is standard for good service).
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="font-semibold text-gray-900 mb-3">Spice Level</h3>
                    <p className="text-gray-600 text-sm">
                      Boholano cuisine is generally mild. Ask for extra spice if you prefer 
                      heat in your dishes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FoodDiningGuide;