"use client";

import NavLink from "@/components/shares/NavLink";
import Image from "next/image";
import closeBtn from "../../../assets/close.png";
import hamburgBtn from "../../../assets/dots-menu.png";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className={montserrat.className}>
      <nav className="w-full bg-sky-950 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <NavLink href="/">
                <h2 className="text-2xl text-sky-600 font-bold">LOGO</h2>
              </NavLink>

              <div className="md:hidden">
                <button onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <Image src={closeBtn} width={30} alt="close" />
                  ) : (
                    <Image
                      src={hamburgBtn}
                      width={30}
                      alt="hamburg"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <NavLink href="/dashboard">Dashboard</NavLink>
                </li>
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <NavLink href="/categories">Categories</NavLink>
                </li>
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <NavLink href="/products">Products</NavLink>
                </li>
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <NavLink href="/users">Users</NavLink>
                </li>
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <NavLink href="/account">Account</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
