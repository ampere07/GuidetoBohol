import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TravelGuides: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const guides = [
    {
      id: 'best-time-to-visit',
      title: 'Best Time to Visit Bohol',
      excerpt: 'Learn about the weather patterns and optimal times to visit Bohol',
      category: 'Planning',
      readTime: '8 min read',
      popularity: 95,
      route: '/travel-guides/best-time-to-visit',
      component: 'BestTimeToVisit'
    },
    {
      id: 'attractions-guide',
      title: 'Top Attractions in Bohol',
      excerpt: 'Discover the must-see destinations across the island',
      category: 'Attractions',
      readTime: '12 min read',
      popularity: 98,
      route: '/travel-guides/attractions',
      component: 'TopAttractions'
    },
    {
      id: 'food-guide',
      title: 'Bohol Food Guide',
      excerpt: 'Explore the local cuisine and best restaurants',
      category: 'Food',
      readTime: '7 min read',
      popularity: 89,
      route: '/travel-guides/food',
      component: 'FoodDiningGuide'
    },
    {
      id: 'transportation-guide',
      title: 'Transportation Guide',
      excerpt: 'Navigate Bohol with confidence and ease',
      category: 'Transportation',
      readTime: '10 min read',
      popularity: 85,
      route: '/travel-guides/transportation',
      component: 'TransportationGuide'
    },
    {
      id: 'itinerary-guide',
      title: 'Sample Itineraries',
      excerpt: 'Ready-made travel plans for every type of traveler',
      category: 'Itinerary',
      readTime: '15 min read',
      popularity: 92,
      route: '/travel-guides/itinerary',
      component: 'SampleItineraries'
    }
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(guides.map(guide => guide.category)))];

  // Filter guides based on selected category
  const filteredGuides = selectedCategory === 'All' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  // Sort guides
  const sortedGuides = [...filteredGuides].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popularity - a.popularity;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  // Navigation function
  const handleGuideClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Travel Guides
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
            Essential travel information and guides for your Bohol adventure.
          </p>
        </div>
      </div>

      {/* Filters & Controls - Hidden on mobile */}
      <div className="bg-white border-b sticky top-0 z-10 hidden sm:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            
            {/* Category Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full sm:w-auto flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm sm:text-base">
                  Category: {selectedCategory}
                </span>
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isFilterOpen && (
                <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-48 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedCategory === category ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {category}
                      <span className="float-right text-xs text-gray-500">
                        {category === 'All' ? guides.length : guides.filter(g => g.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full sm:w-auto flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm sm:text-base">
                  Sort by: {sortBy === 'popular' ? 'Popular' : sortBy === 'title' ? 'Title' : 'Category'}
                </span>
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isSortOpen && (
                <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-40 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  {[
                    { value: 'popular', label: 'Popular' },
                    { value: 'title', label: 'Title' },
                    { value: 'category', label: 'Category' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        sortBy === option.value ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results Counter - Visible on larger screens */}
            <div className="text-sm text-gray-600">
              Showing {sortedGuides.length} {sortedGuides.length === 1 ? 'guide' : 'guides'}
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(isFilterOpen || isSortOpen) && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => {
            setIsFilterOpen(false);
            setIsSortOpen(false);
          }}
        />
      )}
      
      {/* Mobile view has no filter headers */}

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sortedGuides.map((guide) => {
            return (
              <div 
                key={guide.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => handleGuideClick(guide.route)}
                data-component={guide.component}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  {guide.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {guide.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium flex items-center transition-colors text-sm sm:text-base">
                    Read Guide 
                    <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  
                  {/* Popularity indicator */}
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                    {guide.popularity}% helpful
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {sortedGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No guides found</h3>
            <p className="text-gray-600">Try selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSortBy('popular');
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Show All Guides
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelGuides;