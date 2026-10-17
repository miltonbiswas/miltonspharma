"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;
      router.replace("/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  async function googleLogin() {
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/`,
        },
      });

      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google login failed.");
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-12 text-neutral-900 antialiased sm:px-6 lg:px-8">
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-125 -translate-x-1/2 rounded-full bg-linear-to-r from-blue-300/25 via-indigo-300/20 to-violet-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-72 w-80 rounded-full bg-emerald-200/25 blur-3xl" />

      <div className="w-full max-w-md">
        {/* Back Link */}
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

        {/* Card Container */}
        <div className="mt-6 rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xl shadow-neutral-900/5 sm:p-9">
          {/* Header */}
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-700">
              <Sparkles size={12} className="text-indigo-600" />
              <span>Student Portal</span>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-1.5 text-xs text-neutral-500 sm:text-sm">
              Sign in to access your saved notes, subjects, and study progress.
            </p>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={googleLogin}
            disabled={loading}
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs font-semibold text-neutral-700 shadow-2xs transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50/70 hover:shadow-sm active:scale-[0.99] disabled:opacity-50 sm:text-sm"
          >
            {/* Google SVG Logo */}
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.87c2.27-2.09 3.675-5.17 3.675-9.14z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.04c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.24v3.13C3.26 21.36 7.35 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.25c-.25-.72-.39-1.49-.39-2.25s.14-1.53.39-2.25V6.62H1.24C.45 8.19 0 10.02 0 12s.45 3.81 1.24 5.38l4.03-3.13z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.24 6.62l4.03 3.13c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            <span className="h-px flex-1 bg-neutral-200" />
            <span>or sign in with email</span>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Credentials Form */}
          <form onSubmit={login} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700">
                Email address
              </label>
              <div className="relative mt-1.5 flex items-center">
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-3.5 text-neutral-400"
                />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu"
                  className="h-11 w-full rounded-xl border border-neutral-200 bg-neutral-50/50 pl-10 pr-3.5 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-neutral-700">
                  Password
                </label>
              </div>
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
                  className="h-11 w-full rounded-xl border border-neutral-200 bg-neutral-50/50 pl-10 pr-10 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 text-neutral-400 transition hover:text-neutral-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error Message Alert */}
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50/80 p-3 text-xs text-rose-700"
              >
                <ShieldAlert size={16} className="shrink-0 text-rose-600" />
                <span className="leading-relaxed">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
  type="submit"
  disabled={loading}
  className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-neutral-950 px-4 text-xs font-semibold text-white! transition-all duration-200 hover:bg-neutral-800 active:scale-[0.99] disabled:opacity-50 sm:text-sm"
>
  <span className="font-semibold text-white!">
    {loading ? "Signing in..." : "Sign in to account"}
  </span>
</button>
          </form>

          {/* Links */}
          <div className="mt-6 border-t border-neutral-100 pt-5 text-center text-xs text-neutral-500">
            <p>
              New to the platform?{" "}
              <Link
                href="/signup"
                className="font-bold text-neutral-900 hover:underline"
              >
                Create an account
              </Link>
            </p>

            <p className="mt-3">
              <Link
                href="/admin/login"
                className="font-medium text-neutral-400 transition-colors hover:text-neutral-700 hover:underline"
              >
                Administrator portal sign in →
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-[11px] text-neutral-400">
          Milton&apos;s Pharma · Verified Pharmacy Academic Commons
        </p>
      </div>
    </main>
  );
}