import { LayoutDashboard, FilePlus, Briefcase } from "lucide-react";
// interface BrandNavInterface {
//   label: string;
//   path: string;
//   icon: React.ReactNode;
// }
export const RouteLink = [
  { label: "Dashboard", path: "/home", icon: <LayoutDashboard /> },
  { label: "Add Job", path: "/createTask", icon: <FilePlus /> },
  { label: "Jobs", path: "/jobs", icon: <Briefcase /> },
];
