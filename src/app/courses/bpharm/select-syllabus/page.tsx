
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Choose B.Pharm Syllabus | Milton's Pharma",
  description:
    "Select the applicable B.Pharm curriculum to explore semester-wise study resources.",
};

const systems = [
  {
    title: "NEP 2020 — New Syllabus",
    description:
      "Explore the updated B.Pharm curriculum and its semester-wise subjects.",
    href: "/courses/bpharm/nep-2020",
    label: "NEW CURRICULUM",
    icon: GraduationCap,
  },
  {
    title: "Old PCI Syllabus",
    description:
      "Continue with the previous B.Pharm curriculum and its separate resources.",
    href: "/courses/bpharm/old-pci",
    label: "PREVIOUS CURRICULUM",
    icon: BookOpen,
  },
];

export default function BPharmSyllabusSelectionPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          B.Pharm / Curriculum selection
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
          Which syllabus do you follow?
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
          Choose the curriculum applicable to your college or university.
          Your subjects, semester structure and study resources will follow
          the selected syllabus.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <Link
                key={system.title}
                href={system.href}
                className="group flex min-h-[250px] flex-col rounded-2xl border border-neutral-200 p-6 transition hover:border-black hover:shadow-sm sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-neutral-500 sm:text-xs">
                    {system.label}
                  </span>
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h2 className="mt-8 text-2xl font-semibold tracking-tight">
                  {system.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {system.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold">
                  Continue
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-7 text-xs leading-5 text-neutral-500">
          Select the syllabus followed by your institution. You can change
          your selection later.
        </p>
      </section>
    </main>
  );
}
