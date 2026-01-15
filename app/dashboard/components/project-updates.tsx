import { MessageSquare } from "lucide-react";
import { formatDate } from "@/app/lib/client-projects";
import type { ProjectUpdate } from "@/app/types/client-project";

interface ProjectUpdatesProps {
  updates: ProjectUpdate[];
}

export const ProjectUpdates = ({ updates }: ProjectUpdatesProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">Recent Updates</h2>

      <div className="mt-6 space-y-6">
        {updates.map((update) => (
          <div
            key={update.id}
            className="border-b border-slate-100 pb-6 last:border-0 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <MessageSquare className="h-5 w-5 text-slate-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-medium text-slate-900">{update.title}</h3>
                  <span className="text-xs text-slate-500">
                    {formatDate(update.date)}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  {update.description}
                </p>

                <p className="mt-2 text-xs text-slate-500">— {update.author}</p>
              </div>
            </div>
          </div>
        ))}

        {updates.length === 0 && (
          <p className="text-sm text-slate-500">No updates yet.</p>
        )}
      </div>
    </div>
  );
};
