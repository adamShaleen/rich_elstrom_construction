"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { formatDate, formatPhase } from "@/app/lib/client-projects";
import type { ProjectPhoto } from "@/app/types/client-project";

interface ProjectPhotosProps {
  photos: ProjectPhoto[];
}

export const ProjectPhotos = ({ photos }: ProjectPhotosProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const sortedPhotos = [...photos].sort(
    (a, b) => new Date(b.takenAt).getTime() - new Date(a.takenAt).getTime()
  );

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? sortedPhotos.length - 1 : selectedIndex - 1
    );
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === sortedPhotos.length - 1 ? 0 : selectedIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  const selectedPhoto =
    selectedIndex !== null ? sortedPhotos[selectedIndex] : null;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Photo Gallery</h2>
        <span className="text-sm text-slate-500">
          {photos.length} {photos.length === 1 ? "photo" : "photos"}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {sortedPhotos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            <Image
              src={photo.url}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {photos.length === 0 && (
        <p className="mt-4 text-sm text-slate-500">No photos available yet.</p>
      )}

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:top-4 sm:right-4 sm:p-2"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute bottom-24 left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:top-1/2 sm:bottom-auto sm:left-4 sm:-translate-y-1/2 sm:p-2"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 bottom-24 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:top-1/2 sm:bottom-auto sm:right-4 sm:-translate-y-1/2 sm:p-2"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[70vh] max-w-[95vw] sm:max-h-[80vh] sm:max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              width={1200}
              height={800}
              className="max-h-[70vh] w-auto rounded-lg object-contain sm:max-h-[80vh]"
            />

            <div className="absolute right-0 bottom-0 left-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
              <p className="text-sm text-white sm:text-base">
                {selectedPhoto.caption}
              </p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                {formatPhase(selectedPhoto.phase)} •{" "}
                {formatDate(selectedPhoto.takenAt)}
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 sm:text-sm">
            {selectedIndex !== null && selectedIndex + 1} of{" "}
            {sortedPhotos.length}
          </div>
        </div>
      )}
    </div>
  );
};
