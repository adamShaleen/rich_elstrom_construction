import type { ClientProject } from "@/app/types/client-project";

const clientProjects: ClientProject[] = [
  {
    id: "proj-001",
    clientId: "1",
    name: "Oceanview Custom Home",
    address: "1847 Pacific Drive",
    city: "Cannon Beach",
    state: "OR",
    description:
      "A stunning 3,200 sq ft custom home with panoramic ocean views, featuring sustainable materials and energy-efficient design throughout.",
    startDate: "2025-09-15",
    estimatedCompletion: "2026-06-30",
    currentPhase: "framing",
    progressPercent: 35,
    contractAmount: 1250000,
    squareFootage: 3200,
    projectManager: "Rich Elstrom",
    projectManagerPhone: "(503) 738-0274",
    projectManagerEmail: "diane@richelstromconstruction.com",
    milestones: [
      {
        id: "ms-1",
        name: "Project Kickoff",
        description: "Contract signed and initial planning complete",
        status: "completed",
        date: "2025-09-15",
        completedDate: "2025-09-15"
      },
      {
        id: "ms-2",
        name: "Permits Approved",
        description: "All building permits obtained from Clatsop County",
        status: "completed",
        date: "2025-10-01",
        completedDate: "2025-10-08"
      },
      {
        id: "ms-3",
        name: "Site Preparation",
        description: "Land cleared, graded, and utilities connected",
        status: "completed",
        date: "2025-10-15",
        completedDate: "2025-10-20"
      },
      {
        id: "ms-4",
        name: "Foundation Complete",
        description: "Concrete foundation poured and cured",
        status: "completed",
        date: "2025-11-01",
        completedDate: "2025-11-05"
      },
      {
        id: "ms-5",
        name: "Framing Complete",
        description: "Structural framing and roof trusses installed",
        status: "in-progress",
        date: "2025-12-15",
        completedDate: null
      },
      {
        id: "ms-6",
        name: "Rough-In Complete",
        description: "Electrical, plumbing, and HVAC rough-in inspected",
        status: "upcoming",
        date: "2026-01-30",
        completedDate: null
      },
      {
        id: "ms-7",
        name: "Drywall & Interior",
        description: "Interior walls, ceilings, and initial finishes",
        status: "upcoming",
        date: "2026-03-01",
        completedDate: null
      },
      {
        id: "ms-8",
        name: "Final Finishes",
        description: "Cabinets, fixtures, flooring, and paint",
        status: "upcoming",
        date: "2026-05-01",
        completedDate: null
      },
      {
        id: "ms-9",
        name: "Final Inspection",
        description: "Certificate of occupancy obtained",
        status: "upcoming",
        date: "2026-06-15",
        completedDate: null
      },
      {
        id: "ms-10",
        name: "Project Handover",
        description: "Keys delivered and final walkthrough complete",
        status: "upcoming",
        date: "2026-06-30",
        completedDate: null
      }
    ],
    recentUpdates: [
      {
        id: "upd-1",
        date: "2026-01-14",
        title: "Framing Progress Update",
        description:
          "Second floor framing is 80% complete. Roof trusses scheduled for delivery next week. Weather has been cooperative.",
        author: "Rich Elstrom"
      },
      {
        id: "upd-2",
        date: "2026-01-07",
        title: "Window Order Confirmed",
        description:
          "Custom Marvin windows have been ordered and are expected to arrive mid-February. Lead time is 6 weeks.",
        author: "Rich Elstrom"
      },
      {
        id: "upd-3",
        date: "2025-12-20",
        title: "Framing Inspection Passed",
        description:
          "First floor framing passed inspection. Moving forward with second floor construction after the holiday break.",
        author: "Rich Elstrom"
      }
    ],
    documents: [
      {
        id: "doc-1",
        name: "Construction Contract",
        category: "contract",
        description: "Signed construction agreement and terms",
        fileName: "construction-contract-signed.pdf",
        fileSize: 2456000,
        fileType: "application/pdf",
        uploadedAt: "2025-09-15",
        url: "#"
      },
      {
        id: "doc-2",
        name: "Architectural Plans",
        category: "plans",
        description: "Complete architectural drawings and floor plans",
        fileName: "oceanview-architectural-plans.pdf",
        fileSize: 15780000,
        fileType: "application/pdf",
        uploadedAt: "2025-09-10",
        url: "#"
      },
      {
        id: "doc-3",
        name: "Structural Engineering Plans",
        category: "plans",
        description: "Structural engineering drawings and calculations",
        fileName: "structural-engineering.pdf",
        fileSize: 8920000,
        fileType: "application/pdf",
        uploadedAt: "2025-09-12",
        url: "#"
      },
      {
        id: "doc-4",
        name: "Building Permit",
        category: "permits",
        description: "Clatsop County building permit approval",
        fileName: "building-permit-approved.pdf",
        fileSize: 1245000,
        fileType: "application/pdf",
        uploadedAt: "2025-10-08",
        url: "#"
      },
      {
        id: "doc-5",
        name: "Electrical Permit",
        category: "permits",
        description: "Electrical work permit",
        fileName: "electrical-permit.pdf",
        fileSize: 890000,
        fileType: "application/pdf",
        uploadedAt: "2025-10-08",
        url: "#"
      },
      {
        id: "doc-6",
        name: "Plumbing Permit",
        category: "permits",
        description: "Plumbing work permit",
        fileName: "plumbing-permit.pdf",
        fileSize: 756000,
        fileType: "application/pdf",
        uploadedAt: "2025-10-08",
        url: "#"
      },
      {
        id: "doc-7",
        name: "Interior Specifications",
        category: "specifications",
        description:
          "Detailed specifications for interior finishes, fixtures, and materials",
        fileName: "interior-specifications.pdf",
        fileSize: 4560000,
        fileType: "application/pdf",
        uploadedAt: "2025-09-20",
        url: "#"
      },
      {
        id: "doc-8",
        name: "Window Schedule",
        category: "specifications",
        description: "Marvin window specifications and schedule",
        fileName: "window-schedule.pdf",
        fileSize: 2340000,
        fileType: "application/pdf",
        uploadedAt: "2025-11-15",
        url: "#"
      },
      {
        id: "doc-9",
        name: "Change Order #1",
        category: "change-order",
        description: "Added covered deck extension - approved",
        fileName: "change-order-001.pdf",
        fileSize: 456000,
        fileType: "application/pdf",
        uploadedAt: "2025-11-20",
        url: "#"
      }
    ],
    photos: [
      {
        id: "photo-1",
        url: "/images/projects/cannon-beach-zero-energy/featured.jpg",
        caption: "Site preparation complete - ready for foundation",
        phase: "site-prep",
        takenAt: "2025-10-20"
      },
      {
        id: "photo-2",
        url: "/images/projects/oswald-west-cabin/featured.jpg",
        caption: "Foundation forms in place",
        phase: "foundation",
        takenAt: "2025-10-28"
      },
      {
        id: "photo-3",
        url: "/images/hero/Oswald-Home.jpg",
        caption: "Foundation poured and curing",
        phase: "foundation",
        takenAt: "2025-11-02"
      },
      {
        id: "photo-4",
        url: "/images/projects/cannon-beach-cottage/featured.jpg",
        caption: "First floor framing underway",
        phase: "framing",
        takenAt: "2025-11-15"
      },
      {
        id: "photo-5",
        url: "/images/hero/CannonBeachCottage-exterior.jpg",
        caption: "Exterior framing progress",
        phase: "framing",
        takenAt: "2025-12-01"
      },
      {
        id: "photo-6",
        url: "/images/gallery/exterior-finishes/board-bat-siding.jpg",
        caption: "Second floor framing complete",
        phase: "framing",
        takenAt: "2025-12-10"
      },
      {
        id: "photo-7",
        url: "/images/gallery/ceiling-corbels/ceiling.jpg",
        caption: "Interior ceiling structure",
        phase: "framing",
        takenAt: "2025-12-18"
      },
      {
        id: "photo-8",
        url: "/images/gallery/interior-finishes/entryway.jpg",
        caption: "Entryway framing detail",
        phase: "framing",
        takenAt: "2026-01-05"
      },
      {
        id: "photo-9",
        url: "/images/gallery/fireplace-mantles/exterior-fireplace.jpg",
        caption: "Fireplace rough-in location",
        phase: "framing",
        takenAt: "2026-01-10"
      }
    ]
  }
];

