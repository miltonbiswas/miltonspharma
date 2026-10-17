import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Sparkles,
  Layers,
  Clock,
} from "lucide-react";

const courses = [
  {
    title: "Bachelor of Pharmacy",
    short: "B.Pharm",
    degreeLevel: "Undergraduate Degree",
    duration: "4 Years · 8 Semesters",
    description:
      "Comprehensive pharmaceutical sciences covering core drug discovery, medicinal formulations, pharmacology, clinical analysis, and regulatory affairs.",
    topics: ["Pharmaceutics", "Pharmacology", "Medicinal Chemistry", "Pharmacognosy"],
    href: "/courses/bpharm/select-syllabus",
    icon: GraduationCap,
    theme: {
      gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
      borderHover: "hover:border-indigo-400 hover:shadow-indigo-500/10",
      iconBg: "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-indigo-500/25",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      topicBadge: "bg-indigo-50/50 text-indigo-950 border-indigo-100 hover:border-indigo-200",
      arrowBg: "group-hover:bg-indigo-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-indigo-600 to-violet-600",
    },
  },
  {
    title: "Diploma in Pharmacy",
    short: "D.Pharm",
    degreeLevel: "Professional Diploma",
    duration: "2 Years · Annual Scheme",
    description:
      "Practical-oriented pharmacy practice focused on community pharmacy, dispensing procedures, hospital logistics, drug store management, and core formulations.",
    topics: ["Pharmaceutics", "Pharmacognosy", "Pharmacy Practice", "Biochemistry"],
    href: "/courses/dpharm",
    icon: BookOpen,
    theme: {
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/10",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-emerald-500/25",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      topicBadge: "bg-emerald-50/50 text-emerald-950 border-emerald-100 hover:border-emerald-200",
      arrowBg: "group-hover:bg-emerald-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-emerald-600 to-teal-600",
    },
  },
];

export default function CourseSection() {
  return (
    <section
      id="courses"
      aria-label="Pharmacy Programmes"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-neutral-50/40 py-16 sm:py-24"
    >
      {/* Ambient soft glow background */}
      <div className="pointer-events-none absolute -top-28 left-1/3 -z-10 h-72 w-96 rounded-full bg-indigo-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-1/4 -z-10 h-72 w-96 rounded-full bg-teal-200/35 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-2xs">
              <Sparkles size={13} className="text-neutral-900" />
              <span>Academic Catalog</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Start with your{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                course
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            Structured study resources, notes, laboratory manuals, and previous year
            papers mapped strictly to your pharmacy degree structure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <Link
                key={course.short}
                href={course.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${course.theme.borderHover}`}
              >
                {/* Subtle colorful top gradient */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-50 transition-opacity duration-300 group-hover:opacity-100 ${course.theme.gradient}`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Badges + Glowing Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-extrabold tracking-wider text-neutral-900 shadow-2xs">
                        {course.short}
                      </span>
                      <span
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${course.theme.badge}`}
                      >
                        {course.degreeLevel}
                      </span>
                    </div>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${course.theme.iconBg}`}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </div>
                  </div>

                  {/* Title & Duration */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                      {course.title}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                      <Clock size={13} className="text-neutral-400" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {course.description}
                  </p>

                  {/* Key Subject Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${course.theme.topicBadge}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action Strip */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-neutral-100 pt-5">
                  <span className="text-xs font-bold text-neutral-900 transition-colors group-hover:underline">
                    Explore programme resources
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-200 ${course.theme.arrowBg}`}
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                {/* Bottom Color Bar Indicator */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${course.theme.bottomBar}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}