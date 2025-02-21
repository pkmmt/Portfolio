import React, { useState } from 'react';
import NavBar from '../../components/navbar/nabar';
import Footer from '../../components/footer/footer';
import { Search } from 'lucide-react';

const ArticleCard = ({ image, title, description }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3">
        {description}
      </p>
      <button className="w-full px-6 py-3 text-center border border-gray-200 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors">
        View Article
      </button>
    </div>
  </div>
);

const Advice = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      image: "https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      title: "Urban housing market trends reflect a tale of two markets",
      description: "National year-on-year house price inflation currently stands at 3.66%, marking a slight increase...."
    },
    {
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "How to make your rental pet-friendly",
      description: "Creating a pet-friendly rental space is essential for ensuring both you and your furry friends are comfortable...."
    },
    {
      image: "https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "When is the best time to sell property?",
      description: "It has been one of the coldest, wettest winters for some time which has kept many buyers away from show houses, especially in the rainy areas, but better times are ahead according to the Seeff Property Group..."
    },
    {
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "What is occupational rent? Moving in before registration of transfer",
      description: "When you purchase a property, you can usually only move into the property once the transfer is registered in the Deeds Office..."
    },
    {
      image: "https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Important property terminology to know and understand",
      description: "Whether you're stepping into the property market for the first time or you're an experienced investor...."
    },
    {
      image: "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Renting: Key fees tenants should know about",
      description: "Tenants looking to rent a home are often surprised by the costs beyond the monthly rental amount...."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="px-6 py-12 sm:px-12 sm:py-16 md:w-3/4 lg:w-2/3">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Welcome to HomeHub Advice
                </h1>
                <p className="text-lg text-gray-600">
                  View our hand-picked HomeHub Articles from buying, renting and selling.
                </p>
              </div>

              <div className="flex gap-4 max-w-xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Advice;