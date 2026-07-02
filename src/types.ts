import { LucideIcon } from "lucide-react";

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
