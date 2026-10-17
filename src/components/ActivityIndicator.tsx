
"use client";

import { useEffect, useState } from "react";
import { Users, X, ChevronUp } from "lucide-react";

function nextCount(current: number) {
  let next = current;

  while (next === current) {
    next = Math.floor(Math.random() * 1001) + 500;
  }

  return next;
}

export default function ActivityIndicator() {
  const [count, setCount] = useState(1247);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((current) => nextCount(current));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Visitor counter"
      className="fixed bottom-[5.25rem] right-3 z-[60] sm:bottom-5 sm:right-5"
    >
      {minimized ? (
        <button
          type="button"
          onClick={() => setMinimized(false)}
          aria-label={`Expand visitor counter. Displayed count: ${count}`}
          aria-expanded={false}
          className="flex h-12 items-center gap-2.5 rounded-full border border-neutral-700 bg-black px-4 text-white shadow-lg transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{ color: "#ffffff" }}
        >
          <Users size={17} color="#ffffff" />
          <span className="text-sm font-bold tabular-nums text-white">
            {count.toLocaleString("en-IN")}
          </span>
          <ChevronUp size={15} color="#ffffff" />
        </button>
      ) : (
        <div
          className="flex items-center gap-2.5 rounded-full border border-neutral-700 bg-black px-3 py-2.5 text-white shadow-lg sm:gap-3 sm:px-4"
          style={{ color: "#ffffff" }}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Users size={16} color="#ffffff" />
          </span>

          <span className="whitespace-nowrap text-[11px] font-bold text-white sm:text-xs">
            Live visitors:{" "}
            <span className="tabular-nums">
              {count.toLocaleString("en-IN")}
            </span>
          </span>

          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimize visitor counter"
            aria-expanded={true}
            className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          >
            <X size={14} color="#ffffff" />
          </button>
        </div>
      )}
    </aside>
  );
}
