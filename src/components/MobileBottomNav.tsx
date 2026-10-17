
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Search,
  Layers3,
} from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Courses",
    href: "/#courses",
    icon: BookOpen,
  },
  {
    label: "Syllabus",
    href: "/#syllabus-selection",
    icon: Layers3,
  },
  {
    label: "Resources",
    href: "/#resources",
    icon: Search,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid h-[64px] max-w-lg grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isHome = item.href === "/";
          const active = isHome
            ? pathname === "/"
            : item.href.startsWith("/#")
              ? false
              : pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 transition-colors ${
                active
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.2 : 1.7}
              />
              <span className="text-[10px] font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
