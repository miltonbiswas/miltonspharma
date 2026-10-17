"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Heart,
  Layers3,
  Library,
  Mail,
  MoveUpRight,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const resourceLinks = [
  {
    label: "B.Pharm",
    href: "/courses/bpharm/select-syllabus",
    detail: "Bachelor of Pharmacy",
    icon: GraduationCap,
    iconColor: "text-blue-600 bg-blue-50 border-blue-200/60",
  },
  {
    label: "D.Pharm",
    href: "/courses/dpharm",
    detail: "Diploma in Pharmacy",
    icon: BookOpen,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
  },
  {
    label: "Subjects",
    href: "/subjects",
    detail: "Explore study topics",
    icon: Library,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
  },
  {
    label: "Drug Index",
    href: "/drug-index",
    detail: "Pharmacology & dosage",
    icon: Layers3,
    iconColor: "text-amber-600 bg-amber-50 border-amber-200/60",
  },
  {
    label: "Articles",
    href: "/articles",
    detail: "High-yield topics",
    icon: BookOpen,
    iconColor: "text-violet-600 bg-violet-50 border-violet-200/60",
  },
  {
    label: "Projects",
    href: "/projects",
    detail: "Academic resources",
    icon: Sparkles,
    iconColor: "text-rose-600 bg-rose-50 border-rose-200/60",
  },
];

const platformLinks = [
  { label: "About the platform", href: "/about" },
  { label: "Student community", href: "/community" },
  { label: "Submit a resource", href: "/submit" },
  { label: "Contact us", href: "/contact" },
];

const courseLinks = [
  { label: "B.Pharm Syllabus", href: "/courses/bpharm/select-syllabus" },
  { label: "D.Pharm Resources", href: "/courses/dpharm" },
  { label: "Laboratory Guides", href: "/practicals" },
  { label: "Question Bank", href: "/questions" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Help & contact", href: "/contact" },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-xs text-neutral-600 transition-colors duration-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
    >
      <span>{children}</span>
      <ChevronRight
        size={12}
        className="text-neutral-400 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-neutral-900"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative isolate overflow-hidden border-t border-neutral-200/80 bg-white text-neutral-900"
    >
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute -left-28 top-0 -z-10 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="mx-auto max-w-340 px-5 sm:px-8 lg:px-12">
        {/* Student Contribution Banner */}
        <section className="py-12 sm:py-16">
          <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-950 p-7 text-white shadow-xl sm:p-10 lg:p-12">
            {/* Colorful Inner Background Gradients */}
            <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
              <div className="max-w-2xl text-left">
                {/* Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-200">
                  <Users size={14} className="text-violet-300" />
                  <span>Learning is better together</span>
                </div>

                {/* Explicitly white heading */}
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have something useful{" "}
                  <span className="bg-linear-to-r from-violet-300 via-indigo-200 to-sky-300 bg-clip-text text-transparent">
                    to share?
                  </span>
                </h2>

                {/* Visible Light Paragraph */}
                <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
                  Your unit notes, practical journal files, and project summaries can guide
                  another pharmacy student. Contribute your study resources and help build an
                  open academic commons.
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-300">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <ShieldCheck size={15} className="text-emerald-400" />
                    Reviewed by student peers
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <CheckCircle2 size={15} className="text-sky-400" />
                    Strictly non-commercial
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-55">
                {/* Primary Button with guaranteed dark text */}
                <Link
                  href="/submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-neutral-950 shadow-md transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg active:scale-95"
                >
                  <Send size={15} className="text-neutral-950" />
                  <span className="text-neutral-950 font-bold">Submit a resource</span>
                  <ArrowUpRight size={14} className="text-neutral-950" />
                </Link>

                {/* Secondary Ghost Button */}
                <Link
                  href="/community"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white/40 active:scale-95"
                >
                  <span className="text-white">Meet the community</span>
                  <ArrowRight size={15} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer Directory */}
        <section className="grid gap-12 border-t border-neutral-200/80 py-12 sm:py-16 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
          {/* Brand & Founder Card */}
          <div className="space-y-6">
            <div>
              <Link
                href="/"
                aria-label="Milton's Pharma homepage"
                className="text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl"
              >
                MILTON&apos;S <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PHARMA</span>
              </Link>

              <p className="mt-1.5 text-xs font-medium text-neutral-500">
                An academic initiative by Shree Ram Pharma<sup>®</sup>
              </p>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Milton&apos;s Pharma brings semester syllabi, subject guides, and verified practical resources together under one clean interface so students can spend less time searching and more time mastering concepts.
            </p>

            {/* Founder Profile Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:border-violet-300 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700">
                    Founder & Developer
                  </span>
                  <h3 className="mt-1 text-base font-bold tracking-tight text-neutral-900">
                    Milton Biswas
                  </h3>
                  <p className="text-xs text-neutral-500">
                    B.Pharm · Also known as Adhiraj Thakur
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20">
                  <GraduationCap size={20} />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3.5">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/adhirajbiswasx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Milton Biswas on Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                  >
                    <FaInstagram size={15} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/xmiltonbiswasx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Milton Biswas on LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>

                <span className="text-[11px] font-medium text-neutral-400">
                  Tech by Adhiraj Developers
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
            {/* Column 1: Discover */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Study Vault
              </h4>

              <ul className="mt-4 space-y-3">
                {resourceLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-2.5 transition-colors"
                      >
                        <div
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs ${item.iconColor}`}
                        >
                          <Icon size={13} />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs font-semibold text-neutral-800 transition-colors group-hover:text-neutral-950">
                            {item.label}
                          </span>
                          <span className="block text-[11px] text-neutral-400">
                            {item.detail}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 2: Platform & Courses */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Platform
              </h4>

              <ul className="mt-4 space-y-2.5">
                {platformLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 text-xs font-bold uppercase tracking-wider text-neutral-900">
                Courses
              </h4>

              <ul className="mt-4 space-y-2.5">
                {courseLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Support */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Information
              </h4>

              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>

              {/* Student Mission Box */}
              <div className="mt-8 rounded-2xl border border-neutral-200/90 bg-neutral-50/60 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-rose-50 text-rose-600 border border-rose-200/70">
                    <Heart size={14} className="fill-rose-500 text-rose-500" />
                  </div>
                  <h5 className="text-xs font-bold text-neutral-900">
                    Students First
                  </h5>
                </div>

                <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">
                  Created to make pharmaceutical education direct and stress-free.
                </p>

                <Link
                  href="/about"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-neutral-900 hover:underline"
                >
                  <span>Our commitment</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Signature & Copyright */}
        <section className="border-t border-neutral-200/80 py-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Core Philosophy
              </p>
              <p className="mt-1 text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
                Knowledge should be accessible to every student.
              </p>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-xl border border-neutral-200 bg-white px-4 text-xs font-semibold text-neutral-800 shadow-2xs transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white sm:self-auto"
            >
              <span>Back to top</span>
              <MoveUpRight size={13} />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-neutral-100 pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Milton&apos;s Pharma. All rights reserved.</p>

            <p className="inline-flex items-center gap-1.5">
              <span>Crafted for pharmacy learners with</span>
              <Heart size={12} className="fill-rose-500 text-rose-500" />
            </p>

            <a
              href="mailto:contact@miltonspharma.com"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-neutral-900"
            >
              <Mail size={13} />
              <span>contact@miltonspharma.com</span>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}