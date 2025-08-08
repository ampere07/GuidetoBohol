import React from 'react';

const MobileApp: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See pictures of the best destinations and attractions in Bohol
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Download Bohol's biggest travel marketplace to your phone to manage your entire trip in one place
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-100">Book tours and hotels offline</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-100">Access your bookings anywhere</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-100">Get real-time notifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-100">Exclusive mobile deals</span>
              </div>
            </div>

            {/* Download Methods */}
            <div className="space-y-6">
              {/* QR Code Method */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Download with QR Code:</h3>
                <p className="text-blue-100 mb-4">
                  Scan this QR code with your phone camera and press the link that appears to add Bohol's biggest travel marketplace into your pocket.
                </p>
                <div className="bg-white p-4 rounded-lg w-32 h-32 flex items-center justify-center">
                  <div className="bg-gray-300 w-24 h-24 rounded flex items-center justify-center text-gray-600">
                    QR Code
                  </div>
                </div>
              </div>

              {/* SMS/Email Method */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Get Download Link:</h3>
                <p className="text-blue-100 mb-4">
                  Enter your phone number or email address to receive an SMS or email with the download link.
                </p>
                <div className="flex max-w-md">
                  <input
                    type="text"
                    placeholder="Phone number or email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
                  />
                  <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-r-lg font-semibold transition duration-200">
                    Send Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="text-center">
            <div className="relative mx-auto max-w-sm">
              <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-4 text-center">
                    <h4 className="font-bold">Guide to Bohol</h4>
                    <p className="text-sm text-blue-100">Mobile App</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    </div>
                    <div className="bg-blue-600 text-white text-center py-2 rounded font-medium text-sm">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;