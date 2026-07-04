import { LucideIcon } from "lucide-react";

// Client-side "routes" for the single-page app.
export type View = "home" | "privacy" | "terms" | "dmca" | "contact" | "versions";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InstallStep {
  number: number;
  title: string;
  description: string;
}
