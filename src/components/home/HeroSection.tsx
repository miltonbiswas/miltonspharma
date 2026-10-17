"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Search, Sparkles, TrendingUp } from "lucide-react";

const popularSearches = [
  { label: "Pharmacology", color: "hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50" },
  { label: "Pharmacokinetics", color: "hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/50" },
  { label: "Medicinal Chemistry", color: "hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50" },
  { label: "Drug mechanisms", color: "hover:border-amber-300 hover:text-amber-600 hover:bg-amber-50/50" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  function search(value: string) {
    const term = value.trim();
    if (term) {
      window.location.href = `/search?q=${encodeURIComponent(term)}`;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    search(query);
  }

  return (
    <section className="relative w-full overflow-hidden px-4 pb-16 pt-12 text-center sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[550px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-300/25 via-indigo-300/20 to-teal-300/25 blur-3xl" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-indigo-50/70 px-4 py-1.5 text-xs font-semibold text-indigo-700 shadow-2xs backdrop-blur-xs">
        <Sparkles size={13} className="text-indigo-600" />
        <span>Pharmacy Learning & Academic Resources</span>
      </div>

      {/* Hero Headline */}
      <h1 className="mx-auto mt-6 w-full max-w-4xl text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
        Explore pharmaceutical science.
        <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text font-bold text-transparent">
          Understand more.
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
        Semester-wise pharmacy subjects, drug classification index, scientific mechanisms,
        theory notes, and laboratory resources organized in one unified platform.
      </p>

      {/* Modern Search Bar */}
      <div className="mx-auto mt-9 max-w-3xl sm:mt-12">
        <form
          onSubmit={handleSubmit}
          className="group relative flex h-14 w-full items-center gap-3 rounded-2xl border border-neutral-200/90 bg-white p-2 shadow-lg shadow-neutral-900/5 transition-all duration-300 hover:border-neutral-400 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 sm:h-16 sm:p-2.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 transition-colors group-focus-within:bg-indigo-50 group-focus-within:text-indigo-600 sm:h-11 sm:w-11">
            <Search size={19} strokeWidth={2} />
          </div>

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search subjects, drug index, or unit notes..."
            aria-label="Search subjects, drugs and resources"
            className="h-full min-w-0 flex-1 bg-transparent text-xs text-neutral-900 outline-none placeholder:text-neutral-400 sm:text-sm"
          />

          <button
            type="submit"
            aria-label="Search resources"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25 transition-transform duration-200 hover:opacity-95 active:scale-95 sm:h-11 sm:w-11"
          >
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>
        </form>

        <p className="mt-2.5 px-3 text-left text-[11px] text-neutral-400">
          Search across 8 semesters of B.Pharm, D.Pharm modules, and clinical drug indices
        </p>
      </div>

      {/* Popular Searches Pills */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        <span className="inline-flex items-center gap-1.5 px-1 text-xs font-medium text-neutral-400">
          <TrendingUp size={13} />
          Popular:
        </span>

        {popularSearches.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => search(item.label)}
            className={`rounded-xl border border-neutral-200/90 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 shadow-2xs transition-all duration-200 ${item.color}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}