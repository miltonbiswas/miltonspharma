"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  User,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAdminLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://miltons-pharma-api.vercel.app/api";
      
      const res = await fetch(`${apiUrl}/admin/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid Django admin credentials.");
      }

      if (data.token) {
        localStorage.setItem("django_admin_token", data.token);
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Admin sign in failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#fafafa] px-4 py-12 text-neutral-900 antialiased sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-125 -translate-x-1/2 rounded-full bg-neutral-200/50 blur-3xl" />

      <div className="w-full max-w-md">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          <span>Back to Milton&apos;s Pharma</span>
        </Link>

        <div className="mt-6 rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xl shadow-neutral-900/5 sm:p-9">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
              <ShieldCheck size={13} className="text-neutral-900" />
              <span>Django Admin Portal</span>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              Admin Sign In
            </h1>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Enter your Django administrator credentials to access the management panel.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700">
                Admin Username
              </label>
              <div className="relative mt-1.5 flex items-center">
                <User
                  size={16}
                  className="pointer-events-none absolute left-3.5 text-neutral-400"
                />
                <input
                  type="text"
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="h-11 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-10 pr-3.5 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700">
                Password
              </label>
              <div className="relative mt-1.5 flex items-center">
                <Lock
                  size={16}
                  className="pointer-events-none absolute left-3.5 text-neutral-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-10 pr-10 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 text-neutral-400 transition hover:text-neutral-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700"
              >
                <ShieldAlert size={15} className="shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-neutral-950 px-4 text-xs font-bold text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.99] disabled:opacity-50 sm:text-sm"
            >
              <span className="font-bold text-white">
                {loading ? "Authenticating..." : "Sign In to Admin Panel"}
              </span>
            </button>
          </form>

          <div className="mt-6 border-t border-neutral-100 pt-5 text-center text-xs text-neutral-500">
            <Link
              href="/login"
              className="font-medium text-neutral-600 hover:text-neutral-900 hover:underline"
            >
              ← Regular student / user login
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-neutral-400">
          Milton&apos;s Pharma · Django Backend Admin Console
        </p>
      </div>
    </main>
  );
}