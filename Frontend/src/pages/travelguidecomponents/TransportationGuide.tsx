import React from 'react';
import { Link } from 'react-router-dom';

const TransportationGuide: React.FC = () => {
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
            Transportation Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Navigate Bohol with confidence. Complete guide to getting around the island, 
            from airports to remote beaches and everything in between.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Getting to Bohol */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting to Bohol</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-center mb-4">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">By Air</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900">Bohol-Panglao International Airport</h4>
                    <p className="text-gray-600">Direct flights from Manila, Cebu, and other major cities</p>
                    <p className="text-sm text-gray-500">Flight time: 1.5-2 hours from Manila</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Airlines</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Philippine Airlines</li>
                      <li>• Cebu Pacific</li>
                      <li>• Philippines AirAsia</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-center mb-4">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">By Sea</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900">Ferry Routes</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• <strong>Cebu to Tagbilaran:</strong> 2 hours by fast ferry</li>
                      <li>• <strong>Cebu to Tubigon:</strong> 1.5 hours by ferry</li>
                      <li>• <strong>Dumaguete to Tagbilaran:</strong> 4 hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ferry Companies</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ocean Jet</li>
                      <li>• Lite Ferry</li>
                      <li>• 2GO Travel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Transportation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Around Bohol</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Motorcycle Rental</h3>
                <p className="text-gray-600 text-sm mb-3 font-semibold">₱300-500/day</p>
                <p className="text-gray-600 text-sm">Perfect for couples and solo travelers</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Van Rental</h3>
                <p className="text-gray-600 text-sm mb-3 font-semibold">₱3,000-5,000/day</p>
                <p className="text-gray-600 text-sm">Ideal for groups and families</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tricycle</h3>
                <p className="text-gray-600 text-sm mb-3 font-semibold">₱10-50/ride</p>
                <p className="text-gray-600 text-sm">Short distances within towns</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Habal-Habal</h3>
                <p className="text-gray-600 text-sm mb-3 font-semibold">₱100-300/ride</p>
                <p className="text-gray-600 text-sm">Off-road adventures and remote areas</p>
              </div>
            </div>
          </section>

          {/* Transportation Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transportation Tips</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rental Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>Always check vehicle condition before renting</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>Bring your driver's license and passport</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>Ask for helmets when renting motorcycles</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>Negotiate prices, especially for longer rentals</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>Keep contact info of rental shop</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Guidelines</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-yellow-500 mr-2 font-bold">⚠️</span>
                    <span>Drive defensively and watch for road conditions</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-yellow-500 mr-2 font-bold">⚠️</span>
                    <span>Avoid driving at night in unfamiliar areas</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-yellow-500 mr-2 font-bold">⚠️</span>
                    <span>Always wear helmets on motorcycles</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-yellow-500 mr-2 font-bold">⚠️</span>
                    <span>Keep emergency numbers handy</span>
                  </li>
                  <li className="flex items-start p-2 bg-gray-50 rounded-lg">
                    <span className="text-yellow-500 mr-2 font-bold">⚠️</span>
                    <span>Download offline maps as backup</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Route Planning */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Routes</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Countryside Tour Route</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Distance:</strong> ~80km | <strong>Duration:</strong> Full day
                  </p>
                  <p className="text-gray-600">
                    Tagbilaran → Baclayon Church → Blood Compact Monument → Loboc River → 
                    Chocolate Hills → Tarsier Sanctuary → Man-made Forest → Return
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Panglao Beach Circuit</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Distance:</strong> ~25km | <strong>Duration:</strong> Half day
                  </p>
                  <p className="text-gray-600">
                    Alona Beach → Hinagdanan Cave → Dumaluan Beach → 
                    Nova Shell Museum → Bohol Bee Farm
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Eastern Bohol Adventure</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Distance:</strong> ~120km | <strong>Duration:</strong> Full day
                  </p>
                  <p className="text-gray-600">
                    Tagbilaran → Jagna → Candijay Caves → Anda Beaches → 
                    Lamanoc Island → Return via Ubay
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

export default TransportationGuide;