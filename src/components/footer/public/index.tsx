"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../../assets/instagram.png";
import vk from "../../../assets/vk.png";
import telegram from "../../../assets/telegram.png";

const montserrat = Montserrat({ subsets: ["latin"] });

const PublicFooter = () => {
  return (
    <footer className={montserrat.className}>
      <div className="bg-sky-950 mt-5">
        <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className=" py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl text-sky-600 font-bold">VODIY PARFUME</h2>
            </Link>
          </div>
        </div>
        <div className="text-center pb-6">
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 my-3">
            <Link
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image src={instagram} alt="instagram" width={30} height={30} />
            </Link>

            <Link
              href="https://www.vk.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image src={vk} alt="vk" width={30} height={30} />
            </Link>

            <Link
              href="https://web.telegram.org"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image src={telegram} alt="telegram" width={30} height={30} />
            </Link>
          </div>
          <span className="text-white">
            © 2023 Vodiy Parfume . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
