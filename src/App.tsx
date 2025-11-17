import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import NewArrivals from './components/NewArrivals';
import TrendingProducts from './components/TrendingProducts';
import Lookbook from './components/Lookbook';
import Reviews from './components/Reviews';
import About from './components/About';
import WhatsAppBanner from './components/WhatsAppBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <TrendingProducts />
      <Lookbook />
      <Reviews />
      <About />
      <WhatsAppBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
