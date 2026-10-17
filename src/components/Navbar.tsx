
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Home,
  BookOpen,
  Pill,
  FileText,
  FolderOpen,
  Info,
  Users,
  GraduationCap,
  FlaskConical,
  Library,
  LogIn,
  UserPlus,
  Send,
  UserRound,
  ShieldCheck,
  LogOut,
  Search,
} from "lucide-react";

import { useNavigationAuth } from "@/hooks/useNavigationAuth";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Subjects",
    icon: BookOpen,
    children: [
      {
        label: "B.Pharm",
        description: "Bachelor of Pharmacy",
        href: "/courses/bpharm/select-syllabus",
        icon: GraduationCap,
      },
      {
        label: "D.Pharm",
        description: "Diploma in Pharmacy",
        href: "/courses/dpharm",
        icon: FlaskConical,
      },
      {
        label: "All subjects",
        description: "Explore the subject catalogue",
        href: "/subjects",
        icon: Library,
      },
    ],
  },
  {
    label: "Drug Index",
    href: "/drug-index",
    icon: Pill,
  },
  {
    label: "Articles",
    href: "/articles",
    icon: FileText,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    label: "About",
    icon: Info,
    children: [
      {
        label: "About us",
        description: "Our mission and purpose",
        href: "/about",
        icon: Info,
      },
      {
        label: "Community",
        description: "Learn and share together",
        href: "/community",
        icon: Users,
      },
      {
        label: "Submit a resource",
        description: "Contribute study material",
        href: "/submit",
        icon: Send,
      },
    ],
  },
];

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const { user, isAdmin } = useNavigationAuth();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setDropdown(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdown(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
  }, [pathname]);

  function closeMenus() {
    setMobileOpen(false);
    setDropdown(null);
  }

  function toggleDropdown(label: string) {
    setDropdown((current) => (current === label ? null : label));
  }

  async function handleLogout() {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Logout failed:", error.message);
        window.alert("Logout failed. Please try again.");
        setLoggingOut(false);
        return;
      }

      closeMenus();
      window.location.assign("/");
    } catch (error) {
      console.error("Logout failed:", error);
      window.alert("Unable to log out. Please try again.");
      setLoggingOut(false);
    }
  }

  const primaryButton =
    "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 " +
    "whitespace-nowrap rounded-full border border-black bg-black px-4 " +
    "text-sm font-semibold !text-white no-underline " +
    "transition-colors hover:border-neutral-800 hover:bg-neutral-800 " +
    "hover:!text-white focus-visible:outline focus-visible:outline-2 " +
    "focus-visible:outline-offset-2 focus-visible:outline-black " +
    "[&_svg]:!text-white";

  const secondaryButton =
    "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 " +
    "whitespace-nowrap rounded-full px-3 text-sm font-medium " +
    "!text-black transition-colors hover:bg-neutral-100 hover:!text-black " +
    "[&_svg]:!text-black";

  // Hide public navigation on admin pages.
  // The admin area should have its own layout.
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto flex min-h-17 max-w-[1440px] items-center justify-between gap-2 px-3 sm:min-h-[76px] sm:gap-4 sm:px-6 lg:min-h-[82px] lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          prefetch={false}
          aria-label="Milton's Pharma homepage"
          className="min-w-0 shrink-0 text-black no-underline hover:text-black"
          onClick={(event) => {
            event.preventDefault();
            window.location.assign("/");
          }}
        >
          <span className="block whitespace-nowrap text-[16px] font-bold leading-tight tracking-[-0.6px] text-black sm:text-[21px] sm:tracking-[-0.7px]">
            MILTON&apos;S PHARMA
          </span>

          <span className="mt-1 block whitespace-nowrap text-[9px] leading-tight text-neutral-600 sm:text-[11px]">
            An initiative by Shree Ram Pharma
            <sup className="ml-0.5 text-neutral-600">®</sup>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            const active =
              (item.href ? isActive(pathname, item.href) : false) ||
              (item.children?.some((child) =>
                isActive(pathname, child.href),
              ) ??
                false);

            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={closeMenus}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-neutral-100 !text-black"
                      : "!text-neutral-700 hover:bg-neutral-100 hover:!text-black"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.7} />
                  {item.label}
                </Link>
              );
            }

            const expanded = dropdown === item.label;

            return (
              <div className="relative" key={item.label}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(item.label)}
                  className={`inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border-0 px-3 text-sm font-medium transition-colors ${
                    active || expanded
                      ? "bg-neutral-100 !text-black"
                      : "bg-transparent !text-neutral-700 hover:bg-neutral-100 hover:!text-black"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.7} />
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-[290px] rounded-2xl border border-neutral-200 bg-white p-2 text-black shadow-xl">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      const childActive = isActive(pathname, child.href);

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMenus}
                          className={`flex items-center gap-3 rounded-xl p-3 text-black transition-colors ${
                            childActive ? "bg-neutral-100" : "hover:bg-neutral-50"
                          }`}
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 text-black">
                            <ChildIcon size={18} strokeWidth={1.6} />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-black">
                              {child.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-neutral-500">
                              {child.description}
                            </span>
                          </span>

                          <ArrowRight
                            size={15}
                            className="shrink-0 text-neutral-400"
                          />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop account actions */}
        <div className="hidden shrink-0 items-center gap-1 xl:flex">
          {user ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  onClick={closeMenus}
                  className={secondaryButton}
                >
                  <ShieldCheck size={16} />
                  <span>Admin Panel</span>
                </Link>
              )}

              <Link
                href="/profile"
                onClick={closeMenus}
                className={secondaryButton}
              >
                <UserRound size={16} />
                <span>Profile</span>
              </Link>

              <button
                type="button"
                disabled={loggingOut}
                onClick={handleLogout}
                className={`${secondaryButton} disabled:opacity-50`}
              >
                <LogOut size={16} />
                <span>{loggingOut ? "Logging out..." : "Logout"}</span>
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={closeMenus}
                className={secondaryButton}
              >
                <LogIn size={16} />
                <span>Log in</span>
              </Link>

              <Link
                href="/signup"
                onClick={closeMenus}
                className={`${primaryButton} min-w-[148px] px-5`}
              >
                <UserPlus size={17} />
                <span className="!text-white">Create account</span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile and tablet actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          {user ? (
            <Link
              href={isAdmin ? "/admin" : "/profile"}
              onClick={closeMenus}
              aria-label={isAdmin ? "Admin Panel" : "Profile"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-black transition-colors hover:bg-neutral-100"
            >
              {isAdmin ? <ShieldCheck size={19} /> : <UserRound size={19} />}
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={closeMenus}
              className={`${secondaryButton} min-h-10 px-3 text-xs sm:px-4 sm:text-sm`}
            >
              <LogIn size={16} />
              <span>Log in</span>
            </Link>
          )}

          <button
            type="button"
            onClick={() => {
              setMobileOpen((current) => !current);
              setDropdown(null);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white !text-black transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {mobileOpen ? (
              <X size={20} className="text-black" />
            ) : (
              <Menu size={20} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-neutral-200 bg-white text-black shadow-xl lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="space-y-1 p-3 sm:p-4"
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              const active =
                (item.href ? isActive(pathname, item.href) : false) ||
                (item.children?.some((child) =>
                  isActive(pathname, child.href),
                ) ??
                  false);

              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={closeMenus}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-colors ${
                      active
                        ? "bg-neutral-100 !text-black"
                        : "!text-black hover:bg-neutral-50"
                    }`}
                  >
                    <Icon size={19} />
                    <span>{item.label}</span>
                  </Link>
                );
              }

              const expanded = dropdown === item.label;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex min-h-12 w-full items-center gap-3 rounded-xl border-0 px-4 text-left text-sm font-medium transition-colors ${
                      active || expanded
                        ? "bg-neutral-100 !text-black"
                        : "bg-white !text-black hover:bg-neutral-50"
                    }`}
                  >
                    <Icon size={19} />
                    <span className="flex-1">{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expanded && (
                    <div className="ml-5 mt-1 space-y-1 border-l border-neutral-200 pl-3">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        const childActive = isActive(pathname, child.href);

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeMenus}
                            className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm transition-colors ${
                              childActive
                                ? "bg-neutral-100 !text-black"
                                : "!text-neutral-700 hover:bg-neutral-50 hover:!text-black"
                            }`}
                          >
                            <ChildIcon size={17} />
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="my-3 border-t border-neutral-200" />

            {user ? (
              <>
                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={closeMenus}
                    className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-black transition-colors hover:bg-neutral-50"
                  >
                    <ShieldCheck size={18} />
                    <span>Admin Panel</span>
                  </Link>
                )}

                <Link
                  href="/profile"
                  onClick={closeMenus}
                  className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-black transition-colors hover:bg-neutral-50"
                >
                  <UserRound size={18} />
                  <span>My Profile</span>
                </Link>

                <button
                  type="button"
                  disabled={loggingOut}
                  onClick={handleLogout}
                  className="flex min-h-12 w-full items-center gap-3 rounded-xl px-4 text-left text-sm font-medium text-black transition-colors hover:bg-neutral-50 disabled:opacity-50"
                >
                  <LogOut size={18} />
                  <span>{loggingOut ? "Logging out..." : "Logout"}</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenus}
                  className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-black transition-colors hover:bg-neutral-50"
                >
                  <LogIn size={18} />
                  <span>Log in</span>
                </Link>

                <Link
                  href="/signup"
                  onClick={closeMenus}
                  className={`${primaryButton} flex w-full min-h-12`}
                >
                  <UserPlus size={17} />
                  <span className="!text-white">Create account</span>
                </Link>
              </>
            )}

            <Link
              href="/search"
              onClick={closeMenus}
              className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-black transition-colors hover:bg-neutral-50"
            >
              <Search size={18} />
              <span>Search study materials</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
