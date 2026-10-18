"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowDownUp,
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Search,
  X,
} from "lucide-react";

import { oldBPharmSemesters } from "@/data/old-bpharm-syllabus";

type Props = {
  syllabus: "nep-2020" | "old-pci";
  title: string;
  description: string;
};

type SortOption = "syllabus" | "name" | "code" | "credits";

interface SubjectItem {
  code: string;
  name: string;
  type: string;
  credits?: number;
  note?: string;
}

interface SemesterItem {
  number: number;
  title: string;
  subjects: SubjectItem[];
}

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const semesterNames = [
  "Semester I",
  "Semester II",
  "Semester III",
  "Semester IV",
  "Semester V",
  "Semester VI",
  "Semester VII",
  "Semester VIII",
];

export default function BPharmSemesterSelector({
  syllabus,
  title,
  description,
}: Props) {
  const isOldPci = syllabus === "old-pci";

  const [activeSemester, setActiveSemester] = useState(1);
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("syllabus");
  
  const [semestersData, setSemestersData] = useState<SemesterItem[]>(oldBPharmSemesters as SemesterItem[]);

  useEffect(() => {
    async function fetchLiveSemesters() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://miltons-pharma-api.vercel.app/api";
        const res = await fetch(`${apiUrl}/courses/1/semesters`);
        if (res.ok) {
          const data = await res.json();
          const semResults = data.results || data;

          if (semResults && semResults.length > 0) {
            const formattedSemesters: SemesterItem[] = await Promise.all(
              semResults.map(async (sem: Record<string, unknown>) => {
                let subjectsList: SubjectItem[] = [];
                try {
                  const subRes = await fetch(`${apiUrl}/semesters/${sem.id}/subjects`);
                  if (subRes.ok) {
                    const subData = await subRes.json();
                    const subResults = subData.results || subData;
                    subjectsList = subResults.map((sub: Record<string, unknown>) => ({
                      code: (sub.code as string) || "BP101T",
                      name: sub.name as string,
                      type: sub.category === "Theory (T)" ? "Theory" : (sub.category as string) || "Theory",
                      credits: (sub.credits as number) || 4,
                      note: sub.total_hours ? `${sub.total_hours} Hours` : "",
                    }));
                  }
                } catch (e) {
                  console.error(`Failed to fetch subjects for semester ${sem.id}`, e);
                }

                return {
  number: (sem.semester_number as number) || 1,
  title: (sem.name as string) || `Semester ${sem.semester_number}`,
  subjects: subjectsList,
};
              })
            );
            setSemestersData(formattedSemesters);
          }
        }
      } catch (err) {
        console.error("Failed to fetch live semesters/subjects, using fallback:", err);
      }
    }

    if (isOldPci) {
      fetchLiveSemesters();
    }
  }, [isOldPci]);

  const semester = semestersData.find(
    (item) => item.number === activeSemester,
  ) || semestersData[0];

  const availableTypes = useMemo(() => {
    if (!semester) return [];
    return Array.from(
      new Set(semester.subjects.map((subject) => subject.type)),
    ).sort((a, b) => a.localeCompare(b));
  }, [semester]);

  const subjects = useMemo(() => {
    if (!semester) return [];

    const query = search.trim().toLowerCase();

    const result = semester.subjects.filter((subject) => {
      const matchesQuery =
        !query ||
        subject.name.toLowerCase().includes(query) ||
        subject.code.toLowerCase().includes(query) ||
        subject.type.toLowerCase().includes(query);

      const matchesType =
        activeType === "all" || subject.type === activeType;

      return matchesQuery && matchesType;
    });

    switch (sortBy) {
      case "name":
        return [...result].sort((a, b) => a.name.localeCompare(b.name));
      case "code":
        return [...result].sort((a, b) =>
          a.code.localeCompare(b.code, undefined, { numeric: true }),
        );
      case "credits":
        return [...result].sort(
          (a, b) => (b.credits ?? -1) - (a.credits ?? -1),
        );
      default:
        return result;
    }
  }, [semester, search, activeType, sortBy]);

  function selectSemester(number: number) {
    setActiveSemester(number);
    setSearch("");
    setActiveType("all");
    setSortBy("syllabus");
  }

  function resetFilters() {
    setSearch("");
    setActiveType("all");
    setSortBy("syllabus");
  }

  const getTypeBadge = (type: string) => {
    const lower = type.toLowerCase();
    if (lower.includes("practical")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
    }
    if (lower.includes("elective")) {
      return "bg-amber-50 text-amber-700 border-amber-200/60";
    }
    return "bg-sky-50 text-sky-700 border-sky-200/60";
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900 antialiased">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden">
        <div className="h-[300px] w-[800px] bg-gradient-to-b from-neutral-200/40 via-neutral-100/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500"
        >
          <Link
            href="/courses/bpharm"
            className="rounded px-1.5 py-0.5 transition hover:bg-neutral-200/60 hover:text-neutral-900"
          >
            B.Pharm
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <Link
            href="/courses/bpharm/select-syllabus"
            className="rounded px-1.5 py-0.5 transition hover:bg-neutral-200/60 hover:text-neutral-900"
          >
            Syllabus
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <span className="font-medium text-neutral-900">
            {isOldPci ? "Old PCI" : "NEP 2020"}
          </span>
        </nav>

        <header className="relative mt-6 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
            <GraduationCap size={15} className="text-neutral-800" />
            <span>BACHELOR OF PHARMACY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-900">
              {isOldPci ? "OLD PCI REGULATION" : "NEP 2020 SCHEME"}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h1>

          <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            {description}
          </p>
        </header>

        {isOldPci ? (
          <>
            <section className="mt-8">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
                    Select Semester
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Switch semesters to view the syllabus and course breakdown
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5">
                {semestersData.map((item) => {
                  const selected = activeSemester === item.number;
                  const roman = romanNumerals[item.number - 1] || "I";

                  return (
                    <button
                      key={item.number}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectSemester(item.number)}
                      className={`group relative flex items-center gap-3.5 rounded-xl border p-3.5 text-left transition-all duration-200 sm:p-4 ${
                        selected
                          ? "border-neutral-900 bg-neutral-900 text-white shadow-md ring-2 ring-neutral-900/10"
                          : "border-neutral-200/90 bg-white hover:border-neutral-300 hover:bg-neutral-50/70"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                          selected
                            ? "bg-white/15 text-white"
                            : "bg-neutral-100 text-neutral-800 group-hover:bg-neutral-200/70"
                        }`}
                      >
                        {roman}
                      </div>

                      <div className="min-w-0 flex-1">
                        <span
                          className={`block truncate text-xs font-semibold sm:text-sm ${
                            selected ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          Semester {roman}
                        </span>
                        <span
                          className={`mt-0.5 block text-[11px] font-normal ${
                            selected ? "text-neutral-300" : "text-neutral-500"
                          }`}
                        >
                          {item.subjects.length} subjects
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="mt-10">
              <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col justify-between gap-4 border-b border-neutral-100 pb-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                        Active Curriculum
                      </span>
                    </div>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900">
                      {semesterNames[activeSemester - 1] || `Semester ${activeSemester}`}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
                      Showing {subjects.length} of {semester?.subjects.length ?? 0}{" "}
                      subjects
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_180px_190px]">
                  <div className="relative flex items-center">
                    <Search
                      size={16}
                      className="absolute left-3.5 text-neutral-400"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search by title, subject code..."
                      aria-label="Search subjects"
                      className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50/50 pl-9 pr-9 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none sm:text-sm"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="Clear search"
                        className="absolute right-3 rounded-full p-0.5 text-neutral-400 hover:bg-neutral-200/70 hover:text-neutral-700"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <select
                      value={activeType}
                      onChange={(e) => setActiveType(e.target.value)}
                      aria-label="Filter by subject type"
                      className="h-10 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 text-xs font-medium text-neutral-700 focus:border-neutral-900 focus:bg-white focus:outline-none"
                    >
                      <option value="all">All Course Types</option>
                      {availableTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <BookOpen
                      size={14}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      aria-label="Sort subjects"
                      className="h-10 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 text-xs font-medium text-neutral-700 focus:border-neutral-900 focus:bg-white focus:outline-none"
                    >
                      <option value="syllabus">Default Syllabus Order</option>
                      <option value="name">Subject Title (A–Z)</option>
                      <option value="code">Course Code</option>
                      <option value="credits">Credits (High to Low)</option>
                    </select>
                    <ArrowDownUp
                      size={14}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                  </div>
                </div>

                {(search || activeType !== "all" || sortBy !== "syllabus") && (
                  <div className="mt-3 flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
                    <span>
                      Filtered view active ({subjects.length} results)
                    </span>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="font-medium text-neutral-900 underline underline-offset-2 hover:opacity-80"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}

                <div className="mt-6 space-y-2.5">
                  {subjects.length > 0 ? (
                    subjects.map((subject) => (
                      <div
                        key={subject.code}
                        className="group flex flex-col justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50/40 p-4 transition-all duration-150 hover:border-neutral-300 hover:bg-white hover:shadow-sm sm:flex-row sm:items-center"
                      >
                        <div className="flex items-start gap-3 sm:items-center">
                          <div className="flex shrink-0 items-center justify-center rounded-lg border border-neutral-200/90 bg-white px-2.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            <span className="font-mono text-xs font-bold text-neutral-800">
                              {subject.code}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-black">
                              {subject.name}
                            </h4>
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <span
                                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getTypeBadge(
                                  subject.type,
                                )}`}
                              >
                                {subject.type}
                              </span>
                              {subject.note && (
                                <span className="text-xs text-neutral-400">
                                  • {subject.note}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center self-end sm:self-auto">
                          {subject.credits !== undefined ? (
                            <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-200/80 bg-white px-3 py-1.5 text-xs text-neutral-600 shadow-xs">
                              <Award size={13} className="text-neutral-400" />
                              <strong className="font-semibold text-neutral-900">
                                {subject.credits}
                              </strong>{" "}
                              Credits
                            </span>
                          ) : (
                            <span className="text-xs text-neutral-400">
                              No credits listed
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed border-neutral-200 py-14 text-center">
                      <Search
                        size={26}
                        className="mx-auto text-neutral-300"
                      />
                      <p className="mt-3 text-sm font-medium text-neutral-800">
                        No subjects found
                      </p>
                      <p className="mt-1 text-xs text-neutral-400">
                        Try modifying your search or changing the course type filter.
                      </p>
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="mt-4 rounded-lg bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-800"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="text-[11px] leading-relaxed text-neutral-400">
                    * Syllabus structures and elective lists are based on live database records and standard PCI guidelines.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="mt-8 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold tracking-tight text-neutral-900">
              Select Semester
            </h2>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Explore NEP 2020 course modules and credit frameworks.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {semesterNames.map((name, index) => (
                <Link
                  key={name}
                  href={`/courses/bpharm/nep-2020/semester-${index + 1}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-neutral-200/90 bg-white p-4 transition hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-xs"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-sm font-bold text-neutral-700 transition group-hover:bg-neutral-900 group-hover:text-white">
                    {romanNumerals[index]}
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-neutral-900 sm:text-sm">
                      {name}
                    </span>
                    <span className="text-[11px] text-neutral-400 group-hover:text-neutral-600">
                      View details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-5 text-xs text-neutral-500">
          <Link
            href="/courses/bpharm/select-syllabus"
            className="flex items-center gap-1.5 font-medium transition hover:text-neutral-900"
          >
            ← Change Syllabus Scheme
          </Link>
          <span>Milton&apos;s Pharma</span>
        </footer>
      </div>
    </main>
  );
}