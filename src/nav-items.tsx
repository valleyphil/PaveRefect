
import { HomeIcon } from "lucide-react";
import Index from "./pages/Index";

export const navItems = [
  {
    title: "Accueil",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
];
