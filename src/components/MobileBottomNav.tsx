
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  LibraryBig,
  Search,
  UserRound,
  ShieldCheck,
} from "lucide-react";
import { useNavigationAuth } from "@/hooks/useNavigationAuth";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { user, isAdmin } = useNavigationAuth();

  // Hide the public navigation on admin and authentication screens.
  if (
    pathname.startsWith("/admin") ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/onboarding"
  ) {
    return null;
  }

  const items = [
    { label: "Home", href: "/", icon: House },
    {
      label: "Academics",
      href: "/courses/bpharm/select-syllabus",
      icon: LibraryBig,
    },
    { label: "Search", href: "/search", icon: Search },
    {
      label: user ? "Profile" : "Login",
      href: user ? "/profile" : "/login",
      icon: UserRound,
    },
    ...(isAdmin
      ? [{ label: "Admin", href: "/admin", icon: ShieldCheck }]
      : []),
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed inset-x-0 bottom-0 z-70 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <div
        className={`mx-auto grid h-16 max-w-lg ${
          isAdmin ? "grid-cols-5" : "grid-cols-4"
        }`}
      >
        {items.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);

          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 transition-colors ${
                active
                  ? "font-semibold text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2.2 : 1.7} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
