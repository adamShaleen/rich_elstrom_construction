import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactCta } from "../components/contact-cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { getProjects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Project Showcase | Rich Elstrom Construction",
  description:
    "Browse our portfolio of luxury custom homes, additions, and remodels on the Oregon coast. See examples of our craftsmanship and attention to detail."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                Our Work
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Project Showcase
              </h1>

              <p className="mt-6 text-xl text-slate-600">
                Explore our portfolio of custom homes, additions, and remodels
                built along the Oregon coast.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {projects.length === 0 ? (
              <p className="text-center text-slate-500">
                Projects coming soon.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group"
                  >
                    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-lg">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={project.featuredImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      <div className="p-6">
                        <p className="text-sm font-medium text-slate-500">
                          {project.category}
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-slate-700">
                          {project.title}
                        </h2>

                        <p className="mt-2 text-slate-600">
                          {project.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
