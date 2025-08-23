import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Weather Calendar Component
const WeatherCalendar: React.FC = () => {
  const [viewMode, setViewMode] = useState<'weekly' | 'monthly'>('weekly');
  const [selectedMonth, setSelectedMonth] = useState(2); // March (0-indexed)

  // Mock weather data for different months
  const monthlyWeatherData = {
    0: { name: 'January', temp: { high: 30, low: 24 }, humidity: 75, rainfall: 45, wind: 15, uv: 8 },
    1: { name: 'February', temp: { high: 31, low: 24 }, humidity: 74, rainfall: 35, wind: 16, uv: 9 },
    2: { name: 'March', temp: { high: 32, low: 25 }, humidity: 76, rainfall: 40, wind: 17, uv: 10 },
    3: { name: 'April', temp: { high: 33, low: 26 }, humidity: 78, rainfall: 55, wind: 16, uv: 11 },
    4: { name: 'May', temp: { high: 33, low: 26 }, humidity: 80, rainfall: 120, wind: 14, uv: 10 },
    5: { name: 'June', temp: { high: 32, low: 25 }, humidity: 82, rainfall: 180, wind: 13, uv: 8 },
    6: { name: 'July', temp: { high: 31, low: 25 }, humidity: 83, rainfall: 200, wind: 12, uv: 7 },
    7: { name: 'August', temp: { high: 31, low: 25 }, humidity: 84, rainfall: 190, wind: 12, uv: 7 },
    8: { name: 'September', temp: { high: 31, low: 25 }, humidity: 83, rainfall: 160, wind: 13, uv: 8 },
    9: { name: 'October', temp: { high: 31, low: 25 }, humidity: 81, rainfall: 140, wind: 14, uv: 9 },
    10: { name: 'November', temp: { high: 31, low: 24 }, humidity: 78, rainfall: 85, wind: 15, uv: 9 },
    11: { name: 'December', temp: { high: 30, low: 23 }, humidity: 76, rainfall: 55, wind: 16, uv: 8 }
  };

  // Mock weekly weather data (sample week in March)
  const weeklyWeatherData = [
    { day: 'Mon', date: '11', temp: { high: 32, low: 25 }, condition: 'Sunny' },
    { day: 'Tue', date: '12', temp: { high: 31, low: 24 }, condition: 'Partly Cloudy' },
    { day: 'Wed', date: '13', temp: { high: 33, low: 26 }, condition: 'Sunny' },
    { day: 'Thu', date: '14', temp: { high: 30, low: 23 }, condition: 'Light Rain' },
    { day: 'Fri', date: '15', temp: { high: 32, low: 25 }, condition: 'Partly Cloudy' },
    { day: 'Sat', date: '16', temp: { high: 33, low: 26 }, condition: 'Sunny' },
    { day: 'Sun', date: '17', temp: { high: 32, low: 25 }, condition: 'Sunny' }
  ];

  const getWeatherIcon = (condition: string) => {
    // Return blank images instead of weather emojis
    return <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-8 h-8 opacity-50" />;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-100 p-6 bg-gray-50">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Weather Calendar
          </h3>
          
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('weekly')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'weekly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {viewMode === 'weekly' ? (
          /* Weekly Weather View */
          <div>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500">March 11-17, 2024</p>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {weeklyWeatherData.map((day, index) => (
                <div key={index} className="text-center">
                  {/* Day Header */}
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                    {day.day}
                  </div>
                  
                  {/* Date */}
                  <div className="text-sm font-semibold text-gray-900 mb-3">
                    {day.date}
                  </div>
                  
                  {/* Weather Card */}
                  <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors border border-gray-200">
                    {/* Weather Icon */}
                    <div className="text-2xl mb-2">
                      {getWeatherIcon(day.condition)}
                    </div>
                    
                    {/* Temperature */}
                    <div className="mb-2">
                      <div className="text-lg font-bold text-gray-900">
                        {day.temp.high}°
                      </div>
                      <div className="text-sm text-gray-500">
                        {day.temp.low}°
                      </div>
                    </div>
                    
                    {/* Condition */}
                    <div className="text-xs text-gray-600">
                      {day.condition}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Summary */}
            <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                Perfect week for outdoor activities • Minimal rainfall expected
              </p>
            </div>
          </div>
        ) : (
          /* Monthly Weather View */
          <div>
            {/* Month Selector */}
            <div className="flex justify-center mb-8">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              >
                {Object.entries(monthlyWeatherData).map(([key, month]) => (
                  <option key={key} value={key}>{month.name}</option>
                ))}
              </select>
            </div>

            {/* Selected Month Display */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].name}
              </h4>
              <p className="text-gray-600">
                {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.high}°C / {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.low}°C average
              </p>
            </div>

            {/* Temperature Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Average High */}
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">High</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.high}°C
                </div>
                <div className="text-xs text-gray-600">
                  {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.high >= 32 ? 'Hot' : 'Warm'}
                </div>
              </div>

              {/* Average Low */}
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Low</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.low}°C
                </div>
                <div className="text-xs text-gray-600">
                  {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.low >= 25 ? 'Comfortable' : 'Cool'}
                </div>
              </div>

              {/* Feels Like */}
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Feels Like</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].temp.high + 2}°C
                </div>
                <div className="text-xs text-gray-600">
                  With humidity
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-6">
              {/* Weather Summary */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Conditions</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded border border-gray-200">
                    <span className="text-gray-600">Rainfall</span>
                    <span className="font-medium text-gray-700">{monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].rainfall}mm</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded border border-gray-200">
                    <span className="text-gray-600">Humidity</span>
                    <span className="font-medium text-gray-700">{monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].humidity}%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded border border-gray-200">
                    <span className="text-gray-600">UV Index</span>
                    <span className="font-medium text-gray-700">{monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].uv}/11</span>
                  </div>
                </div>
              </div>

              {/* Travel Recommendation */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Travel Info</h5>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="p-2 bg-gray-50 rounded border border-gray-200">
                    <strong>Suitability:</strong> {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].rainfall < 80 ? 'Excellent' :
                     monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].rainfall < 150 ? 'Good' : 'Fair'}
                  </p>
                  <p className="p-2 bg-gray-50 rounded border border-gray-200">
                    <strong>Best for:</strong> {monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].rainfall < 80 ? 'Beach & outdoor activities' :
                     monthlyWeatherData[selectedMonth as keyof typeof monthlyWeatherData].rainfall < 150 ? 'Sightseeing & tours' : 'Indoor attractions'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BestTimeToVisit: React.FC = () => {
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
            Best Time to Visit Bohol
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Plan your perfect Bohol vacation with our comprehensive guide to weather patterns, 
            seasons, and optimal travel times.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Weather Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Weather Overview</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <p className="text-lg text-gray-600 mb-6">
                Bohol enjoys a tropical climate with three distinct seasons. Understanding these patterns 
                will help you plan the perfect trip based on your preferences and activities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Dry Season</h3>
                  <p className="text-gray-700 font-medium text-lg">December - May</p>
                  <p className="text-sm text-gray-600 mt-2">Perfect for outdoor activities</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Wet Season</h3>
                  <p className="text-gray-700 font-medium text-lg">June - November</p>
                  <p className="text-sm text-gray-600 mt-2">Lush landscapes, fewer crowds</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cool Season</h3>
                  <p className="text-gray-700 font-medium text-lg">December - February</p>
                  <p className="text-sm text-gray-600 mt-2">Most comfortable temperatures</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Weather Calendar */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive Weather Calendar</h2>
            <WeatherCalendar />
          </section>

          {/* Month by Month Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seasonal Overview</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Peak Season (December - April)</h3>
                  <p className="text-gray-600 mt-2">
                    Ideal weather conditions with minimal rainfall. Perfect for beach activities, 
                    island hopping, and outdoor adventures. Expect higher prices and larger crowds.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Shoulder Season (May & November)</h3>
                  <p className="text-gray-600 mt-2">
                    Great balance of good weather and fewer crowds. Occasional rain showers but 
                    generally pleasant conditions for most activities.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-400 pl-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Rainy Season (June - October)</h3>
                  <p className="text-gray-600 mt-2">
                    Higher rainfall and humidity, but also lush green landscapes and lower prices. 
                    Indoor attractions and cultural sites are still accessible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activities by Season */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Activities by Season</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-6 h-6 mr-2" />
                  Dry Season Activities
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Chocolate Hills viewing</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Island hopping to Panglao</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Tarsier watching</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Beach activities and diving</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">River cruises</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-6 h-6 mr-2" />
                  Rainy Season Activities
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Museum and cultural site visits</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Local cuisine exploration</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Spa and wellness retreats</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Indoor shopping and markets</span>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className="w-3 h-3 mr-2" />
                    <span className="text-gray-600">Photography of lush landscapes</span>
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

export default BestTimeToVisit;