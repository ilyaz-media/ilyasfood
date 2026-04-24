import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar({ openCart, setOpenCart, cart, setCart }) {
  const [openBar, setOpenBar] = useState(false);

  return (
    <div>
      <nav className="flex justify-between bg-white py-5 px-10 items-center   duration-500 fixed top-0 left-0 w-full z-20">
        <div className="text-2xl font-bold text-orange-400">Warung Geprek</div>
        <div className="flex gap-10 hidden md:flex items-center">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
            <button onClick={() => setOpenCart(true)}>
              <FaCartShopping />
            </button>
            <a
              href="#info"
              className=" px-5 py-2 rounded-lg shadow-lg text-white bg-orange-400">
              Contact
            </a>
        </div>
        <div className="flex gap-5 md:hidden  ">
          <button onClick={() => setOpenCart(true)}>
              <FaCartShopping />
            </button>
          <button
            className="md:hidden flex gap-5"
            onClick={() => setOpenBar(!openBar)}>
            {openBar ? <FaTimes /> : <FaBars />}
          </button>
           
        </div>
        {/* </div> */}
      </nav>
      {openBar && (
        <div className="fixed bg-white p-10 mt-[10%] w-full z-10 flex flex-col gap-3">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a
            href="#info"
            className=" px-5 py-2 rounded-lg shadow-lg text-white bg-orange-400">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
