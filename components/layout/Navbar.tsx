"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white neo-brutal-shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-black tracking-tight hover:scale-105 transition-transform">
              saini<span className="bg-secondary px-1 border-2 border-black">amit</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase transition-all hover:bg-secondary hover:underline hover:decoration-black hover:decoration-2 hover:underline-offset-4 px-2 py-1 border-2 border-transparent hover:border-black"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 border-2 border-black bg-white neo-brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black text-white p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 border-2 border-white bg-black hover:bg-white hover:text-black transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
