
import type { Metadata } from "next";
import CourseLanding from "@/components/CourseLanding";

export const metadata: Metadata = {
  title: "D.Pharm Study Resources",
  description:
    "Explore D.Pharm subject areas, practical guides and pharmacy study resources.",
};

export default function DPharmPage() {
  return (
    <CourseLanding
      title="Diploma in Pharmacy"
      abbreviation="D.Pharm"
      duration="Diploma-level pharmacy programme"
      description="Explore foundational pharmaceutical sciences, dispensing, practical work and pharmacy practice through an organised learning library."
      subjects={[
        "Pharmaceutics",
        "Pharmaceutical Chemistry",
        "Pharmacognosy",
        "Human Anatomy and Physiology",
        "Social Pharmacy",
        "Pharmacology",
      ]}
    />
  );
}
