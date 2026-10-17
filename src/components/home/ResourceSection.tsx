import Link from "next/link";
import {
  BookOpen,
  FileText,
  FlaskConical,
  ClipboardList,
  CircleHelp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const resources = [
  {
    title: "Study Notes",
    badge: "Core Theory",
    description:
      "Subject explanations, unit-wise notes, diagrams and foundational concepts tailored for semester examinations.",
    examples: ["Theory Notes", "Unit Summaries", "Flowcharts"],
    href: "/notes",
    icon: BookOpen,
    theme: {
      accent: "from-blue-500/10 via-indigo-500/5 to-transparent",
      border: "hover:border-blue-400 hover:shadow-blue-500/10",
      iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-blue-500/25",
      badge: "bg-blue-50 text-blue-700 border-blue-200/80",
      pill: "bg-blue-50/60 text-blue-900 border-blue-100",
      arrow: "group-hover:bg-blue-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-blue-600 to-indigo-600",
    },
  },
  {
    title: "Short Notes",
    badge: "Quick Revision",
    description:
      "High-yield summaries, formulas, drug classifications, and definitions built specifically for last-minute exam prep.",
    examples: ["Definitions", "Drug Tables", "Key Terms"],
    href: "/short-notes",
    icon: FileText,
    theme: {
      accent: "from-amber-500/10 via-orange-500/5 to-transparent",
      border: "hover:border-amber-400 hover:shadow-amber-500/10",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-500/25",
      badge: "bg-amber-50 text-amber-700 border-amber-200/80",
      pill: "bg-amber-50/60 text-amber-900 border-amber-100",
      arrow: "group-hover:bg-amber-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-amber-500 to-orange-600",
    },
  },
  {
    title: "Practical Guides",
    badge: "Lab Work",
    description:
      "Experimental principles, chemical assays, apparatus handling, and clean laboratory journal reporting formats.",
    examples: ["Aim & Principle", "Procedures", "Calculations"],
    href: "/practicals",
    icon: FlaskConical,
    theme: {
      accent: "from-emerald-500/10 via-teal-500/5 to-transparent",
      border: "hover:border-emerald-400 hover:shadow-emerald-500/10",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-emerald-500/25",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      pill: "bg-emerald-50/60 text-emerald-900 border-emerald-100",
      arrow: "group-hover:bg-emerald-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-emerald-600 to-teal-600",
    },
  },
  {
    title: "Projects & Dissertations",
    badge: "Research",
    description:
      "Formulation project outlines, synopses, standard methodologies, literature review guides, and presentation blueprints.",
    examples: ["Synopsis Drafts", "Report Format", "Review Papers"],
    href: "/projects",
    icon: ClipboardList,
    theme: {
      accent: "from-violet-500/10 via-purple-500/5 to-transparent",
      border: "hover:border-violet-400 hover:shadow-violet-500/10",
      iconBg: "bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-violet-500/25",
      badge: "bg-violet-50 text-violet-700 border-violet-200/80",
      pill: "bg-violet-50/60 text-violet-900 border-violet-100",
      arrow: "group-hover:bg-violet-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-violet-600 to-purple-600",
    },
  },
  {
    title: "Important Questions",
    badge: "Exam Bank",
    description:
      "Curated previous year university questions, 2-mark definitions, 5-mark short answers, and 10-mark essay topics.",
    examples: ["Solved Q&A", "Model Papers", "Repeated Topics"],
    href: "/questions",
    icon: CircleHelp,
    theme: {
      accent: "from-rose-500/10 via-pink-500/5 to-transparent",
      border: "hover:border-rose-400 hover:shadow-rose-500/10",
      iconBg: "bg-gradient-to-br from-rose-600 to-pink-600 text-white shadow-rose-500/25",
      badge: "bg-rose-50 text-rose-700 border-rose-200/80",
      pill: "bg-rose-50/60 text-rose-900 border-rose-100",
      arrow: "group-hover:bg-rose-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-rose-600 to-pink-600",
    },
  },
];

export default function ResourceSection() {
  return (
    <section
      id="resources"
      aria-label="Pharmacy Learning Library"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-neutral-50/40 py-16 sm:py-24"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/4 -z-10 h-72 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 -z-10 h-72 w-80 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-2xs">
              <Sparkles size={13} className="text-neutral-900" />
              <span>The Learning Library</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              What are you{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-rose-600 bg-clip-text text-transparent">
                studying today?
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            Handcrafted reference collections categorised by academic format to make
            revising, drafting, and experiment preparation effortless.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <Link
                key={resource.title}
                href={resource.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${resource.theme.border}`}
              >
                {/* Subtle colorful top gradient */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${resource.theme.accent}`}
                />

                <div className="relative z-10">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${resource.theme.iconBg}`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${resource.theme.badge}`}
                    >
                      {resource.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                    {resource.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    {resource.description}
                  </p>
                </div>

                {/* Bottom Tags & Link */}
                <div className="relative z-10 mt-7 border-t border-neutral-100 pt-4">
                  <div className="flex flex-wrap gap-1.5 pb-4">
                    {resource.examples.map((item) => (
                      <span
                        key={item}
                        className={`rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors ${resource.theme.pill}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-semibold text-neutral-800 group-hover:underline">
                      Explore category
                    </span>

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-all duration-200 ${resource.theme.arrow}`}
                    >
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>

                {/* Animated Bottom Bar Accent */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${resource.theme.bottomBar}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}