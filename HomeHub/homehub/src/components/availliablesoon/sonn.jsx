import React from 'react';
import { Heart, Share, Bed, Bath, Ruler } from 'lucide-react';
import { Soon } from '../../data/dummydata';

const PropertyCard = ({ property }) => {
  const { img, title, bedroom, bathroom, area, price, location } = property;
  
  return (
    <div className="group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={img} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
              <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
            </button>
            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
              <Share className="w-5 h-5 text-gray-700 hover:text-blue-500 transition-colors" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
              Hot
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-teal-600">R{price.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-gray-600">
              <Bed className="w-5 h-5" />
              <span>{bedroom}</span>
            </div>
            <p className="text-xs text-gray-500">Bedrooms</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-gray-600">
              <Bath className="w-5 h-5" />
              <span>{bathroom}</span>
            </div>
            <p className="text-xs text-gray-500">Bathrooms</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-gray-600">
              <Ruler className="w-5 h-5" />
              <span>{area}</span>
            </div>
            <p className="text-xs text-gray-500">Area (m²)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SoonHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Soon</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Soon.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoonHome;