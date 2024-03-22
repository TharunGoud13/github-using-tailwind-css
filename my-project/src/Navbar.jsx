import { useState } from "react";
import navLinks from "./assets/navLinks";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="flex py-6  cursor-pointer justify-between items-center bg-auto   w-full content-center   p-[10px]  pl-[30px] navbar ">
      <a href="https://www.github.com" target="_blank">
        <img
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          alt="git"
          className="w-[40px] rounded-full hover:animate-ping "
        />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className=" font-mono  hover:font-bold hover:text-blue-500 text-lg mr-5 pl-[8px] font-sm"
          >
            {nav.title}
          </li>
        ))}
      </ul>
      <div className="sm:hidden text-slate-600 font-mono flex flex-1 justify-end items-center">
        <img
          src={
            toggle
              ? "https://www.citypng.com/public/uploads/preview/png-close-x-logo-white-icon-31631914840uc9joqwssz.png"
              : "https://www.shutterstock.com/image-vector/menu-modern-flat-icon-260nw-242284819.jpg"
          }
          alt="menu"
          className="w-[28px] h-[28px] object-contain rounded"
          onClick={() => settoggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white absolute top-20 right-0 mx-4 mt-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col hover:text-blue-500  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="font-mono mr-2 pl-[8px] font-sm">
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
