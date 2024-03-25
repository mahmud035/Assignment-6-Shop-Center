import CategoryList from '../components/category/CategoryList';
import Contact from '../components/home/Contact';
import HeroSection from '../components/home/HeroSection';
import Footer from '../components/shared/Footer';

const CategoryLayout = ({ children }) => {
  return (
    <>
      <HeroSection />
      <main id="main">
        <section className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
          {/* Sidebar */}
          <CategoryList />
          {children}
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default CategoryLayout;
