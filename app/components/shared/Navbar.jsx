import Image from 'next/image';
import Link from 'next/link';
import LWSLogo from '../../../public/assets/lws-logo-black.svg';
import Avatar from '../../../public/assets/svg/avatar.svg';
import MenuIcon from '../../../public/assets/svg/menu.svg';
import ShoppingCart from '../../../public/assets/svg/shopping-Cart.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-5 mx-auto lg:w-10/12 max-w-7xl lg:py-6">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image src={MenuIcon} className="w-5 h-5 lg:hidden" alt="MenuIcon" />
          <Link href="/">
            <Image src={LWSLogo} className="h-10" alt="LWSLogo" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={Avatar}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login account avatar"
        />
        <Image
          src={ShoppingCart}
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
