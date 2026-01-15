"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/texture-gallery", label: "Texture Gallery" },
  { href: "/certifications", label: "Certifications" }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-xl font-semibold tracking-tight text-white">
            Rich Elstrom Construction
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:503-738-0274"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            (503) 738-0274
          </a>

          <span className="text-white/30">|</span>

          <Link
            href="/login"
            className="flex items-center gap-1.5 text-sm text-white/90 transition-colors hover:text-white"
          >
            <LogIn className="h-4 w-4" />
            Client Login
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="text-white md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-900 md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-medium text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 border-t border-white/10" />

              <Link
                href="/login"
                onClick={closeMenu}
                className="flex items-center gap-2 text-base font-medium text-white/90 transition-colors hover:text-white"
              >
                <LogIn className="h-5 w-5" />
                Client Login
              </Link>

              <div className="my-2 border-t border-white/10" />

              <a
                href="tel:503-738-0274"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                (503) 738-0274
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
