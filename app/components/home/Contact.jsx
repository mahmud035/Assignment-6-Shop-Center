const Contact = () => {
  return (
    <section className="bg-[#ced3ca] py-5 lg:py-16">
      <div className="w-10/12 mx-auto lg:w-4/12">
        <h1 className="my-5 font-serif text-xl italic text-center lg:text-3xl">
          Get the inside scoop
        </h1>
        <p className="text-sm text-center lg:text-base">
          Sign up for new product drops, behind-the-scenes content, and monthly
          5 Things I`m Digging emails
        </p>
        <form action="#" className="mb-5">
          <input
            type="text"
            className="w-full p-3 mt-10 border border-black focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
            See what we`re doing
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
