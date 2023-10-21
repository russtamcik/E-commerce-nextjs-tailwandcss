import { Metadata } from "next";
import Image from "next/image";
import NajotLogo from "@/assets/najot-logo.png";

export const metadata: Metadata = {
  title: "Najot e-commerce | About",
  description: "E-commerce website About side",
};

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="py-3 border border-sky-600 text-center rounded-full text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        About
      </h1>
      <Image src={NajotLogo} alt="Najot logo" width={400} />
      <Image
        src="https://uploads-ssl.webflow.com/62361b0ee9fbf8a744598959/62be9351137b5e0541861308_Najot-logo-1.jpg"
        alt="Najot talim"
        width={400}
        height={500}
      />
    </div>
  );
};

export default About;
