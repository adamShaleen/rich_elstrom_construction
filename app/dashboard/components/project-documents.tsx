import { Download, FileText } from "lucide-react";
import {
  formatDate,
  formatDocumentCategory,
  formatFileSize
} from "@/app/lib/client-projects";
import type {
  DocumentCategory,
  ProjectDocument
} from "@/app/types/client-project";

interface ProjectDocumentsProps {
  documents: ProjectDocument[];
}

const categoryColors: Record<DocumentCategory, string> = {
  contract: "bg-purple-100 text-purple-700",
  plans: "bg-blue-100 text-blue-700",
  permits: "bg-green-100 text-green-700",
  specifications: "bg-amber-100 text-amber-700",
  "change-order": "bg-orange-100 text-orange-700",
  invoice: "bg-slate-100 text-slate-700",
  other: "bg-slate-100 text-slate-700"
};

export const ProjectDocuments = ({ documents }: ProjectDocumentsProps) => {
  const groupedDocuments = documents.reduce(
    (acc, doc) => {
      const category = doc.category;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(doc);

      return acc;
    },
    {} as Record<DocumentCategory, ProjectDocument[]>
  );

  const categoryOrder: DocumentCategory[] = [
    "contract",
    "plans",
    "permits",
    "specifications",
    "change-order",
    "invoice",
    "other"
  ];

  const sortedCategories = categoryOrder.filter(
    (cat) => groupedDocuments[cat]?.length > 0
  );

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Documents</h2>
        <span className="text-sm text-slate-500">
          {documents.length} {documents.length === 1 ? "file" : "files"}
        </span>
      </div>

      <div className="mt-6 space-y-6">
        {sortedCategories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 text-sm font-medium text-slate-700">
              {formatDocumentCategory(category)}
            </h3>

            <div className="space-y-2">
              {groupedDocuments[category].map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 p-3 transition-colors hover:border-slate-200 hover:bg-slate-50 sm:items-center sm:gap-4 sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                    <FileText className="h-5 w-5 text-slate-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-900 sm:text-base">
                      {doc.name}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-slate-500 sm:text-sm">
                      {doc.description}
                    </p>
                    <p className="mt-1.5 text-xs text-slate-400 sm:hidden">
                      {formatFileSize(doc.fileSize)} • {formatDate(doc.uploadedAt)}
                    </p>
                  </div>

                  <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[doc.category]}`}
                    >
                      {formatDocumentCategory(doc.category)}
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatFileSize(doc.fileSize)} •{" "}
                      {formatDate(doc.uploadedAt)}
                    </span>
                  </div>

                  <Download className="h-5 w-5 shrink-0 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        ))}

        {documents.length === 0 && (
          <p className="text-sm text-slate-500">No documents available.</p>
        )}
      </div>
    </div>
  );
};
