import type { Metadata } from "next";
import { ContactCta } from "../components/contact-cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Certifications | Rich Elstrom Construction",
  description:
    "View Rich Elstrom Construction's certifications and awards including NAHB Green Builder Award, Energy Trust of Oregon Solar Electric Ally, and EPA Lead-Based Paint Certification."
};

export default function CertificationsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium tracking-widest text-slate-500 uppercase">
                Credentials
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Certifications & Awards
              </h1>

              <p className="mt-6 text-xl text-slate-600">
                Our commitment to quality construction and sustainable building
                practices is recognized through industry certifications and
                awards.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  NAHB Nation Green Builder Award
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">2005</p>

                <p className="mt-4 text-slate-600">
                  Rich Elstrom Construction received recognition from the
                  National Association of Home Builders for achievements in
                  green building practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Energy Trust of Oregon Trade Ally
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Solar Electric Ally since 2005
                </p>

                <p className="mt-4 text-slate-600">
                  Recognized as a Solar Electric Ally for demonstrating
                  commitment to energy efficiency and renewable energy
                  initiatives. We have maintained trade ally status since 2005.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  EPA Lead-Based Paint Certification
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  License #LBPR37077
                </p>

                <p className="mt-4 text-slate-600">
                  Certified in lead-based paint renovation work, ensuring safe
                  practices when working on older homes that may contain
                  lead-based materials.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  National Association of Home Builders (NAHB)
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Member since 1998
                </p>

                <p className="mt-4 text-slate-600">
                  Long-standing member of the national home builders
                  association, staying connected with industry standards and
                  best practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  North Coast Builders Association
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Member since 1998
                </p>

                <p className="mt-4 text-slate-600">
                  Active member of the local builders association. Rich Elstrom
                  has served as president and currently holds the position of
                  treasurer within this organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
