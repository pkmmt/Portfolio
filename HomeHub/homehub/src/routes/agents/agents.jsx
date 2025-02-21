import React from 'react';
import { Link } from 'react-router-dom';
import { AgentInfo } from '../../data/dummydata';
import NavBar from '../../components/navbar/nabar';
import Footer from '../../components/footer/footer';

const AgentCard = ({ agent }) => {
  return (
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={agent.img} 
          alt={`${agent.name} - Real Estate Agent`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {agent.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {agent.info}
        </p>
        
        <div className="space-y-3">
          <Link
            to="/list"
            className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            View Properties
          </Link>
          
          <a
            href={`mailto:${agent.email}`}
            className="block w-full text-center border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Agent
          </a>
        </div>
      </div>
    </div>
  );
};

const AgentsPage = () => {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expert Agents
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our team of dedicated real estate professionals ready to help you find your perfect home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AgentInfo.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default AgentsPage;