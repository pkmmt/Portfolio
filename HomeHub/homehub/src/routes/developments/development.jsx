import React from 'react';
import { Heart, Share, Bed, Bath, Square } from 'lucide-react';
import NavBar from '../../components/navbar/nabar';
import Footer from '../../components/footer/footer';
import { Development } from "../../data/dummydata";
import { Link } from 'react-router-dom';



const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={property.img} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-3 left-3 bg-[#dd3333] text-white px-2 py-1 text-sm rounded">
            hot
          </span>
        </div>
        
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-[#ff3232] hover:text-white transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-gray-200 transition-colors">
            <Share size={20} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 capitalize mb-4">
          {property.title}
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <PropertyFeature 
            icon={<Bed />}
            label="Bedrooms"
            value={property.bedroom}
          />
          <PropertyFeature 
            icon={<Bath />}
            label="Bathrooms"
            value={property.bathroom}
          />
          <PropertyFeature 
            icon={<Square />}
            label="Area"
            value={`${property.area || 3500} sqft`}
          />
        </div>

        <div className="text-[#2fa89e] text-xl font-semibold">
          R{property.price}
        </div>
      </div>
    </div>
  );
};

const PropertyFeature = ({ icon, label, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-600 capitalize">{label}</span>
      <div className="flex items-center gap-2 text-gray-700">
        {icon}
        <span>{value}</span>
      </div>
    </div>
  );
};

const Developments = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <Link to ="/singlepage">
      <main className="flex-grow px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {Development.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          </div>
        </div>
      </main>
      </Link>
      <Footer />
    </div>
  );
};

export default Developments;