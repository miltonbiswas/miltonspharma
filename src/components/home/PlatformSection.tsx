import { Search, BookOpen, BookmarkCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Find resources easily",
    text: "Navigate through courses, semesters, and subjects intuitively instead of searching through endlessly scattered files.",
    theme: {
      iconBg: "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sky-500/25",
      badge: "bg-sky-50 text-sky-700 border-sky-100",
      glow: "group-hover:border-sky-400 group-hover:shadow-sky-500/10",
      bottomBar: "bg-gradient-to-r from-sky-500 to-blue-600",
    },
  },
  {
    icon: BookOpen,
    title: "Learn at your own pace",
    text: "Use structured unit notes, rapid summaries, and core practical resources to support your academic studies your way.",
    theme: {
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/25",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
      glow: "group-hover:border-emerald-400 group-hover:shadow-emerald-500/10",
      bottomBar: "bg-gradient-to-r from-emerald-500 to-teal-600",
    },
  },
  {
    icon: BookmarkCheck,
    title: "Build your study library",
    text: "Save essential, high-yield resources for easy retrieval during midterms, revisions, and exam preparation.",
    theme: {
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-500/25",
      badge: "bg-rose-50 text-rose-700 border-rose-100",
      glow: "group-hover:border-rose-400 group-hover:shadow-rose-500/10",
      bottomBar: "bg-gradient-to-r from-rose-500 to-pink-600",
    },
  },
];

export default function PlatformSection() {
  return (
    <section
      aria-label="Platform Benefits"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-neutral-50/40 py-16 sm:py-24"
    >
      {/* Subtle colorful ambient light spots */}
      <div className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-96 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 -z-10 h-72 w-96 rounded-full bg-rose-100/30 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
          
          {/* Left Side: About & Brand Headline */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-3.5 py-1.5 text-xs font-semibold text-violet-700 shadow-2xs">
              <Sparkles size={13} className="text-violet-600" />
              <span>ABOUT THE PLATFORM</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-[1.1]">
              Pharmacy learning should be{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-rose-600 bg-clip-text text-transparent">
                easier to navigate.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
              Milton&apos;s Pharma ek aisi dedicated academic space hai jo pharmacy students 
              ke semester curriculum ko easy, search-ready aur well-organized banati hai. 
              Scattered study material ki stress ko door karke, hum aapko specific course notes, 
              practical journals aur model question papers tak direct access dete hain, bina kisi clutter ke.
            </p>
          </div>

          {/* Right Side: Stacked Glow Benefits Cards */}
          <div className="space-y-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`group relative flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${benefit.theme.glow}`}
                >
                  {/* Icon with Vivid Custom Gradient */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${benefit.theme.iconBg}`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Benefit Texts */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-500">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Animated Colorful Accent Border */}
                  <div
                    className={`absolute inset-x-0 bottom-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl ${benefit.theme.bottomBar}`}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}