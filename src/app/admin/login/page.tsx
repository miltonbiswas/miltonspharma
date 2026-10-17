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
  ShieldCheck,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setLoading(false);
    }
  }

  async function googleLogin() {
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/admin`,
        },
      });
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign in failed.");
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#fafafa] px-4 py-12 text-neutral-900 antialiased sm:px-6 lg:px-8">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-125 -translate-x-1/2 rounded-full bg-neutral-200/50 blur-3xl" />

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
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
              <ShieldCheck size={13} className="text-neutral-900" />
              <span>Restricted Access</span>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              Admin Sign In
            </h1>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Dashboard access ke liye authorised administrative credentials ki zaroorat hoti hai.
            </p>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={googleLogin}
            disabled={loading}
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs font-semibold text-neutral-700 shadow-2xs transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-sm active:scale-[0.99] disabled:opacity-50 sm:text-sm"
          >
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
            <span>or admin credentials</span>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Form */}
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700">
                Admin Email
              </label>
              <div className="relative mt-1.5 flex items-center">
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-3.5 text-neutral-400"
                />
                <input
                  type="email"
                  required
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@miltonspharma.com"
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

            {/* Explicit White Text Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-neutral-950 px-4 text-xs font-bold text-white! transition-all duration-200 hover:bg-neutral-800 active:scale-[0.99] disabled:opacity-50 sm:text-sm"
            >
              <span className="font-bold text-white!">
                {loading ? "Authenticating..." : "Sign In to Dashboard"}
              </span>
            </button>
          </form>

          {/* Regular Login Link */}
          <div className="mt-6 border-t border-neutral-100 pt-5 text-center text-xs text-neutral-500">
            <Link
              href="/login"
              className="font-medium text-neutral-600 hover:text-neutral-900 hover:underline"
            >
              ← Regular student / user login
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-[11px] text-neutral-400">
          Milton&apos;s Pharma · Admin Control Console
        </p>
      </div>
    </main>
  );
}