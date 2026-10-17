import type { Metadata } from "next";
import BPharmSemesterSelector from "@/components/BPharmSemesterSelector";

export const metadata: Metadata = {
  title: "Old B.Pharm Syllabus — Semester I–VIII | Milton's Pharma",
  description:
    "Browse Old B.Pharm syllabus subjects semester-wise, with course codes, theory and practical classifications.",
};

export default function OldBPharmPage() {
  return (
    <BPharmSemesterSelector
      syllabus="old-pci"
      title="B.Pharm — Old PCI Syllabus"
      description="Browse the previous B.Pharm curriculum semester by semester. Find subjects by their official course codes and distinguish theory, practical and elective courses."
    />
  );
}