import type{ BaseItem } from "./types";

export const seedData: Record<string, BaseItem[]> = {
  services: [
    { id: "srv-1", title: "Design & Prepress", description: "Professional prepress and print-ready designs.", status: "active" },
    { id: "srv-2", title: "Quality Inspection", description: "Advanced QA workflows.", status: "active" },
  ],
  products: [
    { id: "prd-1", title: "Folding Carton", description: "High-quality folding cartons.", status: "active", sku: "FC-001" },
    { id: "prd-2", title: "Rigid Box", description: "Premium rigid boxes.", status: "inactive", sku: "RB-200" },
  ],
  logistics: [
    { id: "log-1", title: "Warehousing", description: "Secure storage up to 3,000 m².", status: "active" },
    { id: "log-2", title: "Dispatch", description: "On-time delivery scheduling.", status: "active" },
  ],
  users: [
    { id: "usr-1", title: "Hamza Ramadan", description: "Admin", status: "active", email: "admin@example.com", role: "admin" },
    { id: "usr-2", title: "Operator", description: "Operator", status: "inactive", email: "op@example.com", role: "editor" },
  ],
};
