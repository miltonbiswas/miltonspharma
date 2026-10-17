import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import "./about.css";

const principles = [
  {
    number: "01",
    title: "Understand before memorising",
    description:
      "We want pharmacy students to understand the concepts behind medicines, mechanisms, formulations and pharmaceutical practice—not simply memorise answers.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Learning should be accessible",
    description:
      "Useful educational resources should be easier to discover, understand and revisit, regardless of where a student studies.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Knowledge grows when shared",
    description:
      "Students can learn from different explanations, notes, practical experiences and projects when knowledge is organised and responsibly shared.",
    icon: Users,
  },
  {
    number: "04",
    title: "Accuracy matters",
    description:
      "Pharmaceutical information needs context, credible references and responsible presentation. Educational content should never replace professional medical advice.",
    icon: ShieldCheck,
  },
];

const focusAreas = [
  "B.Pharm and D.Pharm study resources",
  "Subject-wise notes and revision material",
  "Pharmaceutical practicals and projects",
  "Drug and pharmaceutical knowledge",
  "Student contributions and shared learning",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/adhirajbiswasx/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/xmiltonbiswasx/",
    icon: FaLinkedin,
  },
];

export default function AboutPage() {
  return (
    <main className="mp-about">
      {/* HERO */}
      <section className="mp-hero">
        <div className="mp-hero-watermark" aria-hidden="true">
          MP
        </div>

        <div className="mp-container mp-hero-content">
          <div className="mp-hero-copy">
            <div className="mp-eyebrow">
              <span className="mp-eyebrow-dot" />
              ABOUT MILTON&apos;S PHARMA
            </div>

            <h1 className="mp-hero-title">
              Pharmacy knowledge,
              <br />
              <span>made easier to understand.</span>
            </h1>

            <p className="mp-hero-description">
              Milton&apos;s Pharma is an educational platform created to help
              pharmacy students discover learning resources, understand
              pharmaceutical concepts and learn through shared knowledge.
            </p>

            <div className="mp-actions">
              <Link
                href="/courses/bpharm"
                className="mp-button mp-button-black"
              >
                Explore learning resources
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <a href="#our-vision" className="mp-button mp-button-outline">
                Discover our vision
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mp-hero-visual" aria-hidden="true">
            <div className="mp-hero-orbit mp-orbit-one" />
            <div className="mp-hero-orbit mp-orbit-two" />

            <div className="mp-floating-card mp-float-top">
              <span className="mp-mini-icon mp-mini-violet">
                <BookOpen size={23} />
              </span>
              <span>
                <strong>Learn with clarity</strong>
                <small>Understand concepts</small>
              </span>
            </div>

            <div className="mp-hero-book">
              <div className="mp-book-cover">
                <div className="mp-book-symbol">
                  <Microscope size={48} strokeWidth={1.4} />
                </div>
                <span className="mp-book-kicker">DISCOVER</span>
                <strong>Pharma.</strong>
                <small>Knowledge in motion</small>
              </div>
              <div className="mp-book-pages" />
            </div>

            <div className="mp-floating-card mp-float-bottom">
              <span className="mp-mini-icon mp-mini-teal">
                <GraduationCap size={24} />
              </span>
              <span>
                <strong>Keep growing</strong>
                <small>One concept at a time</small>
              </span>
            </div>

            <div className="mp-hero-spark mp-spark-one">✳</div>
            <div className="mp-hero-spark mp-spark-two">✦</div>
          </div>
        </div>

        <div className="mp-hero-attribution">
          <div className="mp-container mp-attribution-inner">
            <p>
              An initiative by{" "}
              <strong>Shree Ram Pharma®</strong>
            </p>
            <p>Pharmacy education, with a bigger vision.</p>
          </div>
        </div>
      </section>

      {/* PLATFORM INTRODUCTION */}
      <section className="mp-section mp-story" id="our-story">
        <div className="mp-watermark" aria-hidden="true">
          STORY
        </div>

        <div className="mp-container mp-two-column">
          <div className="mp-section-heading">
            <span className="mp-section-label">01 / THE INITIATIVE</span>
            <h2>
              A learning platform
              <br />
              with a <span className="mp-gradient-text">purpose.</span>
            </h2>
          </div>

          <div className="mp-body-copy">
            <p>
              <strong>Milton&apos;s Pharma</strong> is an educational platform
              intended to make pharmacy learning more organised, approachable
              and useful for students.
            </p>

            <p>
              The platform aims to bring together study notes, subject
              resources, practical material, projects and pharmaceutical
              knowledge in one place. Its long-term goal is to support a
              community where students can discover resources and share their
              work responsibly as contribution features become available.
            </p>

            <div className="mp-initiative-card">
              <div className="mp-feature-icon mp-icon-violet">
                <HeartHandshake size={25} />
              </div>

              <div>
                <span className="mp-small-label">
                  OFFICIAL INITIATIVE ATTRIBUTION
                </span>
                <h3>Shree Ram Pharma®</h3>
                <p>
                  The initiative attribution behind Milton&apos;s Pharma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="mp-section mp-vision-section" id="our-vision">
        <div className="mp-dark-watermark" aria-hidden="true">
          VISION
        </div>

        <div className="mp-container">
          <div className="mp-section-heading mp-vision-heading">
            <span className="mp-section-label mp-label-light">
              02 / WHERE WE WANT TO GO
            </span>
            <h2>
              A clearer path through
              <br />
              pharmacy education.
            </h2>
          </div>

          <div className="mp-vision-grid">
            <article className="mp-dark-card mp-vision-card">
              <div className="mp-feature-icon mp-icon-violet">
                <Target size={27} />
              </div>

              <span className="mp-card-eyebrow">OUR VISION</span>

              <h3>
                Make pharmaceutical knowledge easier to access and understand.
              </h3>

              <p>
                We aspire to build a useful learning destination for pharmacy
                students across India—one that encourages curiosity, deeper
                understanding and responsible knowledge sharing.
              </p>
            </article>

            <article className="mp-light-card mp-vision-card">
              <div className="mp-feature-icon mp-icon-orange">
                <BookOpen size={27} />
              </div>

              <span className="mp-card-eyebrow">OUR MISSION</span>

              <h3>
                Turn scattered study material into a more useful learning
                experience.
              </h3>

              <p>
                We aim to organise educational resources by programme and
                subject, make concepts easier to explore, encourage student
                contributions and improve the way learners find and revisit
                information.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mp-section mp-principles-section">
        <div className="mp-container">
          <div className="mp-section-heading mp-heading-wide">
            <span className="mp-section-label">03 / WHAT GUIDES US</span>
            <h2>
              Principles behind
              <br />
              the <span className="mp-gradient-text">platform.</span>
            </h2>
            <p>
              The experience should be useful to students, responsible in its
              treatment of pharmaceutical information and open to improvement.
            </p>
          </div>

          <div className="mp-principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className={`mp-principle-card mp-principle-${index + 1}`}
                >
                  <div className="mp-principle-top">
                    <span>{principle.number}</span>
                    <div className="mp-feature-icon">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>

                  <div className="mp-principle-footer">
                    <span>OUR PRINCIPLE</span>
                    <CheckCircle2 size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORM FOCUS */}
      <section className="mp-section mp-focus-section">
        <div className="mp-container mp-two-column">
          <div className="mp-section-heading">
            <span className="mp-section-label">04 / WHAT WE ARE BUILDING</span>
            <h2>
              One place
              <br />
              to keep <span className="mp-gradient-text">learning.</span>
            </h2>
            <p>
              The platform is intended to grow around the real study needs of
              pharmacy learners, from semester preparation to practical
              knowledge and independent exploration.
            </p>
          </div>

          <div className="mp-focus-list">
            {focusAreas.map((area, index) => (
              <div className="mp-focus-row" key={area}>
                <span className="mp-focus-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mp-focus-name">{area}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE BEHIND THE PLATFORM */}
      <section className="mp-section mp-people-section">
        <div className="mp-watermark" aria-hidden="true">
          PEOPLE
        </div>

        <div className="mp-container">
          <div className="mp-section-heading mp-heading-wide">
            <span className="mp-section-label">05 / WHO IS BEHIND IT</span>
            <h2>
              The people behind
              <br />
              the <span className="mp-gradient-text">purpose.</span>
            </h2>
            <p>
              Educational direction and technology are different
              responsibilities. We present them separately to keep the
              platform&apos;s story clear.
            </p>
          </div>

          <div className="mp-people-grid">
            {/* FOUNDER */}
            <article className="mp-person-card">
              <div className="mp-person-art mp-founder-art">
                <span className="mp-person-watermark">01</span>

                <div className="mp-person-emblem mp-founder-emblem">
                  <GraduationCap size={57} strokeWidth={1.3} />
                </div>

                <span className="mp-person-badge">
                  FOUNDER &amp; PROJECT LEAD
                </span>
              </div>

              <div className="mp-person-content">
                <span className="mp-person-role">EDUCATIONAL DIRECTION</span>
                <h3>Milton Biswas</h3>
                <p className="mp-person-qualification">B.Pharm</p>

                <p className="mp-person-description">
                  The founder behind the idea of making pharmacy study
                  material more organised, discoverable and approachable. The
                  project combines a pharmaceutical learning purpose with a
                  digital platform designed to grow over time.
                </p>

                <div className="mp-social-divider" />

                <span className="mp-small-label">
                  CONNECT WITH THE FOUNDER
                </span>

                <div className="mp-social-links">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit founder's ${social.label} profile`}
                        className="mp-social-button"
                      >
                        <Icon size={19} aria-hidden="true" />
                        <span>{social.label}</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* TECHNOLOGY PARTNER */}
            <article className="mp-person-card">
              <div className="mp-person-art mp-developer-art">
                <span className="mp-person-watermark">02</span>

                <div className="mp-person-emblem mp-developer-emblem">
                  <Code2 size={54} strokeWidth={1.3} />
                </div>

                <span className="mp-person-badge">
                  TECHNOLOGY PARTNER
                </span>
              </div>

              <div className="mp-person-content">
                <span className="mp-person-role">DIGITAL EXPERIENCE</span>
                <h3>Adhiraj Developers</h3>
                <p className="mp-person-qualification">
                  Technology partner
                </p>

                <p className="mp-person-description">
                  The technology partner associated with the platform&apos;s
                  digital experience and development. The goal is to make
                  educational resources easier to navigate through a
                  thoughtful, accessible and responsive interface.
                </p>

                <div className="mp-developer-services">
                  <div>
                    <CheckCircle2 size={17} />
                    <span>Website experience and interface</span>
                  </div>
                  <div>
                    <CheckCircle2 size={17} />
                    <span>Digital platform development</span>
                  </div>
                  <div>
                    <CheckCircle2 size={17} />
                    <span>Usability and future improvements</span>
                  </div>
                </div>

                <div className="mp-developer-note">
                  Official developer social profiles can be added once their
                  URLs are confirmed.
                </div>
              </div>
            </article>
          </div>

          {/* LEADERSHIP TRANSPARENCY */}
          <div className="mp-leadership-note">
            <div className="mp-feature-icon mp-icon-orange">
              <ShieldCheck size={25} />
            </div>

            <div>
              <h3>Leadership and accountability</h3>
              <p>
                Milton Biswas is identified as founder and project lead.
                Adhiraj Developers is identified separately as the technology
                partner. A CEO title or separate executive appointment should
                be added only after the person and designation have been
                confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mp-final-section">
        <div className="mp-container">
          <div className="mp-final-card">
            <div className="mp-final-watermark" aria-hidden="true">
              MP
            </div>

            <div className="mp-final-orbit" aria-hidden="true" />

            <div className="mp-final-content">
              <span className="mp-final-label">
                THE NEXT CHAPTER
              </span>

              <h2>
                Better learning starts
                <br />
                when knowledge is shared.
              </h2>

              <p>
                Our goal is to build a platform where pharmacy students can
                discover useful material, strengthen their understanding and
                contribute to a responsible learning community as contribution
                features become available.
              </p>

              <div className="mp-actions">
                <Link
                  href="/courses/bpharm"
                  className="mp-button mp-button-white"
                >
                  Explore B.Pharm
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  href="/"
                  className="mp-button mp-button-dark-outline"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>

          <p className="mp-disclaimer">
            Milton&apos;s Pharma is an educational platform. Its resources are
            intended for learning and reference; they do not replace
            professional medical judgement, official academic requirements or
            applicable laws and regulations.
          </p>
        </div>
      </section>
    </main>
  );
}