import {
  BookOpen,
  GraduationCap,
  Languages,
  Library,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "02",
    badge: "Core Degrees",
    label: "Pharmacy Programmes",
    description: "Structured pathways for B.Pharm & D.Pharm curricula.",
    icon: GraduationCap,
  },
  {
    value: "05",
    badge: "Study Materials",
    label: "Resource Categories",
    description: "Lecture notes, practical manuals, electives & project files.",
    icon: BookOpen,
  },
  {
    value: "EN",
    badge: "Medium",
    label: "Learning Language",
    description: "Standard English-language academic notes & references.",
    icon: Languages,
  },
  {
    value: "01",
    badge: "Unified Hub",
    label: "Centralised Library",
    description: "One single searchable workspace for your entire degree.",
    icon: Library,
  },
];

export default function PlatformStats() {
  return (
    <section
      aria-label="Milton's Pharma platform overview"
      className="relative border-y border-neutral-200/80 bg-neutral-50/50 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col justify-between gap-5 pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-600 shadow-xs">
              <Sparkles size={12} className="text-neutral-900" />
              <span>Platform At A Glance</span>
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Everything starts with structured learning.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            A dedicated pharmaceutical resource system tailored to help students
            organise, navigate, and master their pharmacy syllabus effortlessly.
          </p>
        </div>

        {/* Bento Grid Stats Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Top: Icon + Arrow */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 transition-colors duration-200 group-hover:bg-neutral-900 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/60 bg-neutral-50 text-neutral-400 transition-all duration-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  {/* Value */}
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                      {stat.value}
                    </span>
                    <span className="rounded-md border border-neutral-200/60 bg-neutral-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      {stat.badge}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-neutral-900">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-neutral-500 sm:text-sm">
                  {stat.description}
                </p>

                {/* Subtle bottom decorative hover highlight */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom Banner Info */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200/70 bg-white/80 px-5 py-3 text-xs text-neutral-500 backdrop-blur-xs">
          <span className="inline-flex items-center gap-2 font-medium text-neutral-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Designed around Pharmacy Council guidelines & student workflows
          </span>

          <span className="font-mono text-[11px] text-neutral-400">
            Milton&apos;s Pharma · Academic Excellence
          </span>
        </div>
      </div>
    </section>
  );
}