import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  featuredImage: string;
  images: string[];
  content: string;
}

const parseMarkdown = async (content: string): Promise<string> => {
  const result = await remark().use(html).process(content);

  return result.toString();
};

export const getProjects = async (): Promise<Project[]> => {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projectPromises = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const htmlContent = await parseMarkdown(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        location: data.location,
        category: data.category,
        featuredImage: data.featuredImage,
        images: data.images || [],
        content: htmlContent
      } as Project;
    });

  const projects = await Promise.all(projectPromises);

  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getProjectBySlug = async (
  slug: string
): Promise<Project | undefined> => {
  const projects = await getProjects();

  return projects.find((project) => project.slug === slug);
};

export const getProjectSlugs = (): string[] => {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
};
