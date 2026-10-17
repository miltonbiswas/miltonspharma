
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  BookOpen,
  FileText,
  FolderOpen,
  LogOut,
  LoaderCircle,
  ArrowUpRight,
  LockKeyhole,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type PageStatus = "loading" | "authorized" | "forbidden" | "error";

export default function AdminPage() {
  const router = useRouter();

  const [status, setStatus] = useState<PageStatus>("loading");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function verifyAdmin() {
      try {
        const supabase = createClient();
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;

        if (!session) {
          router.replace("/admin/login");
          return;
        }

        if (!cancelled) {
          setEmail(session.user.email ?? "");
        }

        
const response = await fetch(
  "https://miltons-pharma-api.miltonbiswasdev.workers.dev/api/admin/me",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
    cache: "no-store",
  },
);

const responseBody = await response.text();

console.log("[Admin verification]", {
  status: response.status,
  body: responseBody,
});

if (cancelled) return;

if (response.status === 401) {
  await createClient().auth.signOut();
  router.replace("/admin/login");
  return;
}

if (response.status === 403) {
  setStatus("forbidden");
  return;
}

if (!response.ok) {
  setErrorMessage(
    `Admin API returned HTTP ${response.status}: ${responseBody.slice(0, 300)}`,
  );
  setStatus("error");
  return;
}

setStatus("authorized");


        if (cancelled) return;

        if (response.status === 401) {
          await supabase.auth.signOut();
          router.replace("/admin/login");
          return;
        }

        if (response.status === 403) {
          setStatus("forbidden");
          return;
        }

        if (!response.ok) {
          setErrorMessage(
            `Admin verification failed (HTTP ${response.status}). Please try again.`,
          );
          setStatus("error");
          return;
        }

        setStatus("authorized");
      } catch (error) {
        if (cancelled) return;

        console.error("Admin verification failed:", error);
        setErrorMessage(
          "Unable to verify admin access. Check your internet connection and try again.",
        );
        setStatus("error");
      }
    }

    void verifyAdmin();

    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleLogout() {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      window.location.assign("/admin/login");
    } catch (error) {
      console.error("Admin logout failed:", error);
      setErrorMessage("Logout failed. Please try again.");
      setLoggingOut(false);
    }
  }

  if (status === "loading") {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-5 text-black">
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <LoaderCircle className="animate-spin" size={20} />
          Verifying administrator access...
        </div>
      </main>
    );
  }

  if (status === "forbidden") {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-white px-5 text-black">
        <section className="w-full max-w-md text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200">
            <LockKeyhole size={25} />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Access denied
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            This account does not have administrator permissions.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white"
          >
            Return to homepage
          </Link>
        </section>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-5 text-black">
        <section className="w-full max-w-md">
          <h1 className="text-xl font-semibold">Admin verification failed</h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            {errorMessage}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-5 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Try again
          </button>
        </section>
      </main>
    );
  }

  const sections = [
    {
      title: "Study materials",
      description: "Manage educational content and notes.",
      icon: BookOpen,
      href: "/admin",
    },
    {
      title: "Articles",
      description: "Review and manage educational articles.",
      icon: FileText,
      href: "/admin",
    },
    {
      title: "Projects",
      description: "Manage student projects and resources.",
      icon: FolderOpen,
      href: "/admin",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex min-h-19 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="min-w-0">
            <span className="block text-base font-bold tracking-tight">
              MILTON&apos;S PHARMA
            </span>
            <span className="mt-1 block text-xs text-neutral-500">
              Administration
            </span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 text-sm font-medium transition hover:bg-neutral-100 disabled:opacity-50"
          >
            {loggingOut ? (
              <LoaderCircle size={16} className="animate-spin" />
            ) : (
              <LogOut size={16} />
            )}
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium">
              <ShieldCheck size={15} />
              Verified administrator
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Admin dashboard
            </h1>

            <p className="mt-3 text-sm text-neutral-600">
              Manage the Milton&apos;s Pharma educational platform.
            </p>
          </div>

          <div className="text-sm sm:text-right">
            <p className="text-neutral-500">Signed in as</p>
            <p className="mt-1 break-all font-medium">{email}</p>
          </div>
        </section>

        <section className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h2 className="mt-5 text-lg font-semibold">
                  {section.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {section.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-neutral-500">
                  <span>Management tools not connected yet</span>
                  <ArrowUpRight size={14} />
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
          <h2 className="font-semibold">Administrator account</h2>
          <p className="mt-2 break-all text-sm text-neutral-600">
            {email}
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-500">
            Access to this dashboard is checked against the backend
            administrator authorization endpoint. Content management
            actions must also be protected by the backend.
          </p>
        </section>
      </div>
    </main>
  );
}
