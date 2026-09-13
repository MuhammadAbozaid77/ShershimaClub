"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import AppLinks from "./AppLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-300 bg-white">
      <div className="flex h-[90px] items-center justify-between px-5 sm:px-8 lg:h-[120px] lg:px-16 xl:px-[100px]">
        <Logo />

        {/* Desktop */}
        <div className="hidden lg:block">
          <AppLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 shadow-md lg:hidden">
          <AppLinks mobile onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}
