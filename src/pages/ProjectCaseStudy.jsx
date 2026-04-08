import { Link } from "react-router-dom";

const projects = [
  {
    slug: "nightflix",
    label: "Case Study",
    title: "Nightflix",
    summary:
      "A movie browsing application that allows users to explore movies, directors, and genres, manage a personal favorites list, and update their profile information through a responsive single-page experience.",
    meta: {
      role: "Full-Stack JavaScript Developer",
      timeline: "March 2024 – July 2024",
      type: "Personal portfolio project",
    },
    overview:
      "Nightflix is a movie browsing application that gives users access to information about movies, directors, and genres. It also allows users to sign up, manage their personal profile, and build a list of favorite movies.",
    purpose:
      "This project was developed during my web development course at CareerFoundry. It was created to demonstrate my full-stack JavaScript skills and my ability to take an application from the initial idea through design, development, and deployment.",
    objective:
      "The goal was to build a polished full-stack application that could serve as a strong portfolio project. I wanted to create both the server-side and client-side architecture from scratch and show that I can deliver a complete end-to-end solution.",
    duration:
      "I started the backend work in March 2024 with my first commit, and the official project work concluded in July 2024.",
    developmentProcess:
      "After completing the API, I focused on building the client-side interface in React. The result is a responsive single-page application designed to make navigation intuitive and the overall experience smooth across devices.",
    conclusion:
      "Nightflix became one of the most rewarding and demanding projects I have worked on. Building the API and exploring database structures strengthened my technical foundation, while developing the client-side deepened my understanding of how backend and frontend systems interact. The project required persistence, problem-solving, and continuous learning, and it ultimately helped me grow both technically and personally as a developer.",
    features: [
      "Browse movies, directors, and genres",
      "Create and manage a favorites list",
      "Sign up and log in securely",
      "Update personal profile information",
      "Explore a responsive single-page interface",
    ],
    views: [
      "Main view with a catalog of all available movies",
      "Single movie view with details and favorites action",
      "Login view for authentication",
      "Registration view for new users",
      "Profile view to update personal data and manage favorites",
    ],
    stack: {
      backend: [
        "Express.js",
        "MongoDB",
        "Passport.js",
        "JSDoc",
        "CORS",
        "Bcrypt",
      ],
      frontend: ["Node.js", "Express", "MongoDB", "React"],
      tools: [
        "Terminal",
        "Git",
        "Chrome Web Tools",
        "GitHub Desktop",
        "Parcel",
      ],
    },
    challenges: [
      {
        title: "Connecting backend and frontend correctly",
        text: "One of the biggest challenges was making sure the client-side matched the server-side endpoints and attribute names exactly. A small naming mismatch like using ‘Favourite’ instead of ‘favorite’, or inconsistent capitalization, caused frustrating bugs. Solving these issues gave me a much stronger understanding of how both sides of the application work together.",
      },
      {
        title: "Fixing React key handling in mapped movie cards",
        text: "While building the MainView, MovieCard, and MovieView components in JSX, I initially passed the wrong key in the mapped movie list. I used key={movie.id} instead of key={movie._id}, which led to rendering issues. Correcting that helped me better understand React’s rendering behavior and the importance of stable keys.",
      },
      {
        title: "Conditionally showing the logout button",
        text: "Another issue appeared after logout: the logout button remained visible even when no user was authenticated. I solved this by updating the conditional rendering logic so that the button only appears when a user is actually logged in.",
      },
      {
        title: "Rebuilding the database for consistency",
        text: "During development, I discovered a critical backend issue that required a complete MongoDB database overhaul. Images were inconsistent and the ObjectIDs for directors and genres did not match properly. I curated better assets, restructured the database for consistency, reloaded it into MongoDB Atlas, and redeployed the updated version on Heroku. Although time-intensive, this process significantly improved data integrity and application reliability.",
      },
      {
        title: "Creating a polished visual style",
        text: "Styling the application was another challenge, but also one of the most enjoyable parts of the project. I focused on building a distinctive interface that feels clean, engaging, and user-friendly across screen sizes.",
      },
    ],
    imagePlaceholders: [
      "App overview image",
      "Login screen",
      "Favorites view",
      "Navbar",
      "User profile",
      "Code snippet for logout fix",
    ],
  },
  {
    slug: "project-slug",
    label: "Case Study",
    title: "Project Title",
    summary:
      "Short introduction for the project card or page hero.",
    meta: {
      role: "Your role",
      timeline: "Start date – End date",
      type: "Project type",
    },
    overview: "Describe what the project is and what users can do with it.",
    purpose:
      "Explain the project context, why it was created, and what it demonstrates.",
    objective:
      "Describe the main goal and what you wanted to achieve technically or creatively.",
    duration:
      "Add a short timeline description here.",
    developmentProcess:
      "Explain how you built the project and what the user experience includes.",
    conclusion:
      "Summarize what you learned and why this project matters in your portfolio.",
    features: [
      "Feature one",
      "Feature two",
      "Feature three",
      "Feature four",
    ],
    views: [
      "Main view",
      "Detail view",
      "Authentication view",
      "Profile or dashboard view",
    ],
    stack: {
      backend: ["Backend tool 1", "Backend tool 2"],
      frontend: ["Frontend tool 1", "Frontend tool 2"],
      tools: ["Tool 1", "Tool 2", "Tool 3"],
    },
    challenges: [
      {
        title: "Challenge title",
        text: "Explain the challenge and how you solved it.",
      },
    ],
    imagePlaceholders: [
      "Hero image",
      "Feature screenshot",
      "Dashboard screenshot",
    ],
  },
];

function ProjectCaseStudy({ project }) {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <span className="text-base">←</span>
              Back to Home
            </a>
            <div className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-300">
              {project.label}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                {project.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Role
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">
                  {project.meta.role}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Timeline
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">
                  {project.meta.timeline}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Project Type
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">
                  {project.meta.type}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <main className="space-y-6 lg:col-span-8">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  {project.overview}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Purpose & Context</h2>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  {project.purpose}
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Objective</h2>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  {project.objective}
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Development Process</h2>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  {project.developmentProcess}
                </p>

                <div className="mt-6 space-y-3">
                  {project.views.map((view) => (
                    <div
                      key={view}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />
                      <p className="text-sm leading-6 text-white/80">{view}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Challenges & Learnings</h2>
                <div className="mt-6 space-y-4">
                  {project.challenges.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Conclusion</h2>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  {project.conclusion}
                </p>
              </article>
            </main>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/15 to-white/5 p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Duration</h2>
                <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                  {project.duration}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Tech Stack</h2>

                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white/50">
                      Backend
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.backend.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white/50">
                      Frontend
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.frontend.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white/50">
                      Other tools
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.tools.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-dashed border-white/15 bg-black/20 p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Images / Screens</h2>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Replace this block with your screenshots for:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {project.imagePlaceholders.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-24 bg-neutral-950 py-12 sm:py-16">
      {projects.map((project) => (
        <ProjectCaseStudy key={project.slug} project={project} />
      ))}
    </div>
  );
}

export { projects, ProjectCaseStudy };
