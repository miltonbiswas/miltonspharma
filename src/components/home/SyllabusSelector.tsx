"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";

interface SyllabusOption {
  id: "nep-2020" | "old-pci";
  badge: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof GraduationCap;
  theme: {
    accentGradient: string;
    badgeStyle: string;
    iconBg: string;
    iconColor: string;
    hoverBorder: string;
    buttonHoverBg: string;
    bottomBar: string;
  };
}

const syllabusOptions: SyllabusOption[] = [
  {
    id: "nep-2020",
    badge: "Updated 2020",
    code: "NEP SCHEME",
    title: "NEP 2020 Syllabus",
    subtitle: "New Academic Framework",
    description:
      "Modern choice-based credit system, updated practical outcomes aur newly revised subject modules.",
    icon: GraduationCap,
    theme: {
      accentGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-blue-500/25",
      iconColor: "text-white",
      hoverBorder: "hover:border-blue-500/60",
      buttonHoverBg: "group-hover:bg-blue-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-blue-600 to-indigo-600",
    },
  },
  {
    id: "old-pci",
    badge: "Standard PCI",
    code: "LEGACY SCHEME",
    title: "Old PCI Syllabus",
    subtitle: "Pharmacy Council of India",
    description:
      "Traditional 8-semester course structure, standard PCI codes aur classical subject notes archive.",
    icon: BookOpen,
    theme: {
      accentGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-emerald-500/25",
      iconColor: "text-white",
      hoverBorder: "hover:border-emerald-500/60",
      buttonHoverBg: "group-hover:bg-emerald-600 group-hover:text-white",
      bottomBar: "bg-gradient-to-r from-emerald-600 to-teal-600",
    },
  },
];

export default function SyllabusSelector() {
  const router = useRouter();

  function chooseSyllabus(id: string) {
    try {
      localStorage.setItem("miltonspharma-syllabus", id);
    } catch {
      // LocalStorage fallback
    }
    router.push(`/courses/bpharm/${id}`);
  }

  return (
    <section
      id="syllabus-selection"
      aria-label="Syllabus curriculum selection"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-gradient-to-b from-neutral-50 via-white to-neutral-50/60 py-16 sm:py-24"
    >
      {/* Background Soft Colorful Blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1 text-xs font-semibold text-violet-700 shadow-xs">
            <Sparkles size={13} className="text-violet-600" />
            <span>Curriculum Selection</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Choose Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">Pharmacy Syllabus</span>
          </h2>

          <p className="mt-3.5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Apne college ya university ka active syllabus select karo taaki saare semester subjects, practicals aur notes accurate format me show hon.
          </p>
        </div>

        {/* Dynamic Colorful Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {syllabusOptions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseSyllabus(item.id)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8 ${item.theme.hoverBorder}`}
              >
                {/* Subtle colorful top-corner gradient */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${item.theme.accentGradient}`}
                />

                <div className="relative z-10">
                  {/* Top Bar with Badges & Colorful Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg border border-neutral-200/80 bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-neutral-700 shadow-2xs">
                        {item.code}
                      </span>
                      <span
                        className={`rounded-lg border px-2.5 py-1 text-[10px] font-semibold tracking-wider ${item.theme.badgeStyle}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${item.theme.iconBg}`}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Strip */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-neutral-100 pt-5">
                  <span className="text-xs font-bold text-neutral-800 transition-colors group-hover:text-black">
                    Proceed to curriculum
                  </span>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-all duration-200 ${item.theme.buttonHoverBg}`}
                  >
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                {/* Animated Gradient Border at Bottom */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.theme.bottomBar}`}
                />
              </button>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-neutral-400">
          Syllabus regulation ko aap header switcher se kisi bhi waqt change kar sakte hain.
        </p>
      </div>
    </section>
  );
}