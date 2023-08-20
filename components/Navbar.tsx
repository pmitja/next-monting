"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-6 flex justify-between items-center max-w-[92%] mx-auto">
      <div>
        <Image
          src="/images/logo.png"
          alt="Monting logo"
          width={40}
          height={40}
        />
      </div>
      <div
        className={`md:static absolute bg-white md:min-h-fit min-h-[26vh] left-0 ${
          isMobileMenuOpen ? "top-[9%]" : "top-[-100%]"
        } md:w-auto w-full flex items-center px-5 md:px-6`}
      >
        <ul className="flex md:flex-row flex-col md:items-center gap-6 md:gap-8">
          <li>
            <Link className="text-black font-medium" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-400 hover:text-black font-medium"
              href="/about"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-400 hover:text-black font-medium"
              href="/team"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-400 hover:text-black font-medium"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Button className="uppercase rounded-full px-7 bg-[#f70000]">
              Hire us
            </Button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          type="button"
        >
          {!isMobileMenuOpen ? <Menu size={32} /> : <X size={32} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
