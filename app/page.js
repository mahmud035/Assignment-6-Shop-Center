import Contact from './components/home/Contact';
import HeroSection from './components/home/HeroSection';
import Products from './components/home/Products';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';

export const metadata = {
  title: 'Home',
  description: 'ShopCenter home page description',
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main>
        <Products />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
