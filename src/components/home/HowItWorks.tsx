import { GraduationCap, Compass, BookOpenCheck, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    tag: "Select Pathway",
    title: "Choose your course",
    description: "Start with B.Pharm or D.Pharm and configure your active academic regulations.",
    icon: GraduationCap,
    theme: {
      accent: "from-sky-500/10 via-blue-500/5 to-transparent",
      border: "hover:border-sky-400 hover:shadow-sky-500/10",
      numBg: "bg-sky-50 text-sky-700 border-sky-200/80",
      iconBg: "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sky-500/25",
      bottomBar: "bg-gradient-to-r from-sky-500 to-blue-600",
    },
  },
  {
    number: "02",
    tag: "Directory",
    title: "Explore your subjects",
    description: "Navigate through semesters, individual course modules, and verified unit-wise chapters.",
    icon: Compass,
    theme: {
      accent: "from-indigo-500/10 via-violet-500/5 to-transparent",
      border: "hover:border-indigo-400 hover:shadow-indigo-500/10",
      numBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      iconBg: "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-indigo-500/25",
      bottomBar: "bg-gradient-to-r from-indigo-500 to-violet-600",
    },
  },
  {
    number: "03",
    tag: "Mastery",
    title: "Learn and revise",
    description: "Master complex concepts with high-yield notes, laboratory protocols, and question banks.",
    icon: BookOpenCheck,
    theme: {
      accent: "from-emerald-500/10 via-teal-500/5 to-transparent",
      border: "hover:border-emerald-400 hover:shadow-emerald-500/10",
      numBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/25",
      bottomBar: "bg-gradient-to-r from-emerald-500 to-teal-600",
    },
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-label="How it works"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-neutral-50/40 py-16 sm:py-24"
    >
      {/* Background colorful ambient light */}
      <div className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-72 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-72 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-2xs">
              <Sparkles size={13} className="text-neutral-900" />
              <span>Step-by-step guidance</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              A simpler way to{" "}
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                find what you need.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            No confusion, no endless searching. Three straightforward steps to access all your pharmacy study materials.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${step.theme.border}`}
              >
                {/* Subtle colorful top gradient */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${step.theme.accent}`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon + Step Indicator */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${step.theme.iconBg}`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                        {step.tag}
                      </span>
                      <span
                        className={`font-mono text-xs font-bold rounded-lg border px-2.5 py-1 ${step.theme.numBg}`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-7 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-neutral-100 pt-4">
                  <span className="text-[11px] font-medium text-neutral-400">
                    Step {index + 1} of 3
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-neutral-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-neutral-900"
                  />
                </div>

                {/* Animated Bottom Bar Accent */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${step.theme.bottomBar}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}