export type ProjectPhase =
  | "planning"
  | "permits"
  | "site-prep"
  | "foundation"
  | "framing"
  | "roofing"
  | "electrical"
  | "plumbing"
  | "hvac"
  | "insulation"
  | "drywall"
  | "interior"
  | "exterior"
  | "landscaping"
  | "final-inspection"
  | "complete";

export type MilestoneStatus = "completed" | "in-progress" | "upcoming";

export interface Milestone {
  id: string;
  name: string;
  description: string;
  status: MilestoneStatus;
  date: string;
  completedDate: string | null;
}

export interface ProjectUpdate {
  id: string;
  date: string;
  title: string;
  description: string;
  author: string;
}

export type DocumentCategory =
  | "contract"
  | "plans"
  | "permits"
  | "specifications"
  | "change-order"
  | "invoice"
  | "other";

export interface ProjectDocument {
  id: string;
  name: string;
  category: DocumentCategory;
  description: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedAt: string;
  url: string;
}

export interface ProjectPhoto {
  id: string;
  url: string;
  caption: string;
  phase: ProjectPhase;
  takenAt: string;
}

export interface ClientProject {
  id: string;
  clientId: string;
  name: string;
  address: string;
  city: string;
  state: string;
  description: string;
  startDate: string;
  estimatedCompletion: string;
  currentPhase: ProjectPhase;
  progressPercent: number;
  milestones: Milestone[];
  recentUpdates: ProjectUpdate[];
  documents: ProjectDocument[];
  photos: ProjectPhoto[];
  contractAmount: number;
  squareFootage: number;
  projectManager: string;
  projectManagerPhone: string;
  projectManagerEmail: string;
}
