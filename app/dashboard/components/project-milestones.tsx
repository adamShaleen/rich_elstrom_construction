import { Check, Circle, Clock } from "lucide-react";
import { formatDate } from "@/app/lib/client-projects";
import type { Milestone, MilestoneStatus } from "@/app/types/client-project";

interface ProjectMilestonesProps {
  milestones: Milestone[];
}

const StatusIcon = ({ status }: { status: MilestoneStatus }) => {
  switch (status) {
    case "completed":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <Check className="h-4 w-4 text-green-600" />
        </div>
      );
    case "in-progress":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
          <Clock className="h-4 w-4 text-blue-600" />
        </div>
      );
    case "upcoming":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
          <Circle className="h-4 w-4 text-slate-400" />
        </div>
      );
  }
};

const statusStyles: Record<MilestoneStatus, string> = {
  completed: "text-green-600",
  "in-progress": "text-blue-600",
  upcoming: "text-slate-400"
};

const statusLabels: Record<MilestoneStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Upcoming"
};

export const ProjectMilestones = ({ milestones }: ProjectMilestonesProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Project Milestones
      </h2>

      <div className="mt-6">
        <div className="relative">
          {milestones.map((milestone, index) => {
            const isLast = index === milestones.length - 1;

            return (
              <div key={milestone.id} className="relative flex gap-4 pb-8">
                {!isLast && (
                  <div className="absolute top-8 left-4 h-full w-px -translate-x-1/2 bg-slate-200" />
                )}

                <StatusIcon status={milestone.status} />

                <div className="flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-medium text-slate-900">
                      {milestone.name}
                    </h3>
                    <span
                      className={`text-xs font-medium ${statusStyles[milestone.status]}`}
                    >
                      {statusLabels[milestone.status]}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    {milestone.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {milestone.status === "completed" && milestone.completedDate
                      ? `Completed ${formatDate(milestone.completedDate)}`
                      : `Scheduled ${formatDate(milestone.date)}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
