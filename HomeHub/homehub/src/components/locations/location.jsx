import { Link } from 'react-router-dom';
import React from 'react';

const LocationsGrid = () => {
  const locations = [
    {
      category: 'Provinces',
      items: [
        { name: 'Gauteng',  Link: "/list"  },
        { name: 'Western Cape',  Link: "/list" },
        { name: 'Eastern Cape',  Link: "/list"  },
      ]
    },
    {
      category: 'Central',
      items: [
        { name: 'Free State', Link: "/list" },
        { name: 'Northern Cape', Link: "/list" },
        { name: 'KwaZulu Natal', Link: "/list" },
      ]
    },
    {
      category: 'Northern',
      items: [
        { name: 'North West', Link: "/list" },
        { name: 'Mpumalanga', Link: "/list" },
        { name: 'Limpopo', Link: "/list"},
      ]
    },
    {
      category: 'Neighboring',
      items: [
        { name: 'Eswatini', Link: "/list" },
        { name: 'Lesotho', Link: "/list" },
      ]
    }
  ];

  return (
    <div className=" border-2 text-blue-200 border-black border-solid rounded-3xl px-6 py-12 mt-12">
      <div className="max-w-6xl mx-auto">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((region) => (
            <div key={region.category} className="space-y-4">
              <ul className="space-y-3">
                {region.items.map((location) => (
                  <li key={location.name}>
                    <Link 
                      to={location.Link}
                      className="text-blue-500 hover:text-blue-200 transition-colors duration-200 font-medium underline underline-offset-2 block text-center"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsGrid;