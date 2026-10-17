
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Old PCI Syllabus | Milton's Pharma",
  description:
    "Explore pharmacy courses and resources organised for the previous syllabus system.",
};

export default function OldPciSyllabusPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Selected curriculum / Old PCI
      </p>

      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
        Old syllabus
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
        Continue with the previous curriculum. Resources will remain
        separate from the new syllabus catalogue.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
  href="/courses/bpharm/old-pci"
  className="rounded-2xl border border-neutral-200 p-6 transition hover:border-black sm:p-8"
>
          <h2 className="text-2xl font-semibold">B.Pharm</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Explore the previous B.Pharm curriculum and its separate
            semester-wise catalogue.
          </p>
          <span className="mt-6 block text-sm font-semibold">
            Explore B.Pharm →
          </span>
        </Link>

        <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">D.Pharm</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            The applicable previous D.Pharm curriculum must be verified
            before its subject catalogue is published.
          </p>
          <span className="mt-6 block text-sm text-neutral-500">
            Curriculum setup pending
          </span>
        </div>
      </div>
    </main>
  );
}
