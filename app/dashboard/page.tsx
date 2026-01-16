import Link from "next/link";
import { redirect } from "next/navigation";
import { verifySession } from "@/app/lib/auth";
import { getClientProjects } from "@/app/lib/client-projects";
import {
  ProjectDocuments,
  ProjectMilestones,
  ProjectOverview,
  ProjectPhotos,
  ProjectUpdates
} from "./components";
import { LogoutButton } from "./logout-button";

export const metadata = {
  title: "Dashboard | Rich Elstrom Construction",
  description: "Your project portal"
};

const DashboardPage = async () => {
  const session = await verifySession();

  if (!session) {
    redirect("/login");
  }

  const projects = getClientProjects(session.userId);
  const currentProject = projects[0];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
          >
            Rich Elstrom Construction
          </Link>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-sm text-slate-600">
              Welcome, {session.name}
            </span>

            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Client Dashboard
          </h1>
          <p className="mt-1 text-slate-600">
            Track your project progress and stay updated
          </p>
        </div>

        {currentProject ? (
          <div className="space-y-8">
            <ProjectOverview project={currentProject} />

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="min-w-0">
                <ProjectMilestones milestones={currentProject.milestones} />
              </div>
              <div className="min-w-0">
                <ProjectUpdates updates={currentProject.recentUpdates} />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="min-w-0">
                <ProjectDocuments documents={currentProject.documents} />
              </div>
              <div className="min-w-0">
                <ProjectPhotos photos={currentProject.photos} />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
            <h2 className="text-lg font-semibold text-slate-900">
              No Active Projects
            </h2>
            <p className="mt-2 text-slate-600">
              You don&apos;t have any active projects at this time. Contact us
              to get started on your dream home.
            </p>
            <a
              href="mailto:diane@richelstromconstruction.com"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Contact Us
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
