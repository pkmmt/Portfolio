import React from 'react';
import { Search, MapPin, Home, Building, ArrowRight } from 'lucide-react';
import NavBar from '../../components/navbar/nabar';
import '../../index.css';
import { Link } from 'react-router-dom';
import LocationsGrid from '../../components/locations/location';
import SoonHome from '../../components/availliablesoon/sonn';
import Footer from '../../components/footer/footer';

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <NavBar />
        
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
            
            <div className="pt-6 xs:pt-8 sm:pt-12 lg:pt-24 pb-8 xs:pb-10 sm:pb-16 lg:pb-28">
              <div className="flex flex-col lg:flex-row items-center gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
               
                <div className="flex-1 space-y-4 xs:space-y-6 sm:space-y-8 w-full">
                  <div className="space-y-3 xs:space-y-4 text-center lg:text-left">
                    <span className="inline-block px-3 xs:px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs xs:text-sm font-medium">
                      Welcome to HomeHub
                    </span>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                      Find Your Perfect Place to Call Home
                    </h1>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                      Discover thousands of properties across South Africa. From cozy apartments 
                      to luxury estates, find exactly what you're looking for.
                    </p>
                  </div>

           
                  <div className="flex flex-col xs:flex-row gap-3 p-2 xs:p-3 bg-white rounded-xl xs:rounded-2xl shadow-lg">
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 xs:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Enter location..."
                          className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2.5 xs:py-3 sm:py-4 text-sm xs:text-base rounded-lg xs:rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <button className="bg-orange-600 hover:bg-blue-700 text-white px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl transition-colors flex items-center justify-center gap-2 font-medium text-sm xs:text-base">
                      <Search size={18} />
                      <span className="hidden xs:inline">Search Properties</span>
                      <span className="xs:hidden">Search</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 pt-4 xs:pt-6 sm:pt-8">
                    {[
                      { number: '6M+', label: 'Monthly Visits' },
                      { number: '#1', label: 'Property Platform' },
                      { number: '22yrs', label: 'Experience' }
                    ].map(({ number, label }) => (
                      <div key={label} className="text-center p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl bg-white shadow-sm">
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-blue-600">{number}</h3>
                        <p className="mt-0.5 xs:mt-1 text-xs xs:text-sm text-gray-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

               
                <div className="flex-1 w-full max-w-sm xs:max-w-md lg:max-w-lg">
                  <div className="relative aspect-[4/3] xs:aspect-square rounded-xl xs:rounded-2xl overflow-hidden shadow-lg xs:shadow-2xl">
                    <img
                      src="./building.png"
                      alt="Modern home interior"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 xs:py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col xs:flex-row justify-between items-center mb-6 xs:mb-8 sm:mb-10 lg:mb-12 gap-3">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">Browse by Category</h2>
            <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1.5 text-sm xs:text-base">
              View All Categories
              <ArrowRight size={18} />
            </button>
          </div>
          
          <Link to="/list">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
              {[
                { name: 'Apartments', icon: Building, properties: '2,156' },
                { name: 'Houses', icon: Home, properties: '3,658' },
                { name: 'Luxury Homes', icon: Home, properties: '892' }
              ].map(({ name, icon: Icon, properties }) => (
                <div
                  key={name}
                  className="group bg-white rounded-xl xs:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="p-4 xs:p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-3 xs:mb-4">
                      <div className="p-2 xs:p-3 rounded-lg xs:rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={20} className="xs:w-6 xs:h-6" />
                      </div>
                      <span className="text-xs xs:text-sm text-gray-500">{properties} properties</span>
                    </div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
      <h2  className="text-xl xs:text-2xl text-center sm:text-3xl font-bold text-gray-900">Locations</h2>
      <LocationsGrid />
      <SoonHome />
      <Footer />
    </>
  );
};

export default HomePage;