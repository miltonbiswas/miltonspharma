
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  FlaskConical,
} from "lucide-react";

type CourseLandingProps = {
  title: string;
  abbreviation: string;
  description: string;
  duration: string;
  subjects: string[];
};

const resources = [
  {
    title: "Study Notes",
    description: "Subject explanations and revision material.",
    icon: BookOpen,
  },
  {
    title: "Short Notes",
    description: "Concise explanations of important concepts.",
    icon: FileText,
  },
  {
    title: "Practicals",
    description: "Practical write-ups and laboratory guidance.",
    icon: FlaskConical,
  },
  {
    title: "Projects & Questions",
    description: "Academic project guidance and exam practice.",
    icon: ClipboardList,
  },
];

export default function CourseLanding({
  title,
  abbreviation,
  description,
  duration,
  subjects,
}: CourseLandingProps) {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-275 px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Pharmacy education / {abbreviation}
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>

          <p className="mt-4 text-sm text-neutral-500">{duration}</p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
            {description}
          </p>

          <a
            href="#subjects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Explore subjects <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section id="subjects" className="border-b border-neutral-200">
        <div className="mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Explore subjects
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
            Browse these introductory subject areas. Exact subject names and
            semester or year mapping must be verified against the applicable
            official curriculum before publishing study material.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div
                key={subject}
                className="rounded-xl border border-neutral-200 p-5 transition hover:border-neutral-500"
              >
                <p className="text-xs text-neutral-400">
                  SUBJECT {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-semibold">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Study resources
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <div
                  key={resource.title}
                  className="rounded-xl border border-neutral-200 p-5 sm:p-6"
                >
                  <Icon size={24} strokeWidth={1.5} />
                  <h3 className="mt-5 font-semibold">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {resource.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
