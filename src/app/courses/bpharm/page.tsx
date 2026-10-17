
import type { Metadata } from "next";
import CourseLanding from "@/components/CourseLanding";

export const metadata: Metadata = {
  title: "B.Pharm Study Resources",
  description:
    "Explore B.Pharm subjects, study notes, practical guides and academic resources.",
};

export default function BPharmPage() {
  return (
    <CourseLanding
      title="Bachelor of Pharmacy"
      abbreviation="B.Pharm"
      duration="Undergraduate pharmacy programme"
      description="Explore pharmaceutical sciences, drug formulation, medicinal chemistry and other subject areas through an organised learning library."
      subjects={[
        "Human Anatomy and Physiology",
        "Pharmaceutical Analysis",
        "Pharmaceutics",
        "Pharmaceutical Inorganic Chemistry",
        "Communication Skills",
        "Pharmaceutical Organic Chemistry",
      ]}
    />
  );
}
