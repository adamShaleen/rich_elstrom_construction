import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "../../components/contact-cta";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { getProjectBySlug, getProjectSlugs } from "../../lib/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () => {
  const slugs = getProjectSlugs();

  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Rich Elstrom Construction"
    };
  }

  return {
    title: `${project.title} | Rich Elstrom Construction`,
    description: project.description
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Projects
              </Link>

              <p className="mt-6 text-sm font-medium tracking-widest text-slate-500 uppercase">
                {project.category}
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 text-lg text-slate-600">{project.location}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600">{project.description}</p>

                <div
                  className="mt-8"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </div>
            </div>
          </div>
        </section>

        {project.images.length > 0 && (
          <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold text-slate-900">
                Project Gallery
              </h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
