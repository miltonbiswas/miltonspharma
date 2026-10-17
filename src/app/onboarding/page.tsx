"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  GraduationCap,
  Users,
  Stethoscope,
  Building2,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

type RoleType = "student" | "teacher" | "pharmacist" | "other";

export default function OnboardingPage() {
  const router = useRouter();
  const [role, setRole] = useState<RoleType>("student");

  // Specific state fields
  const [institution, setInstitution] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("B.Pharm");
  const [semester, setSemester] = useState("Semester I");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [profession, setProfession] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if profile is already complete
  useEffect(() => {
    async function checkExisting() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      // If user already answered these questions, send them home
      if (user.user_metadata?.role) {
        router.replace("/");
      }
    }
    checkExisting();
  }, [router]);

  async function handleOnboarding(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const metadata: Record<string, string> = { role };

      if (role === "student") {
        metadata.institution = institution.trim();
        metadata.roll_no = rollNo.trim();
        metadata.course = course;
        metadata.semester = semester;
      } else if (role === "teacher") {
        metadata.institution = institution.trim();
        metadata.department = department.trim();
        metadata.designation = designation.trim();
      } else if (role === "pharmacist") {
        metadata.workplace = workplace.trim();
        metadata.registration_number = regNumber.trim();
      } else {
        metadata.profession = profession.trim();
        metadata.institution = institution.trim();
      }

      const { error } = await supabase.auth.updateUser({
        data: metadata,
      });

      if (error) throw error;

      router.replace("/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save profile.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 py-12 text-neutral-900">
      <div className="w-full max-w-lg rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl sm:p-9">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-700">
          <Sparkles size={12} className="text-indigo-600" />
          <span>Almost There</span>
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Complete Your Profile
        </h1>
        <p className="mt-1.5 text-xs text-neutral-500 sm:text-sm">
          Tell us about your pharmacy role to tailor your semester notes and catalog.
        </p>

        <form onSubmit={handleOnboarding} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700">
              Select Your Role:
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { id: "student", label: "Student", icon: GraduationCap },
                { id: "teacher", label: "Teacher", icon: Users },
                { id: "pharmacist", label: "Pharmacist", icon: Stethoscope },
                { id: "other", label: "Other", icon: Building2 },
              ].map((item) => {
                const Icon = item.icon;
                const active = role === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id as RoleType)}
                    className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-semibold transition ${
                      active
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/70 p-4">
            {role === "student" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    College / University
                  </label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="e.g. Madhav University"
                    className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Roll Number
                    </label>
                    <input
                      type="text"
                      required
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      placeholder="e.g. 21BPH042"
                      className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700">
                      Course
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-2 text-xs outline-none focus:border-neutral-900"
                    >
                      <option value="B.Pharm">B.Pharm</option>
                      <option value="D.Pharm">D.Pharm</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Semester
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-2 text-xs outline-none focus:border-neutral-900"
                  >
                    <option value="Semester I">Semester I</option>
                    <option value="Semester II">Semester II</option>
                    <option value="Semester III">Semester III</option>
                    <option value="Semester IV">Semester IV</option>
                    <option value="Semester V">Semester V</option>
                    <option value="Semester VI">Semester VI</option>
                    <option value="Semester VII">Semester VII</option>
                    <option value="Semester VIII">Semester VIII</option>
                  </select>
                </div>
              </div>
            )}

            {role === "teacher" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Institution / University
                  </label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="mt-1 h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Department"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="h-9 rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                  />
                  <input
                    type="text"
                    placeholder="Designation"
                    required
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="h-9 rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                  />
                </div>
              </div>
            )}

            {role === "pharmacist" && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Firm / Hospital / Store Name"
                  required
                  value={workplace}
                  onChange={(e) => setWorkplace(e.target.value)}
                  className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                />
                <input
                  type="text"
                  placeholder="State Pharmacy Council Reg No."
                  required
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                />
              </div>
            )}

            {role === "other" && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Profession"
                  required
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-xs outline-none focus:border-neutral-900"
                />
              </div>
            )}
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
              <ShieldAlert size={15} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 text-xs font-bold text-white shadow-md disabled:opacity-50"
          >
            {loading ? "Saving Profile..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </main>
  );
}