import React, { useState } from 'react';
import { MapPin, Key, Dog, Building, Bath, BedDouble, School, Train, Utensils, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import NavBar from '../../components/navbar/nabar';
import PropertyOverview from '../../components/overview/overview';
import Footer from '../../components/footer/footer';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-48 sm:h-64 md:h-96 mb-4 sm:mb-8 rounded-lg overflow-hidden group">
      <div className="h-full w-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-3 sm:w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const PropertyDetails = () => {
  const singlePostData = {
    title: "Modern Home",
    address: "123 Main Street, Downown",
    price: "12,500",
    description: "Luxurious modern house featuring premium finishes, open-plan living, and stunning city views. Perfect for professionals or small families.",
    images: [
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  };

  const userData = {
    name: "John Smith",
    img: "/api/placeholder/50/50"
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
          
            <div className="flex-grow">
              <div className="max-w-3xl">
                <ImageCarousel images={singlePostData.images} />
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="space-y-2 sm:space-y-4">
                      <h1 className="text-2xl sm:text-3xl font-semibold">{singlePostData.title}</h1>
                      <div className="flex items-center text-gray-600 gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm sm:text-base">{singlePostData.address}</span>
                      </div>
                      <div className="text-blue-600 text-xl sm:text-2xl font-medium">
                        R{singlePostData.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center sm:flex-col gap-3 sm:gap-2">
                      <img 
                        src={userData.img} 
                        alt={userData.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <span className="text-sm sm:text-base font-medium">{userData.name}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {singlePostData.description}
                  </p>
                </div>

                <div className="mt-6">
                  <PropertyOverview />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-96 mt-6 lg:mt-0">
              <div className="bg-indigo-50 p-4 sm:p-6 lg:p-8 rounded-lg space-y-6">
                <section>
                  <h2 className="font-semibold text-lg mb-4">General</h2>
                  <div className="bg-white rounded-lg p-4 space-y-4">
                    <FeatureItem icon={<Key />} title="Utilities" description="Renter is Responsible" />
                    <FeatureItem icon={<Dog />} title="Pets Policy" description="Pets Allowed" />
                    <FeatureItem icon={<Building />} title="Property Fees" description="No" />
                  </div>
                </section>

                <section>
                  <h2 className="font-semibold text-lg mb-4">Sizes</h2>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <SizeItem icon={<Building />} value="80sqft" />
                    <SizeItem icon={<BedDouble />} value="2 bed" />
                    <SizeItem icon={<Bath />} value="1 bath" />
                  </div>
                </section>

                <section>
                  <h2 className="font-semibold text-lg mb-4">Nearby Places</h2>
                  <div className="bg-white rounded-lg p-4 grid grid-cols-3 gap-2 sm:gap-4">
                    <NearbyItem icon={<School />} label="School" />
                    <NearbyItem icon={<Train />} label="Train Station" />
                    <NearbyItem icon={<Utensils />} label="Restaurant" />
                  </div>
                </section>

                <section className="bg-white rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span className="text-sm sm:text-base text-gray-600">011 567 9899</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">Contact Agent</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                    />
                    <button className="w-full bg-orange-500 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base">
                      Send Message
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="text-gray-600">
      {icon}
    </div>
    <div>
      <div className="font-medium text-sm sm:text-base">{title}</div>
      <div className="text-xs sm:text-sm text-gray-600">{description}</div>
    </div>
  </div>
);

const SizeItem = ({ icon, value }) => (
  <div className="bg-white rounded-lg p-2 sm:p-3 flex items-center gap-2">
    <span className="text-gray-600">{icon}</span>
    <span className="text-xs sm:text-sm">{value}</span>
  </div>
);

const NearbyItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-1 sm:gap-2">
    <span className="text-gray-600">{icon}</span>
    <span className="text-xs sm:text-sm text-center">{label}</span>
  </div>
);

export default PropertyDetails;
