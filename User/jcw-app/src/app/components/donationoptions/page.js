'use client';
import { useRouter } from 'next/navigation';
import Footer from "../footer/page";
import NavBar from "../navbar/page";
import "@/app/ui/donationoptions/donationoptions.css";

const DonationCard = ({ title, quote, author, imageName, donationLink }) => {
  const router = useRouter();

  const handleDonation = () => {
    router.push(donationLink);
  };

  return (
    <div 
      className="donation-card" 
      onClick={handleDonation}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleDonation();
        }
      }}
    >
      <div className={`donation-image ${imageName}`} />
      <div className="donation-content">
        <h2>{title}</h2>
        <div className="divider" />
        <blockquote>
          <p>{quote}</p>
          <footer>— {author}</footer>
        </blockquote>
      </div>
      <div className="donation-button">
        Donate Now
      </div>
    </div>
  );
};

function DonationOptions() {
  const router = useRouter();

  const donationTypes = [
    {
      title: "Monetary Donations",
      quote: "No act of kindness, no matter how small, is ever wasted.",
      author: "Aesop",
      imageName: "monetary",
      donationLink: "/components/payment"
    },
    {
      title: "Service Donation",
      quote: "The best way to find yourself, is to lose yourself in the service of others.",
      author: "Mahatma Gandhi",
      imageName: "service",
      donationLink: "/components/servicedonation"
    },
    {
      title: "Goods Donation",
      quote: "We make a living by what we get, but we make a life by what we give.",
      author: "Winston Churchill",
      imageName: "goods",
      donationLink: "/components/goodsdonation"
    }
  ];

  const handleOtherDonations = (e) => {
    e.preventDefault();
    router.push("https://jhbchildwelfare.org.za/get-involved/");
  };

  return (
    <div className="page-container">
      <NavBar />
      <main className="donation-options">
        <div className="donations-grid">
          {donationTypes.map((donation, index) => (
            <DonationCard key={index} {...donation} />
          ))}
        </div>
        <div className="other-donations">
          <button 
            className="text-button"
            onClick={handleOtherDonations}
          >
            Discover Other Ways To Donate
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DonationOptions;