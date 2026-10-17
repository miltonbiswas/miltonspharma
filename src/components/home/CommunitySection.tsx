import Link from "next/link";
import { ArrowRight, Users, Sparkles, HeartHandshake } from "lucide-react";

export default function CommunitySection() {
  return (
    <section
      aria-label="Community"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-neutral-50/40 py-16 sm:py-24"
    >
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -z-10 h-72 w-80 -translate-y-1/2 rounded-full bg-violet-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-72 w-80 -translate-y-1/2 rounded-full bg-indigo-200/35 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-sm sm:p-12 md:p-14">
          {/* Inner Decorative Gradient */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-500/10 via-indigo-500/5 to-transparent" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center lg:gap-14">
            <div className="max-w-2xl">
              {/* Icon & Category Pill */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25">
                  <Users size={22} strokeWidth={2} />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  <Sparkles size={12} className="text-violet-600" />
                  <span>A Growing Learning Community</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.15]">
                Knowledge becomes more useful{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  when it is shared.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
                Milton&apos;s Pharma is building an open, student-first collective. Discover structured semester materials, collaborate on exam revision, and contribute verified academic notes to help pharmacy peers across institutions succeed.
              </p>

              {/* Micro Perks */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500 sm:text-sm">
                <span className="inline-flex items-center gap-1.5 text-neutral-700">
                  <HeartHandshake size={15} className="text-violet-600" />
                  Peer-to-peer knowledge sharing
                </span>
                <span className="text-neutral-300">•</span>
                <span className="text-neutral-700">100% Free academic access</span>
              </div>
            </div>

            {/* Action Area */}
            <div className="shrink-0">
              <Link
                href="/signup"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-neutral-900 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-neutral-900/10 transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Join the platform</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500" />
        </div>
      </div>
    </section>
  );
}