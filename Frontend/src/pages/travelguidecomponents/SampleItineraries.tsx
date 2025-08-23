import React from 'react';
import { Link } from 'react-router-dom';

const SampleItineraries: React.FC = () => {
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
            Sample Itineraries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ready-made travel plans for every type of traveler. From quick weekend getaways 
            to comprehensive week-long adventures.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Itinerary Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Adventure</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 3-Day Itinerary */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-100 text-gray-900 p-6">
                  <h3 className="text-2xl font-bold mb-2">3-Day Quick Escape</h3>
                  <p className="text-gray-600">Perfect for first-time visitors</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 1: Arrival & City Tour</h4>
                      <p className="text-sm text-gray-600">Blood Compact Monument, Baclayon Church, local market visit</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 2: Chocolate Hills & Tarsiers</h4>
                      <p className="text-sm text-gray-600">Early morning Chocolate Hills viewing, Tarsier Sanctuary, Loboc River cruise</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 3: Panglao Beach</h4>
                      <p className="text-sm text-gray-600">Beach relaxation, snorkeling, departure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Day Itinerary */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-100 text-gray-900 p-6">
                  <h3 className="text-2xl font-bold mb-2">5-Day Explorer</h3>
                  <p className="text-gray-600">Balanced mix of adventure & relaxation</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 1: Cultural Immersion</h4>
                      <p className="text-sm text-gray-600">Historical sites, local markets, traditional crafts</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 2-3: Natural Wonders</h4>
                      <p className="text-sm text-gray-600">Chocolate Hills, Tarsier Sanctuary, cave exploration</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 4-5: Island Life</h4>
                      <p className="text-sm text-gray-600">Panglao beaches, diving, island hopping</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7-Day Itinerary */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-100 text-gray-900 p-6">
                  <h3 className="text-2xl font-bold mb-2">7-Day Complete</h3>
                  <p className="text-gray-600">Full Bohol experience</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 1-2: Cultural & Historical</h4>
                      <p className="text-sm text-gray-600">Churches, museums, local communities</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 3-4: Natural Attractions</h4>
                      <p className="text-sm text-gray-600">Chocolate Hills, caves, waterfalls, wildlife</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900">Day 5-7: Beach & Islands</h4>
                      <p className="text-sm text-gray-600">Extended beach time, diving, spa treatments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed 5-Day Itinerary */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed 5-Day Itinerary</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="space-y-8">
                
                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Arrival & Tagbilaran</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Arrive at Tagbilaran Airport, check into hotel</p>
                    <p><strong>Afternoon:</strong> Blood Compact Monument, Sandugo Festival site</p>
                    <p><strong>Evening:</strong> Dinner at local restaurant, evening stroll at Tagbilaran wharf</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Chocolate Hills & Tarsiers</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Early Morning:</strong> Depart for Carmen (Chocolate Hills Complex)</p>
                    <p><strong>Morning:</strong> Chocolate Hills viewing deck, photo opportunities</p>
                    <p><strong>Afternoon:</strong> Philippine Tarsier Sanctuary in Corella</p>
                    <p><strong>Evening:</strong> Return to accommodation, local dinner</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: River Cruise & Heritage</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Loboc River cruise with buffet lunch</p>
                    <p><strong>Afternoon:</strong> Baclayon Church, Loboc Church ruins</p>
                    <p><strong>Evening:</strong> Man-made Forest, Butterfly Sanctuary (if time permits)</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 4: Panglao Beach Day</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Transfer to Panglao Island, beach relaxation</p>
                    <p><strong>Afternoon:</strong> Island hopping tour or diving excursion</p>
                    <p><strong>Evening:</strong> Sunset viewing, beachfront dinner</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 5: Final Exploration & Departure</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Hinagdanan Cave exploration</p>
                    <p><strong>Afternoon:</strong> Last-minute shopping, souvenir hunting</p>
                    <p><strong>Evening:</strong> Departure from Bohol-Panglao International Airport</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Tips */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary Planning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                  Transportation
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Rent a motorcycle or hire a tricycle for short distances</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Book private van tours for day trips</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Use habal-habal for off-road adventures</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Ferry transfers for island hopping</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                  Booking Tips
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Book accommodations in advance during peak season</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Join group tours to save on transportation costs</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Negotiate prices for private tours</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600 text-sm">Download offline maps for navigation</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed 5-Day Itinerary */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed 5-Day Itinerary</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="space-y-8">
                
                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Arrival & Tagbilaran</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Arrive at Tagbilaran Airport, check into hotel</p>
                    <p><strong>Afternoon:</strong> Blood Compact Monument, Sandugo Festival site</p>
                    <p><strong>Evening:</strong> Dinner at local restaurant, evening stroll at Tagbilaran wharf</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Chocolate Hills & Tarsiers</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Early Morning:</strong> Depart for Carmen (Chocolate Hills Complex)</p>
                    <p><strong>Morning:</strong> Chocolate Hills viewing deck, photo opportunities</p>
                    <p><strong>Afternoon:</strong> Philippine Tarsier Sanctuary in Corella</p>
                    <p><strong>Evening:</strong> Return to accommodation, local dinner</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: River Cruise & Heritage</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Loboc River cruise with buffet lunch</p>
                    <p><strong>Afternoon:</strong> Baclayon Church, Loboc Church ruins</p>
                    <p><strong>Evening:</strong> Man-made Forest, Butterfly Sanctuary (if time permits)</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 4: Panglao Beach Day</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Transfer to Panglao Island, beach relaxation</p>
                    <p><strong>Afternoon:</strong> Island hopping tour or diving excursion</p>
                    <p><strong>Evening:</strong> Sunset viewing, beachfront dinner</p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day 5: Final Exploration & Departure</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Morning:</strong> Hinagdanan Cave exploration</p>
                    <p><strong>Afternoon:</strong> Last-minute shopping, souvenir hunting</p>
                    <p><strong>Evening:</strong> Departure from Bohol-Panglao International Airport</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Tips */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary Planning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                  Transportation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rent a motorcycle or hire a tricycle for short distances</li>
                  <li>• Book private van tours for day trips</li>
                  <li>• Use habal-habal for off-road adventures</li>
                  <li>• Ferry transfers for island hopping</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-5 h-5 mr-2" />
                  Booking Tips
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Book accommodations in advance during peak season</li>
                  <li>• Join group tours to save on transportation costs</li>
                  <li>• Negotiate prices for private tours</li>
                  <li>• Download offline maps for navigation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SampleItineraries;