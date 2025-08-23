import React from 'react';
import { Link } from 'react-router-dom';

const TopAttractions: React.FC = () => {
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
            Top Attractions in Bohol
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the most spectacular natural wonders, cultural sites, and adventure destinations 
            that make Bohol a world-class travel destination.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Featured Attractions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Must-Visit Attractions</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Chocolate Hills */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="h-48 bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Chocolate Hills</h3>
                  <p className="text-gray-600 mb-4">
                    Over 1,200 cone-shaped hills that turn chocolate brown during dry season. 
                    A geological wonder and Bohol's most famous landmark.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full mr-2 font-medium">Natural Wonder</span>
                    <span>Carmen, Bohol</span>
                  </div>
                </div>
              </div>

              {/* Tarsier Sanctuary */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="h-48 bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Philippine Tarsier Sanctuary</h3>
                  <p className="text-gray-600 mb-4">
                    Meet the world's smallest primates in their natural habitat. These adorable 
                    nocturnal creatures are endemic to the Philippines.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full mr-2 font-medium">Wildlife</span>
                    <span>Corella, Bohol</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Panglao Island */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Panglao Island</h3>
                <p className="text-gray-600 mb-4">
                  Pristine white sand beaches and world-class diving spots with vibrant coral reefs.
                </p>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Beach Paradise</span>
              </div>

              {/* Loboc River */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Loboc River Cruise</h3>
                <p className="text-gray-600 mb-4">
                  Scenic river cruise with floating restaurants and cultural performances along the way.
                </p>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">River Adventure</span>
              </div>

              {/* Blood Compact Monument */}
              <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blood Compact Monument</h3>
                <p className="text-gray-600 mb-4">
                  Historical site commemorating the first treaty between Spanish and Filipino leaders.
                </p>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Historical</span>
              </div>
            </div>
          </section>

          {/* Adventure Activities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Adventure Activities</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-6 h-6 mr-2" />
                    Water Adventures
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Scuba diving and snorkeling</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Island hopping tours</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Dolphin watching</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Stand-up paddleboarding</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Kayaking adventures</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-6 h-6 mr-2" />
                    Land Adventures
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">ATV rides through countryside</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Zip-lining experiences</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Cave exploration</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Nature trekking</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-4 h-4 mr-3" />
                      <span className="text-gray-700">Cultural village tours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Planning Tips */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Planning Tips</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                    Time Needed
                  </h3>
                  <p className="text-gray-600">
                    Allow at least 3-5 days to see the main attractions. A week gives you time to explore 
                    hidden gems and relax on the beaches.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                    Entrance Fees
                  </h3>
                  <p className="text-gray-600">
                    Most attractions have modest entrance fees. Consider getting a tourist pass for 
                    multiple attractions to save money.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TopAttractions;