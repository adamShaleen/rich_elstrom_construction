import { Building2, Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import {
  formatCurrency,
  formatDate,
  formatPhase
} from "@/app/lib/client-projects";
import type { ClientProject } from "@/app/types/client-project";

interface ProjectOverviewProps {
  project: ClientProject;
}

export const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {project.name}
          </h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            {project.address}, {project.city}, {project.state}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
          {formatPhase(project.currentPhase)}
        </span>
      </div>

      <p className="mt-4 text-slate-600">{project.description}</p>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Overall Progress</span>
          <span className="font-medium text-slate-900">
            {project.progressPercent}%
          </span>
        </div>

        <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${project.progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
            <Calendar className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Start Date</p>
            <p className="text-sm font-medium text-slate-900">
              {formatDate(project.startDate)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
            <Calendar className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Est. Completion</p>
            <p className="text-sm font-medium text-slate-900">
              {formatDate(project.estimatedCompletion)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
            <Building2 className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Square Footage</p>
            <p className="text-sm font-medium text-slate-900">
              {project.squareFootage.toLocaleString()} sq ft
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
            <Building2 className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Contract Value</p>
            <p className="text-sm font-medium text-slate-900">
              {formatCurrency(project.contractAmount)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-6">
        <h3 className="text-sm font-medium text-slate-900">Project Manager</h3>

        <div className="mt-3 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <User className="h-4 w-4" />
            {project.projectManager}
          </div>
          <a
            href={`tel:${project.projectManagerPhone}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <Phone className="h-4 w-4" />
            {project.projectManagerPhone}
          </a>
          <a
            href={`mailto:${project.projectManagerEmail}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <Mail className="h-4 w-4" />
            {project.projectManagerEmail}
          </a>
        </div>
      </div>
    </div>
  );
};
