import React from 'react';
import { MapPin, Bath, BedDouble, Square, ArrowUpDown } from 'lucide-react';
import NavBar from '../../components/navbar/nabar';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

const ListPage = () => {
 
  const data = [
    {
      id: 1,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 850000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 550000,
      beds: 2,
      baths: 1,
      area: 1200,
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 450000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 1500000,
      beds: 4,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 950000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 350000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 450000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 1850000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 9,
      title: "Modern Apartment in City Center",
      location: "Downtown Area",
      price: 950000,
      beds: 3,
      baths: 2,
      area: 1200,
      image: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <select className="w-full py-2 px-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Price Range</option>
                <option value="0-500000">R0 - R500,000</option>
                <option value="500000-1000000">R500,000 - R1,000,000</option>
                <option value="1000000+">R1,000,000+</option>
              </select>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ArrowUpDown size={20} />
              <span>Sort</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {data.length} Properties Available
          </h2>
          <p className="text-gray-500">Showing all properties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <>
            <Link to ="/singlepage">
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  R{item.price.toLocaleString()}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{item.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <BedDouble size={16} className="mr-1" />
                    <span>{item.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{item.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    <span>{item.area} sqft</span>
                  </div>
                </div>
              </div> 
            </div>
            </Link>
            </>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
     
    </div>
    <Footer/>
    </>
  );
};

export default ListPage;
