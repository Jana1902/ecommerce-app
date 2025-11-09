import Logo from "../assets/Logo.png";
import {
  Search,
  Menu,
  Heart,
  ShoppingBag,
  LayoutDashboard,
  UserRound,
  ChevronDown,
  X,
} from "lucide-react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const displayList = () => (
    <div
      className={`absolute h-screen w-[40%] bg-gray-100 p-0 py-4 px-2 shadow-2xl transform transition-transform duration-500 ease-in-out z-10
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
        <div className="flex justify-end" onClick={() => setMenuOpen(!menuOpen)}><X className="hover:bg-gray-300 p-1 rounded-sm" size={28} /></div>
      <ul className="space-y-4 text-lg text-gray-800 p-0">
        <li className="hover:text-gray-500 cursor-pointer transition-colors duration-200 sidebar-menu-item">
          Home
        </li>
        <li className="hover:text-gray-500 cursor-pointer transition-colors duration-200 sidebar-menu-item">
          Shop
        </li>
        <li className="hover:text-gray-500 cursor-pointer transition-colors duration-200 sidebar-menu-item">
          About
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <div className="h-6 md:h-8 flex justify-around items-center bg-black">
        <div className="flex items-center gap-x-1.5 font-normal">
          <LayoutDashboard
            strokeWidth={1.5}
            className="h-3.5 w-3.5 text-[#EB4C6B]"
          />
          <p className="text-xs md:text-[14px] text-[#EB4C6B]">
            All in One Store
          </p>
        </div>
        <div className="hidden md:flex items-center gap-x-1.5 font-normal">
          <LayoutDashboard
            strokeWidth={1.5}
            className="h-3.5 w-3.5 text-[#EB4C6B]"
          />
          <p className="text-xs md:text-[14px] text-[#EB4C6B]">
            All in One Store
          </p>
        </div>
        <div className="hidden md:flex items-center gap-x-1.5 font-normal">
          <LayoutDashboard
            strokeWidth={1.5}
            className="h-3.5 w-3.5 text-[#EB4C6B]"
          />
          <p className="text-xs md:text-[14px] text-[#EB4C6B]">
            All in One Store
          </p>
        </div>
      </div>
      {displayList()}
      <nav className="flex items-center justify-between h-[8.5vh] md:h-[10vh] w-full bg-white shadow-sm p-2 md:px-16">
        <div className="flex items-center justify-start w-1/3 gap-x-1.5 md:gap-x-4">
          <span>
            <Menu
              strokeWidth={1}
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </span>
          <Link to="/">
            <img src={Logo} alt="logo" className="h-5 w-5 md:h-9 md:w-9" />
          </Link>
        </div>
        <div className="text-center w-1/3">
          <h1 className="text-[20px] md:text-[36px] font-bold leading-6 tracking-widest md:tracking-[1px]">
            ARRIVE
          </h1>
        </div>
        <ul className="flex justify-end w-1/3 gap-x-1.5 md:gap-x-5">
          <li>
            <Search strokeWidth={1} className="h-5 w-5 md:h-6 md:w-6" />
          </li>
          <li>
            <Link to="/wishlist">
              <Heart strokeWidth={1} className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingBag strokeWidth={1} className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <UserRound
                strokeWidth={1}
                className="hidden md:flex h-5 w-5 md:h-6 md:w-6"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <ChevronDown
                strokeWidth={1}
                className="hidden md:flex h-5 w-5 md:h-6 md:w-6"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