export const getClientProjects = (clientId: string): ClientProject[] => {
  return clientProjects.filter((project) => project.clientId === clientId);
};

export const getClientProject = (
  clientId: string,
  projectId: string
): ClientProject | undefined => {
  return clientProjects.find(
    (project) => project.clientId === clientId && project.id === projectId
  );
};

export const formatPhase = (phase: string): string => {
  const phaseNames: Record<string, string> = {
    planning: "Planning & Design",
    permits: "Permitting",
    "site-prep": "Site Preparation",
    foundation: "Foundation",
    framing: "Framing",
    roofing: "Roofing",
    electrical: "Electrical",
    plumbing: "Plumbing",
    hvac: "HVAC",
    insulation: "Insulation",
    drywall: "Drywall",
    interior: "Interior Finishes",
    exterior: "Exterior Finishes",
    landscaping: "Landscaping",
    "final-inspection": "Final Inspection",
    complete: "Complete"
  };

  return phaseNames[phase] || phase;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export const formatDocumentCategory = (category: string): string => {
  const categoryNames: Record<string, string> = {
    contract: "Contract",
    plans: "Plans",
    permits: "Permits",
    specifications: "Specifications",
    "change-order": "Change Order",
    invoice: "Invoice",
    other: "Other"
  };

  return categoryNames[category] || category;
};
