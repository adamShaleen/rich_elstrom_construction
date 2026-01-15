import type { Metadata } from "next";

import { ContactCta } from "../components/contact-cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "About | Rich Elstrom Construction",
  description:
    "Learn about Rich Elstrom Construction's approach to building long lasting homes, additions and remodels on the Oregon coast. Experienced team, time-tested methods, transparent cost tracking."
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                About Us
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Building Long Lasting Homes
              </h1>

              <p className="mt-6 text-xl text-slate-600">
                Our company is dedicated to building long lasting homes,
                additions and remodels in an ocean or near ocean front
                environment. We draw upon the years of experience of our direct
                employees, subcontractors and suppliers to provide the best
                possible quality of construction. The satisfaction of our
                customers with our work is important to us and we highly value
                their referrals to others.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Project Management
                </h2>

                <p className="mt-4 text-slate-600">
                  Our project managers supervise their job from start to finish
                  coordinating all work to provide the best possible completed
                  product.
                </p>

                <p className="mt-4 text-slate-600">
                  We do not believe in allowing subcontractors to perform their
                  work without guidance and supervision; at the same time we are
                  seeking out their best ideas and methods to complete our jobs
                  in an efficient and orderly manner.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Carpentry & Framing
                </h2>

                <p className="mt-4 text-slate-600">
                  Our employees perform carpentry starting with framing which is
                  carefully thought out to mesh with building systems and
                  equipment. We have a very good idea of the finished trim
                  designs before framework is started. Framing is carefully
                  planned for executing watertight roofing, window and siding
                  installations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Installation Methods
                </h2>

                <p className="mt-4 text-slate-600">
                  Our crews install exterior doors and windows using methods
                  that we have found to work well and continue updating as new
                  products that we trust become available. Siding is applied
                  using time tested methods.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Finish Carpentry
                </h2>

                <p className="mt-4 text-slate-600">
                  Finish carpentry is done by our crews working together as a
                  team to create a consistently high quality product.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Cost Tracking
                </h2>

                <p className="mt-4 text-slate-600">
                  Our office systems track job costing from the initial
                  estimating phases to the final job close out. We provide
                  billing by item (labor, subcontractor, supplier) and supply
                  copies of all individual invoices. Job cost are tracked each
                  month on an itemized spread sheet of approximately 35
                  divisions which shows current status of each division.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">Our Team</h2>

                <p className="mt-4 text-slate-600">
                  Overall we maintain a high level of craftsmanship by using a
                  team experienced of long term dedicated employees that take
                  pride in their work.
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
