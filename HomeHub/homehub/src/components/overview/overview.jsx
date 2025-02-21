import React from 'react';

const PropertyOverview = () => {
  const propertyDetails = [
    { label: "Listing Number", value: "11045678" },
    { label: "Type Of Property", value: "Apartment/Flat" },
    { label: "Street Address", value: "1234 BroadWay Street" },
    { label: "Occupation Date", value: "5 August 2024" },
    { label: "Erf Size", value: "41m" },
    { label: "Floor Size", value: "41m" },
    { label: "Levies", value: "R800" },
    { label: "Special Levies", value: "R500" },
    { label: "Rates and Taxes", value: "R1000" },
    { label: "Pets Allowed", value: "Yes" },
    { label: "Furnished", value: "Yes" }
  ];

  return (
    <div className="max-w-2xl  mt-8 rounded-2xl overflow-hidden">
      <h3 className="text-xl font-semibold p-6 border-b border-gray-200">
        Property Overview
      </h3>
      
      <div className="divide-y divide-gray-200">
        {propertyDetails.map((detail, index) => (
          <div 
            key={detail.label}
            className={`flex items-center ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="flex-1 p-4 text-gray-600">
              {detail.label}
            </div>
            <div className="flex-1 p-4 text-gray-900 font-medium">
              {detail.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyOverview;