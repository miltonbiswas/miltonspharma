"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  User,
  Users,
} from "lucide-react";

type RoleType = "student" | "teacher" | "pharmacist" | "other";

const roleOptions = [
  {
    id: "student" as const,
    label: "Student",
    subtext: "B.Pharm / D.Pharm",
    icon: GraduationCap,
    accent: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    id: "teacher" as const,
    label: "Teacher",
    subtext: "Faculty & Professors",
    icon: Users,
    accent: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    id: "pharmacist" as const,
    label: "Pharmacist",
    subtext: "Retail, Hospital & Clinical",
    icon: Stethoscope,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    id: "other" as const,
    label: "Other",
    subtext: "Researcher & Industry",
    icon: Building2,
    accent: "text-amber-600 bg-amber-50 border-amber-200",
  },
];

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<RoleType>("student");

  // Role Specific Fields
  const [institution, setInstitution] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("B.Pharm");
  const [semester, setSemester] = useState("Semester I");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [profession, setProfession] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const supabase = createClient();

      const profileMetadata: Record<string, string> = {
        display_name: name.trim(),
        role: role,
      };

      if (role === "student") {
        profileMetadata.institution = institution.trim();
        profileMetadata.roll_no = rollNo.trim();
        profileMetadata.course = course;
        profileMetadata.semester = semester;
      } else if (role === "teacher") {
        profileMetadata.institution = institution.trim();
        profileMetadata.department = department.trim();
        profileMetadata.designation = designation.trim();
      } else if (role === "pharmacist") {
        profileMetadata.workplace = workplace.trim();
        profileMetadata.registration_number = regNumber.trim();
      } else if (role === "other") {
        profileMetadata.profession = profession.trim();
        profileMetadata.institution = institution.trim();
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: profileMetadata,
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/`,
        },
      });

      if (error) throw error;

      if (data.session) {
        setMessage("Account created successfully! Redirecting...");
        window.location.assign("/");
      } else {
        setMessage(
          "Account created successfully! Please check your email to confirm your address before logging in.",
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed.");
    } finally {
      setLoading(false);
    }
  }

  async function googleSignup() {
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/onboarding`,
        },
      });

      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google signup failed.");
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#fafafa] px-4 py-12 text-neutral-900 antialiased sm:px-6 lg:px-8">
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-137.5 -translate-x-1/2 rounded-full bg-linear-to-r from-blue-200/40 via-indigo-200/30 to-violet-200/30 blur-3xl" />

      <div className="w-full max-w-xl">
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
        <div className="mt-6 rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl shadow-neutral-900/5 sm:p-9">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
  <Sparkles size={12} className="text-neutral-900" />
  <span>Join Milton&apos;s Pharma</span>
</div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              Create your account
            </h1>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Access pharmacy syllabus directories, notes, and practical resources.
            </p>
          </div>

          {/* Quick Google Sign In */}
          <button
            type="button"
            onClick={googleSignup}
            disabled={loading}
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs font-semibold text-neutral-700 shadow-2xs transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50/70 hover:shadow-sm active:scale-[0.99] disabled:opacity-50 sm:text-sm"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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
            <span>or register with email</span>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Form */}
          <form onSubmit={signup} className="space-y-4">
            {/* Name & Email */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-neutral-700">
                  Full Name
                </label>
                <div className="relative mt-1.5 flex items-center">
                  <User size={16} className="pointer-events-none absolute left-3.5 text-neutral-400" />
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Milton Biswas"
                    className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-10 pr-3 text-xs text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">
                  Email Address
                </label>
                <div className="relative mt-1.5 flex items-center">
                  <Mail size={16} className="pointer-events-none absolute left-3.5 text-neutral-400" />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-10 pr-3 text-xs text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700">
                Password
              </label>
              <div className="relative mt-1.5 flex items-center">
                <Lock size={16} className="pointer-events-none absolute left-3.5 text-neutral-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 pl-10 pr-10 text-xs text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white"
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

            {/* Role Selection (Symmetrical, Equal Height, Clean High-Contrast Cards) */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-neutral-700">
                I am a:
              </label>

              <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {roleOptions.map((item) => {
                  const Icon = item.icon;
                  const active = role === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRole(item.id)}
                      className={`relative flex min-h-18 flex-col items-center justify-center rounded-xl border p-2.5 text-center transition-all duration-200 active:scale-[0.98] ${
                        active
                          ? "border-neutral-900 bg-neutral-900 text-white shadow-md"
                          : "border-neutral-200/90 bg-white text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={`transition-colors ${
                          active ? "text-white" : "text-neutral-600"
                        }`}
                      />
                      <span
                        className={`mt-1.5 block w-full truncate text-xs font-bold leading-tight ${
                          active ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Symmetrical Form Area */}
            <div className="rounded-2xl border border-neutral-200/90 bg-[#fafafa] p-4 sm:p-5">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {role === "student" && "Academic Student Credentials"}
                  {role === "teacher" && "Faculty & Department Credentials"}
                  {role === "pharmacist" && "Pharmacy Practice Credentials"}
                  {role === "other" && "Professional Background"}
                </span>
              </div>

              {/* 1. Student */}
              {role === "student" && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      College / University Name
                    </label>
                    <input
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Madhav University"
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700">
                        Roll No. / Enrollment
                      </label>
                      <input
                        type="text"
                        required
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                        placeholder="e.g. 21BPH042"
                        className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700">
                        Degree / Course
                      </label>
                      <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-900 outline-none transition focus:border-neutral-900"
                      >
                        <option value="B.Pharm">B.Pharm (Bachelor of Pharmacy)</option>
                        <option value="D.Pharm">D.Pharm (Diploma in Pharmacy)</option>
                        <option value="M.Pharm">M.Pharm (Master of Pharmacy)</option>
                        <option value="Pharm.D">Pharm.D (Doctor of Pharmacy)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Current Semester / Academic Stage
                    </label>
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-900 outline-none transition focus:border-neutral-900"
                    >
                      <option value="Semester I">Semester I (1st Year)</option>
                      <option value="Semester II">Semester II (1st Year)</option>
                      <option value="Semester III">Semester III (2nd Year)</option>
                      <option value="Semester IV">Semester IV (2nd Year)</option>
                      <option value="Semester V">Semester V (3rd Year)</option>
                      <option value="Semester VI">Semester VI (3rd Year)</option>
                      <option value="Semester VII">Semester VII (4th Year)</option>
                      <option value="Semester VIII">Semester VIII (4th Year)</option>
                      <option value="1st Year Annual">D.Pharm 1st Year (Annual)</option>
                      <option value="2nd Year Annual">D.Pharm 2nd Year (Annual)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* 2. Teacher */}
              {role === "teacher" && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Institution / College Name
                    </label>
                    <input
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Faculty of Pharmaceutical Sciences"
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700">
                        Department / Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="e.g. Pharmaceutics"
                        className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700">
                        Designation
                      </label>
                      <input
                        type="text"
                        required
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="e.g. Assistant Professor"
                        className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Pharmacist */}
              {role === "pharmacist" && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Store / Hospital / Firm Name
                    </label>
                    <input
                      type="text"
                      required
                      value={workplace}
                      onChange={(e) => setWorkplace(e.target.value)}
                      placeholder="e.g. Shree Ram Pharma / City Care Pharmacy"
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      State Pharmacy Council Registration No.
                    </label>
                    <input
                      type="text"
                      required
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      placeholder="e.g. RSPC-68420"
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                    />
                  </div>
                </div>
              )}

              {/* 4. Other */}
              {role === "other" && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Current Profession / Title
                    </label>
                    <input
                      type="text"
                      required
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      placeholder="e.g. Clinical Research Associate, MR"
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Organization / Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Cipla / Sun Pharma / Independent"
                      className="mt-1 h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs text-neutral-900 outline-none transition focus:border-neutral-900"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Error & Message */}
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50/80 p-3 text-xs text-rose-700"
              >
                <ShieldAlert size={16} className="shrink-0 text-rose-600" />
                <span className="leading-relaxed">{error}</span>
              </div>
            )}

            {message && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs text-emerald-800"
              >
                <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                <span className="leading-relaxed">{message}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
  type="submit"
  disabled={loading}
  className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-neutral-950 px-4 text-xs font-semibold text-white! transition-all duration-200 hover:bg-neutral-800 active:scale-[0.99] disabled:opacity-50 sm:text-sm"
>
  <span className="font-semibold text-white!">
    {loading ? "Creating your profile..." : "Create Account"}
  </span>
</button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 border-t border-neutral-100 pt-5 text-center text-xs text-neutral-500">
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-neutral-900 hover:underline"
              >
                Sign in
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