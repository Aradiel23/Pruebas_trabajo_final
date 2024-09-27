import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import HeroSection from '../src/components/HeroSection/HeroSection';
import ServicesSection from '../src/components/ServicesSection/ServicesSection';
import TestimonialsSection from '../src/components/TestimonialsSection/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
