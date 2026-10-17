
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEP 2020 Syllabus | Milton's Pharma",
  description:
    "Explore pharmacy courses and study resources under the selected NEP 2020 syllabus system.",
};

export default function NewSyllabusPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Selected curriculum / NEP 2020
      </p>

      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
        New syllabus
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
        Choose your pharmacy course to explore the corresponding curriculum.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
  href="/courses/bpharm/nep-2020"
  className="rounded-2xl border border-neutral-200 p-6 transition hover:border-black sm:p-8"
>
          <h2 className="text-2xl font-semibold">B.Pharm</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Explore the new B.Pharm curriculum and semester-wise resources.
          </p>
          <span className="mt-6 block text-sm font-semibold">
            Explore B.Pharm →
          </span>
        </Link>

        <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">D.Pharm</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            The applicable D.Pharm curriculum must be verified before its
            subject catalogue is published.
          </p>
          <span className="mt-6 block text-sm text-neutral-500">
            Curriculum setup pending
          </span>
        </div>
      </div>
    </main>
  );
}
