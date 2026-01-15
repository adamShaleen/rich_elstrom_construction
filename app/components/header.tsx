import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/texture-gallery", label: "Texture Gallery" },
  { href: "/certifications", label: "Certifications" }
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
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
            href="mailto:diane@richelstromconstruction.com"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            diane@richelstromconstruction.com
          </a>

          <span className="text-white/30">|</span>

          <a
            href="tel:503-738-0274"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            (503) 738-0274
          </a>
        </div>

        <button className="text-white md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};
