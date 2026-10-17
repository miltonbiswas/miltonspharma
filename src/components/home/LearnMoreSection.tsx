import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  CheckCircle2,
  FileText,
  FlaskConical,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function LearnMoreSection() {
  return (
    <section
      aria-labelledby="learn-more-title"
      className="relative isolate overflow-hidden border-b border-neutral-200/80 bg-white py-16 sm:py-24"
    >
      {/* Background Soft Colorful Accents */}
      <div className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
        {/* Left: Copy and Actions */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-2xs">
            <Sparkles size={13} className="text-indigo-600" />
            <span>Smart Academic Workflow</span>
          </div>

          <h2
            id="learn-more-title"
            className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          >
            Learn faster.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Worry less.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
            Pharmacy studies shouldn&apos;t mean spending hours hunting for scattered lecture
            notes, incomplete lab manuals, or syllabus regulations. Milton&apos;s Pharma brings
            standardized semester resources together so you can focus on mastering your concepts.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/subjects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 text-sm font-semibold text-white shadow-md shadow-neutral-900/10 transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg"
            >
              Explore Subject Catalog
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/courses/bpharm/select-syllabus"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-800 shadow-2xs transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50"
            >
              Open B.Pharm Syllabus
              <ArrowUpRight size={16} className="text-neutral-500" />
            </Link>
          </div>

          {/* Value Props Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-600 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600" />
              PCI & NEP standard
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-blue-600" />
              Verified laboratory files
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-indigo-600" />
              100% Free access
            </span>
          </div>
        </div>

        {/* Right: Modern Bento Preview Hub */}
        <div className="relative mx-auto w-full max-w-[480px]">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl shadow-neutral-900/5 sm:p-7">
            {/* Ambient inner soft glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl" />

            {/* Header info */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                  <BookOpen size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">
                    Central Learning Vault
                  </h3>
                  <p className="text-xs text-neutral-500">Curriculum-aligned resources</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Active Hub
              </span>
            </div>

            {/* Micro Feature Rows */}
            <div className="mt-5 space-y-3">
              {/* Row 1 */}
              <div className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-900">Lecture Notes</h4>
                    <p className="text-[11px] text-neutral-500">Unit-wise concise summaries</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-blue-600">8 Semesters</span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <FlaskConical size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-900">Practical Manuals</h4>
                    <p className="text-[11px] text-neutral-500">Standard assays & experiments</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-600">Verified</span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                    <Atom size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-900">Question Banks</h4>
                    <p className="text-[11px] text-neutral-500">Previous year university papers</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-purple-600">Solved</span>
              </div>
            </div>

            {/* Bottom mini metric bar */}
            <div className="mt-5 flex items-center justify-between rounded-xl bg-neutral-900 p-4 text-white">
              <div className="flex items-center gap-2.5">
                <GraduationCap size={20} className="text-blue-400" />
                <div>
                  <p className="text-xs font-semibold">Ready for Exam Prep</p>
                  <p className="text-[10px] text-neutral-400">Zero subscription required</p>
                </div>
              </div>
              <Link
                href="/subjects"
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
              >
                Start now
              </Link>
            </div>
          </div>

          {/* Floating Subtle Decorative Badge */}
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-neutral-200/90 bg-white p-3.5 shadow-lg shadow-neutral-900/5 sm:flex sm:items-center sm:gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-neutral-900">PCI Compliant</p>
              <p className="text-[10px] text-neutral-500">Official syllabus aligned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}