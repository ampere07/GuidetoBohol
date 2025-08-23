import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TravelGuides: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [showAllGuides, setShowAllGuides] = useState(false);

  const guides = [
    {
      id: 'best-time-to-visit',
      title: 'Best Travel Guide to Bohol: Everything You Need to Know',
      excerpt: 'Find everything you need to know about Bohol. Learn about the best time to visit, where to go, sample itinerary and travel tips.',
      image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read',
      category: 'Planning',
      route: '/travel-guides/best-time-to-visit',
      component: 'BestTimeToVisit'
    },
    {
      id: 'attractions-guide',
      title: 'Read this guide and find out the best attractions to visit in Bohol',
      excerpt: 'Discover the top-rated attractions, hidden gems, and must-see destinations across the beautiful island of Bohol.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '12 min read',
      category: 'Attractions',
      route: '/travel-guides/attractions',
      component: 'TopAttractions'
    },
    {
      id: 'when-to-visit',
      title: 'Plan the best time to visit Bohol with this guide!',
      excerpt: 'Learn about weather patterns, festival seasons, and the optimal times for different activities in Bohol.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      category: 'Weather',
      route: '/travel-guides/best-time-to-visit',
      component: 'BestTimeToVisit'
    },
    {
      id: 'itinerary-guide',
      title: 'Discover the ultimate guide to planning your travel itinerary in Bohol',
      excerpt: 'Explore the best 3-day, 5-day, 1-week, and 2-week itineraries for an unforgettable Bohol experience.',
      image: 'https://images.unsplash.com/photo-1558618644-fbd1e7647dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '15 min read',
      category: 'Itinerary',
      route: '/travel-guides/itinerary',
      component: 'SampleItineraries'
    },
    {
      id: 'transportation-guide',
      title: 'Transportation Guide: Navigate Bohol with Confidence',
      excerpt: 'Complete guide to getting around Bohol, from airports to remote beaches and everything in between.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '10 min read',
      category: 'Transportation',
      route: '/travel-guides/transportation',
      component: 'TransportationGuide'
    },
    {
      id: 'food-guide',
      title: 'Find out what\'s so special about Bohol cuisine and local delicacies',
      excerpt: 'Explore the unique flavors, traditional dishes, and must-try restaurants across the island.',
      image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      category: 'Food',
      route: '/travel-guides/food',
      component: 'FoodDiningGuide'
    }
  ];

  // Get unique categories for quick filters
  const categories = ['All', ...Array.from(new Set(guides.map(guide => guide.category)))];
  
  // Filter guides
  const filteredGuides = selectedFilter === 'All' 
    ? guides 
    : guides.filter(guide => guide.category === selectedFilter);

  // Show limited guides on mobile unless "Show All" is clicked
  const displayedGuides = showAllGuides ? filteredGuides : filteredGuides.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Essential Travel Information
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Get all the essential travel information about Bohol to plan your perfect trip
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 ${
                  selectedFilter === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
                <span className="ml-1 text-xs opacity-75">
                  ({category === 'All' ? guides.length : guides.filter(g => g.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-sm text-gray-600">
            Showing {displayedGuides.length} of {filteredGuides.length} guides
            {selectedFilter !== 'All' && ` in ${selectedFilter}`}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
          {displayedGuides.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {guide.category}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-gray-500">{guide.readTime}</span>
                  <span className="text-xs sm:text-sm text-blue-600 font-medium">Travel Guide</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-tight">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
                
                <Link
                  to={guide.route}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition duration-200 text-sm sm:text-base"
                  data-component={guide.component}
                >
                  Read Guide
                  <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredGuides.length > 3 && (
          <div className="text-center mb-6 sm:mb-8">
            <button
              onClick={() => setShowAllGuides(!showAllGuides)}
              className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base"
            >
              {showAllGuides ? (
                <>
                  Show Less
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  Show All {filteredGuides.length} Guides
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* Call to Action Button */}
        <div className="text-center">
          <Link
            to="/travel-guides"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-200 text-sm sm:text-base shadow-sm hover:shadow-md"
          >
            View All Travel Guides
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;