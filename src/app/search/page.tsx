"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  GraduationCap,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  X,
  Award,
  Clock,
} from "lucide-react";

import { oldBPharmSemesters } from "@/data/old-bpharm-syllabus";

type SubjectResult = {
  code: string;
  name: string;
  type: string;
  note?: string;
  hours?: number;
  credits?: number;
  semesterNumber: number;
  semesterTitle: string;
};

const popularSearches = [
  "Pharmacology",
  "Human Anatomy",
  "Medicinal Chemistry",
  "BP401T",
  "Practical",
  "Pharmacokinetics",
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function SearchContent() {
  const searchParams = useSearchParams();
  const paramQ = searchParams.get("q")?.trim() ?? "";

  const [query, setQuery] = useState(paramQ);
  const [semesterFilter, setSemesterFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const allSubjects = useMemo<SubjectResult[]>(
    () =>
      oldBPharmSemesters.flatMap((semester) =>
        semester.subjects.map((subject) => ({
          ...subject,
          semesterNumber: semester.number,
          semesterTitle: semester.title,
        })),
      ),
    [],
  );

  const subjectTypes = useMemo(
    () => Array.from(new Set(allSubjects.map((subject) => subject.type))).sort(),
    [allSubjects],
  );

  const resultData = useMemo(() => {
    const normalizedQuery = normalize(query);
    const terms = normalizedQuery.split(/\s+/).filter(Boolean);

    const scoredResults = allSubjects
      .map((subject) => {
        const name = normalize(subject.name);
        const code = normalize(subject.code);
        const type = normalize(subject.type);
        const note = normalize(subject.note ?? "");
        const semester = normalize(subject.semesterTitle);

        const searchableText = normalize(
          [
            subject.name,
            subject.code,
            subject.type,
            subject.note ?? "",
            subject.semesterTitle,
            `semester ${subject.semesterNumber}`,
            subject.hours ?? "",
            subject.credits ?? "",
          ].join(" "),
        );

        const matchesQuery =
          terms.length === 0 ||
          terms.every((term) => searchableText.includes(term));

        let score = 0;

        if (normalizedQuery) {
          if (code === normalizedQuery) score += 100;
          if (name === normalizedQuery) score += 90;
          if (code.startsWith(normalizedQuery)) score += 70;
          if (name.startsWith(normalizedQuery)) score += 60;
          if (name.includes(normalizedQuery)) score += 40;
          if (type.includes(normalizedQuery)) score += 20;
          if (note.includes(normalizedQuery)) score += 10;
          if (semester.includes(normalizedQuery)) score += 5;
        }

        return { subject, matchesQuery, score };
      })
      .filter(({ subject, matchesQuery }) => {
        const matchesSemester =
          semesterFilter === "all" ||
          subject.semesterNumber === Number(semesterFilter);

        const matchesType =
          typeFilter === "all" || subject.type === typeFilter;

        return matchesQuery && matchesSemester && matchesType;
      });

    if (sortBy === "name") {
      scoredResults.sort((a, b) =>
        a.subject.name.localeCompare(b.subject.name),
      );
    } else if (sortBy === "code") {
      scoredResults.sort((a, b) =>
        a.subject.code.localeCompare(b.subject.code, undefined, {
          numeric: true,
        }),
      );
    } else if (sortBy === "semester") {
      scoredResults.sort(
        (a, b) =>
          a.subject.semesterNumber - b.subject.semesterNumber ||
          a.subject.name.localeCompare(b.subject.name),
      );
    } else {
      scoredResults.sort(
        (a, b) =>
          b.score - a.score ||
          a.subject.semesterNumber - b.subject.semesterNumber ||
          a.subject.name.localeCompare(b.subject.name),
      );
    }

    return scoredResults.map((item) => item.subject);
  }, [allSubjects, query, semesterFilter, typeFilter, sortBy]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    const suffix = params.toString();
    window.history.replaceState(null, "", suffix ? `/search?${suffix}` : "/search");
  }

  function choosePopularSearch(value: string) {
    setQuery(value);
    setSemesterFilter("all");
    setTypeFilter("all");
    const params = new URLSearchParams({ q: value });
    window.history.replaceState(null, "", `/search?${params.toString()}`);
  }

  function clearFilters() {
    setSemesterFilter("all");
    setTypeFilter("all");
    setSortBy("relevance");
  }

  function clearAll() {
    setQuery("");
    clearFilters();
    window.history.replaceState(null, "", "/search");
  }

  const hasFilters =
    semesterFilter !== "all" || typeFilter !== "all" || sortBy !== "relevance";

  const getTypeBadge = (type: string) => {
    const lower = type.toLowerCase();
    if (lower.includes("practical")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
    }
    if (lower.includes("elective")) {
      return "bg-amber-50 text-amber-700 border-amber-200/80";
    }
    return "bg-sky-50 text-sky-700 border-sky-200/80";
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900 pb-20">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
        <div className="h-64 w-187.5 bg-linear-to-b from-neutral-200/40 via-neutral-100/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-neutral-500"
        >
          <Link
            href="/"
            className="rounded px-1.5 py-0.5 transition hover:bg-neutral-200/60 hover:text-neutral-900"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <span className="font-semibold text-neutral-900">Search</span>
        </nav>

        {/* Search Header Container */}
        <header className="relative mt-6 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600">
            <Sparkles size={13} className="text-neutral-900" />
            <span>Search Library Catalog</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Find Subjects & Course Codes
          </h1>

          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Search verified pharmacy subjects, credit ratings, official PCI course codes,
            and syllabus distribution across all 8 semesters.
          </p>

          {/* Search Input Bar */}
          <form
            onSubmit={submitSearch}
            role="search"
            className="group mt-8 flex h-14 w-full max-w-3xl items-center gap-3 rounded-2xl border border-neutral-200/90 bg-neutral-50/50 p-2 pl-4 transition-all duration-200 hover:border-neutral-400 focus-within:border-neutral-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-neutral-900/5 sm:h-16 sm:pl-5"
          >
            <Search
              size={20}
              className="shrink-0 text-neutral-400 group-focus-within:text-neutral-900"
              aria-hidden="true"
            />

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by subject name, code (e.g. BP101T), or keyword..."
              aria-label="Search the syllabus catalogue"
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 sm:text-base"
            />

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  window.history.replaceState(null, "", "/search");
                }}
                aria-label="Clear search input"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200/70 hover:text-neutral-900"
              >
                <X size={15} />
              </button>
            )}

            <button
              type="submit"
              aria-label="Submit search"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm transition hover:bg-neutral-800 active:scale-95 sm:h-12 sm:w-12"
            >
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>
          </form>

          {/* Popular Tag Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
              <TrendingUp size={13} />
              Quick Searches:
            </span>

            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => choosePopularSearch(item)}
                className="rounded-xl border border-neutral-200/80 bg-white px-3 py-1 text-xs font-medium text-neutral-600 transition hover:border-neutral-900 hover:bg-neutral-50 hover:text-neutral-900 active:scale-95"
              >
                {item}
              </button>
            ))}
          </div>
        </header>

        {/* Results & Filter Section */}
        <section className="mt-8">
          {/* Section Subheading & Link */}
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {query.trim() ? "Search Query Active" : "Full Catalogue"}
                </span>
              </div>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                {query.trim() ? `Results for “${query.trim()}”` : "All Syllabus Subjects"}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-500 border border-neutral-200/80">
                Found {resultData.length} {resultData.length === 1 ? "subject" : "subjects"}
              </span>
              <Link
                href="/courses/bpharm/old-pci"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:underline"
              >
                <span>Full Semester Grid</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
            {/* Semester Select */}
            <div className="relative">
              <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3.5 focus-within:border-neutral-900">
                <GraduationCap size={16} className="shrink-0 text-neutral-400" />
                <select
                  value={semesterFilter}
                  onChange={(e) => setSemesterFilter(e.target.value)}
                  aria-label="Filter by semester"
                  className="w-full bg-transparent text-xs font-medium text-neutral-800 outline-none"
                >
                  <option value="all">All Semesters</option>
                  {oldBPharmSemesters.map((s) => (
                    <option key={s.number} value={s.number}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Type Select */}
            <div className="relative">
              <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3.5 focus-within:border-neutral-900">
                <BookOpen size={15} className="shrink-0 text-neutral-400" />
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  aria-label="Filter by subject type"
                  className="w-full bg-transparent text-xs font-medium text-neutral-800 outline-none"
                >
                  <option value="all">All Subject Types</option>
                  {subjectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Sort Select */}
            <div className="relative">
              <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3.5 focus-within:border-neutral-900">
                <SlidersHorizontal size={15} className="shrink-0 text-neutral-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort search results"
                  className="w-full bg-transparent text-xs font-medium text-neutral-800 outline-none"
                >
                  <option value="relevance">Most Relevant First</option>
                  <option value="semester">Semester Progression (1–8)</option>
                  <option value="name">Subject Title (A–Z)</option>
                  <option value="code">Course Code</option>
                </select>
              </label>
            </div>

            {/* Reset Filters */}
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-4 text-xs font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-950 active:scale-95"
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Results List */}
          {resultData.length > 0 ? (
            <div className="mt-6 space-y-2.5">
              {resultData.map((subject) => (
                <div
                  key={`${subject.semesterNumber}-${subject.code}`}
                  className="group flex flex-col justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md sm:flex-row sm:items-center sm:p-5"
                >
                  <div className="flex items-start gap-3.5 sm:items-center">
                    {/* Course Code Chip */}
                    <div className="flex shrink-0 items-center justify-center rounded-xl border border-neutral-200/90 bg-neutral-50 px-3 py-2 shadow-2xs group-hover:border-neutral-300">
                      <span className="font-mono text-xs font-bold text-neutral-900">
                        {subject.code}
                      </span>
                    </div>

                    {/* Subject Details */}
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900 group-hover:text-black sm:text-base">
                        {subject.name}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                        <span
                          className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getTypeBadge(
                            subject.type,
                          )}`}
                        >
                          {subject.type}
                        </span>

                        <span className="text-neutral-400">•</span>

                        <span className="font-medium text-neutral-600">
                          {subject.semesterTitle}
                        </span>

                        {subject.note && (
                          <>
                            <span className="text-neutral-400">•</span>
                            <span className="text-neutral-500 italic">
                              {subject.note}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Metadata Chips + Link */}
                  <div className="flex shrink-0 flex-wrap items-center gap-2 self-end sm:self-auto">
                    {subject.credits !== undefined && (
                      <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-200/80 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600">
                        <Award size={13} className="text-neutral-400" />
                        <strong className="text-neutral-900">{subject.credits}</strong> Credits
                      </span>
                    )}

                    {subject.hours !== undefined && (
                      <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-200/80 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600">
                        <Clock size={13} className="text-neutral-400" />
                        <span>{subject.hours} hrs/wk</span>
                      </span>
                    )}

                    <Link
                      href="/courses/bpharm/old-pci"
                      className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-900 hover:text-white"
                    >
                      <span>Syllabus</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="mt-8 rounded-3xl border border-dashed border-neutral-300 bg-white px-5 py-14 text-center sm:py-20">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400">
                <Search size={26} strokeWidth={1.8} />
              </div>

              <h3 className="mt-4 text-base font-bold text-neutral-900 sm:text-lg">
                No matching subjects found
              </h3>

              <p className="mx-auto mt-1.5 max-w-sm text-xs leading-relaxed text-neutral-500 sm:text-sm">
                We couldn&apos;t find any subject matching your search terms or active
                semester filters.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={clearAll}
                  className="rounded-xl bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-neutral-800"
                >
                  Reset Search & Filters
                </button>

                <Link
                  href="/courses/bpharm/old-pci"
                  className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-50"
                >
                  Browse Full Syllabus
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Footer Info Notice */}
        <footer className="mt-12 rounded-2xl border border-neutral-200/60 bg-neutral-100/50 p-4 text-[11px] leading-relaxed text-neutral-500 text-center sm:text-left">
          Search index includes 8 semesters of the standard B.Pharm curriculum.
          Clinical drug indices, D.Pharm syllabi, and question banks update continuously.
        </footer>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[65vh] bg-[#fafafa] flex items-center justify-center p-8 text-xs font-medium text-neutral-500">
          Loading library catalogue...
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}