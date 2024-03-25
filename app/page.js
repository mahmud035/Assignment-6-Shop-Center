import Contact from './components/home/Contact';
import HeroSection from './components/home/HeroSection';
import Products from './components/home/Products';
import Footer from './components/shared/Footer';

export const metadata = {
  title: 'ShopCenter | Home',
  description: 'ShopCenter home page description',
};

const HomePage = () => {
  return (
    <>
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
