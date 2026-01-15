import Link from "next/link";

const services = [
  "Custom Homes",
  "Additions & Remodels",
  "Historic Restoration",
  "Green Building"
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Project Showcase" },
  { href: "/texture-gallery", label: "Texture Gallery" }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-semibold tracking-tight text-white">
                Rich Elstrom Construction
              </span>
            </Link>

            <p className="mt-4 max-w-md text-slate-400">
              Luxury custom home builders specializing in Oregon coastal
              construction. Building long lasting homes, additions and remodels
              in ocean and near-oceanfront environments since 1998.
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-500">
              <p>NAHB Nation Green Builder Award 2005</p>
              <p>Energy Trust of Oregon Solar Electric Ally</p>
              <p>EPA Lead-Based Paint Certified</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>

            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-white">Contact</h3>
              <div className="mt-3 space-y-2 text-slate-400">
                <a href="tel:503-738-0274" className="block hover:text-white">
                  (503) 738-0274
                </a>
                <a
                  href="mailto:diane@richelstromconstruction.com"
                  className="block hover:text-white"
                >
                  diane@richelstromconstruction.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {currentYear} Rich Elstrom Construction. All rights reserved.
          </p>
          <p>Oregon Construction Contractors Board CCB #37077</p>
        </div>
      </div>
    </footer>
  );
};
