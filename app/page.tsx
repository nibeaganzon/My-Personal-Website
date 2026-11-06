
import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "ERP SYSTEM DESIGN",
    title: "Business Process to SAP Solution",
    description:
      "Translating client business requirements into structured SAP Business One workflows, functional specifications, and practical system designs.",
    tags: ["SAP Business One", "Process Analysis", "Functional Design"],
    accent: "blue",
  },
  {
    number: "02",
    category: "PROCUREMENT & INVENTORY",
    title: "Procure-to-Pay Workflow",
    description:
      "Mapping purchasing activities, goods receipt, accounts payable, and inventory movements into a connected ERP process.",
    tags: ["Purchasing", "Inventory", "Finance"],
    accent: "cyan",
  },
  {
    number: "03",
    category: "REPORTING & AUTOMATION",
    title: "Smarter ERP Operations",
    description:
      "Exploring reporting, alerts, document layouts, and AI-assisted capabilities that can improve visibility and day-to-day decision-making.",
    tags: ["Reporting", "SAP B1", "AI Concepts"],
    accent: "violet",
  },
];

const skills = [
  "SAP Business One",
  "Business Process Analysis",
  "Requirements Documentation",
  "ERP Workflow Design",
  "SQL & Query Analysis",
  "Crystal Reports",
  "C#",
  "C++",
  ".NET",
  "AI & Machine Learning",
  "System Analysis",
  "Technical Documentation",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand stakeholder needs, current business processes, pain points, and operational goals.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Identify requirements, process gaps, dependencies, and opportunities for improvement.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Translate requirements into SAP workflows, functional documentation, and proposed solutions.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Review requirements, test scenarios, reports, and expected system behavior with stakeholders.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Support implementation activities, documentation, issue resolution, and continuous improvement.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#home">
          NG<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="availability" href="#contact">
          <span className="status-dot" />
          OPEN TO CONNECTIONS
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-background-word" aria-hidden="true">
          NIKKI GANZON
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            COMPUTER ENGINEERING × ENTERPRISE TECHNOLOGY
          </p>

          <p className="handwritten">Hello, I'm</p>

          <h1>
            NIKKI
            <br />
            <span>GANZON</span>
          </h1>

          <h2>SAP CONSULTANT &amp; BUSINESS PROCESS ENTHUSIAST</h2>

          <p className="hero-description">
            I bridge the gap between business needs and technology by
            translating real-world processes into practical SAP solutions.
            I&apos;m passionate about building systems that make work
            clearer, smarter, and more efficient.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="button button-secondary" href="#about">
              Get to know me
            </a>
          </div>

          <p className="location-line">
            <span className="status-dot" />
            BASED IN THE PHILIPPINES · WORKING WITH AXXIS CONSULTING
          </p>
        </div>

        <div className="hero-visual" aria-label="Professional profile graphic">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-center">
            <Image
              src="/images/nikki.jpg"
              alt="Nikki Ganzon"
              fill
              priority
              sizes="210px"
              className="profile-photo"
            />
            <div className="photo-caption">
              <span className="visual-monogram">NG</span>
              <span>BUSINESS × TECHNOLOGY</span>
            </div>
          </div>

          <div className="floating-card floating-top">
            <span className="mini-label">FOCUS AREA</span>
            <strong>SAP Business One</strong>
            <span className="card-subtitle">Enterprise solutions</span>
          </div>

          <div className="floating-card floating-bottom">
            <span className="mini-label">MY APPROACH</span>
            <strong>Understand.</strong>
            <strong>Design. Improve.</strong>
          </div>

          <div className="visual-cross cross-one">+</div>
          <div className="visual-cross cross-two">+</div>
        </div>

        <div className="hero-index">
          <span>01 / INTRODUCTION</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="intro-strip">
        <div>
          <span className="strip-label">CURRENT ROLE</span>
          <strong>SAP Consultant</strong>
        </div>
        <div>
          <span className="strip-label">ORGANIZATION</span>
          <strong>AXXIS Consulting</strong>
        </div>
        <div>
          <span className="strip-label">EDUCATION</span>
          <strong>Computer Engineering</strong>
        </div>
        <div>
          <span className="strip-label">UNIVERSITY</span>
          <strong>Ateneo de Davao University</strong>
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 — A LITTLE ABOUT ME</p>
          <h2>
            Engineering thinking.
            <br />
            <span>Business impact.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-lead">
            <p>
              My journey started with Computer Engineering, where I
              developed an appreciation for understanding how systems work
              and solving problems through technology.
            </p>
            <p>
              Today, as an SAP Consultant at AXXIS Consulting in Singapore,
              I apply that foundation to enterprise systems—understanding
              business requirements, analyzing workflows, and helping shape
              SAP solutions around the way organizations operate.
            </p>
            <p>
              I believe good systems are not just technically sound. They
              should also make sense to the people who use them.
            </p>

            <a
              className="text-link"
              href="https://www.linkedin.com/in/nicole-beatriz-ganzon-a4b377319/"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me on LinkedIn ↗
            </a>
          </div>

          <div className="about-note">
            <span className="note-mark">“</span>
            <blockquote>
              The best solution is not simply the one that works. It is the
              one that works for the people and processes behind it.
            </blockquote>
            <span className="note-caption">MY APPROACH TO CONSULTING</span>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">02 — SELECTED WORK &amp; FOCUS AREAS</p>
              <h2>
                Turning business needs
                <br />
                <span>into system solutions.</span>
              </h2>
            </div>

            <p className="heading-note">
              A look at the ERP processes and solution areas that shape my
              consulting work.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card accent-${project.accent}`}
                key={project.number}
              >
                <div className="project-art">
                  <span className="project-number">{project.number}</span>
                  <div className="project-art-content">
                    <span className="art-overline">BUSINESS SYSTEMS</span>
                    <div className="workflow-graphic">
                      <div className="workflow-node">INPUT</div>
                      <span className="workflow-arrow">→</span>
                      <div className="workflow-node workflow-node-main">
                        SAP
                      </div>
                      <span className="workflow-arrow">→</span>
                      <div className="workflow-node">OUTPUT</div>
                    </div>
                    <span className="art-caption">
                      REQUIREMENTS → PROCESS → SOLUTION
                    </span>
                  </div>
                  <span className="project-index">NG / ERP</span>
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-disclaimer">
            These are representative areas of work and professional focus,
            not claims of publicly available client deliverables. Specific
            project details are intentionally omitted to respect
            confidentiality.
          </p>
        </div>
      </section>

      <section className="section-wrap skills-process" id="skills">
        <div className="skills-panel">
          <p className="eyebrow">03 — TOOLKIT</p>
          <h2>
            Skills &amp;
            <br />
            <span>capabilities.</span>
          </h2>
          <p className="panel-description">
            A combination of ERP consulting, engineering fundamentals, and
            technical problem-solving.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <a
            className="text-link"
            href="https://www.linkedin.com/in/nicole-beatriz-ganzon-a4b377319/details/skills/"
            target="_blank"
            rel="noreferrer"
          >
            View my LinkedIn skills ↗
          </a>
        </div>

        <div className="process-panel">
          <p className="eyebrow">04 — HOW I WORK</p>
          <h2>From requirements to results.</h2>

          <div className="process-list">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="process-plus">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section-wrap education-grid">
          <div>
            <p className="eyebrow">05 — MY FOUNDATION</p>
            <h2>
              Built on curiosity.
              <br />
              <span>Driven by growth.</span>
            </h2>
          </div>

         <article className="education-card">
            <a
              href="https://www.addu.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="education-icon addu-logo"
              aria-label="Visit Ateneo de Davao University website"
            >
              <Image
                src="/images/addulogo.jpg"
                alt="Ateneo de Davao University logo"
                width={100}
                height={100}
                className="addu-logo-image"
              />
            </a>

            <div>
              <p className="project-category">EDUCATION</p>
              <h3>Ateneo de Davao University</h3>
              <p className="education-degree">
                Bachelor&apos;s Degree in Computer Engineering
              </p>
              <p className="education-description">
                A foundation in engineering principles, systems thinking,
                programming, and analytical problem-solving.
              </p>
            </div>
          </article>

          <article className="education-card">
            <a
              href="https://axxis-consulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="education-icon axxis-logo"
              aria-label="Visit AXXIS Consulting website"
            >
              <Image
                src="/images/axxislogo.jpeg"
                alt="AXXIS Consulting logo"
                width={120}
                height={80}
                className="axxis-logo-image"
              />
            </a>

            <div>
              <p className="project-category">PROFESSIONAL EXPERIENCE</p>
              <h3>AXXIS Consulting</h3>
              <p className="education-degree">SAP Consultant</p>
              <p className="education-description">
                Working at the intersection of business processes and
                enterprise technology, with a focus on SAP solutions and
                client requirements.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="section-wrap">
          <p className="eyebrow">06 — LET&apos;S CONNECT</p>

          <div className="contact-grid">
            <div>
              <h2>
                LET&apos;S BUILD
                <br />
                <span>BETTER SYSTEMS.</span>
              </h2>
              <p className="contact-description">
                Interested in SAP, enterprise solutions, technology, or
                exchanging ideas about making business processes better?
                I&apos;d love to connect.
              </p>
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/nicole-beatriz-ganzon-a4b377319/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            <div className="contact-details">
              <a
                href="https://www.linkedin.com/in/nicole-beatriz-ganzon-a4b377319/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">in</span>
                <span>
                  <small>LINKEDIN</small>
                  <strong>Nicole Beatriz Ganzon</strong>
                </span>
                <span>↗</span>
              </a>

              <a href="#home">
                <span className="contact-icon">↑</span>
                <span>
                  <small>BACK TO THE TOP</small>
                  <strong>Return to introduction</strong>
                </span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <a className="wordmark" href="#home">
              NG<span>.</span>
            </a>
            <p>DESIGNED WITH PURPOSE · BUILT AROUND BUSINESS</p>
            <p>© {new Date().getFullYear()} NIKKI GANZON</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
