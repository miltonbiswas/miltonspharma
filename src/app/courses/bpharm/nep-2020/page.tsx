
import type { Metadata } from "next";
import BPharmSemesterSelector from "@/components/BPharmSemesterSelector";

export const metadata: Metadata = {
  title: "B.Pharm NEP 2020 | Milton's Pharma",
  description: "Browse B.Pharm NEP 2020 semesters and study resources.",
};

export default function NewBPharmPage() {
  return (
    <BPharmSemesterSelector
      syllabus="nep-2020"
      title="B.Pharm — NEP 2020"
      description="Choose a semester to explore the new curriculum. Subject lists will follow the uploaded NEP 2020 syllabus."
    />
  );
}
