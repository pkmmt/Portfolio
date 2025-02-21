import Hero from "../herosection/page";
import NewsAndUpdates from "../news&updates/page";
import Centers from "../centers/page";
import Faq from "../faq/page";
import Footer from "../footer/page";
import NavBar from "../navbar/page";
import ImpactMetrics from "../whatwedo/page";
function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <NewsAndUpdates />
      <ImpactMetrics/>
      <Centers />
      <Faq />
      <Footer />
    </>
  );
}
export default HomePage;
