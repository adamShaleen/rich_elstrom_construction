import type { Metadata } from "next";
import Image from "next/image";

import { ContactCta } from "../components/contact-cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { getGalleryCategories } from "../lib/gallery";

export const metadata: Metadata = {
  title: "Texture Gallery | Rich Elstrom Construction",
  description:
    "Browse our gallery of finishes, materials, and design details for custom homes. View cabinets, flooring, tile, fireplaces, and more."
};

export default function TextureGalleryPage() {
  const categories = getGalleryCategories();

  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                Design Details
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Texture Gallery
              </h1>

              <p className="mt-6 text-xl text-slate-600">
                Explore the finishes, materials, and design elements that make
                our custom homes unique.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {categories.map((category) => (
                <div key={category.slug} id={category.slug}>
                  <h2 className="mb-8 text-2xl font-bold text-slate-900">
                    {category.name}
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {category.images.map((image, index) => (
                      <div
                        key={index}
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100"
                      >
                        <Image
                          src={image}
                          alt={`${category.name} - Image ${index + 1}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
