import Link from "next/link";
import { ArrowUpRight, GraduationCap, Sparkles, HeartHandshake } from "lucide-react";

export default function FounderSection() {
  return (
    <section
      id="founder"
      aria-label="Founder and Mission"
      className="relative overflow-hidden border-y border-neutral-200/80 bg-neutral-50/40 py-16 sm:py-24"
    >
      {/* Background soft ambient accents */}
      <div className="pointer-events-none absolute -left-20 top-1/3 -z-10 h-72 w-80 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 -z-10 h-72 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:gap-20">
          
          {/* Left: Elevated Profile Card */}
          <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl sm:p-10">
            {/* Ambient card top gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-violet-500/10 via-indigo-500/5 to-transparent" />

            {/* Avatar with Glow Effect */}
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-sky-500 p-0.5 shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white">
                <span className="bg-gradient-to-tr from-violet-600 to-indigo-600 bg-clip-text font-mono text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                  MB
                </span>
              </div>
            </div>

            {/* Identity Details */}
            <div className="relative z-10 mt-6">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                Milton Biswas
              </h3>
              <p className="mt-1 text-xs font-semibold text-neutral-500 sm:text-sm">
                Founder, Milton&apos;s Pharma
              </p>
            </div>

            {/* Badges */}
            <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                <GraduationCap size={14} className="text-violet-600" />
                Pharmacy Education
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <HeartHandshake size={14} className="text-emerald-600" />
                Student First
              </span>
            </div>

            {/* Bottom Accent Border */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Right: Narrative & Vision */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-2xs">
              <Sparkles size={13} className="text-neutral-900" />
              <span>Meet The Founder</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.15]">
              Built around a{" "}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                simple idea.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
              Milton&apos;s Pharma is being developed to solve a real everyday challenge:
              making academic resources direct, transparent, and structured for pharmacy students.
              Instead of scrolling through unverified groups and broken file links, students get
              a centralised, intuitive learning hub designed around genuine semester workflows.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
              The platform continues to evolve with verified faculty-aligned notes, 
              practical journals, and collaborative revision tools—empowering every aspiring 
              pharmacist to learn with clarity and confidence.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md sm:text-sm"
              >
                <span>More about Milton&apos;s Pharma</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}