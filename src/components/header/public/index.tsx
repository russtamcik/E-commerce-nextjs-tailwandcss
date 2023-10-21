"use client";

// import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/navbar/public/Navbar";

const PublicHeader = () => {
  // const router = useRouter();
  // const pathName = usePathname();

  return (
    <header className="flex justify-between bg-sky">
      <Navbar />
    </header>
  );
};

export default PublicHeader;
