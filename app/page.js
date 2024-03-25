import Contact from './components/home/Contact';
import HeroSection from './components/home/HeroSection';
import Products from './components/home/Products';

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
    </>
  );
};

export default HomePage;
