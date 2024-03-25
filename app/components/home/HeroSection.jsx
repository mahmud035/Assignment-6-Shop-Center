import HeaderBackground from '../../../public/assets/header.webp';

const HeroSection = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${HeaderBackground.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full"
    >
      <div className="w-10/12 mx-auto mb-5 text-white max-w-7xl">
        <h1 className="font-serif text-2xl lg:text-3xl">
          Introducing LWS Shop Center
        </h1>
        <p>Your whole week at a glance</p>
        <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
          Get the Weekly Kit
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
