import fs from "fs";
import path from "path";

const galleryDirectory = path.join(process.cwd(), "public/images/gallery");

export interface GalleryCategory {
  slug: string;
  name: string;
  images: string[];
}

const categoryNames: Record<string, string> = {
  cabinets: "Cabinets",
  "ceiling-corbels": "Ceiling & Corbels",
  "entry-doors": "Entry Doors",
  "fireplace-mantles": "Fireplace & Mantles",
  flooring: "Flooring",
  "interior-finishes": "Interior Finishes",
  "exterior-finishes": "Exterior Finishes",
  tile: "Tile",
  "wainscot-paneling": "Wainscot & Paneling"
};

const categoryOrder = [
  "cabinets",
  "ceiling-corbels",
  "entry-doors",
  "fireplace-mantles",
  "flooring",
  "interior-finishes",
  "exterior-finishes",
  "tile",
  "wainscot-paneling"
];

const isImageFile = (fileName: string): boolean => {
  const ext = path.extname(fileName).toLowerCase();

  return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext);
};

export const getGalleryCategories = (): GalleryCategory[] => {
  const categories: GalleryCategory[] = [];

  for (const slug of categoryOrder) {
    const categoryPath = path.join(galleryDirectory, slug);

    if (
      fs.existsSync(categoryPath) &&
      fs.statSync(categoryPath).isDirectory()
    ) {
      const files = fs.readdirSync(categoryPath);

      const images = files
        .filter(isImageFile)
        .map((file) => `/images/gallery/${slug}/${file}`);

      if (images.length > 0) {
        categories.push({
          slug,
          name: categoryNames[slug] || slug,
          images
        });
      }
    }
  }

  return categories;
};
