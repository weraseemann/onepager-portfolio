export default function MyMovieApiCaseStudy() {
  const overview = [
    "my-movie-api is the server-side component of the Nightflix web application.",
    "The API provides users with access to information about movies, directors, and genres.",
    "Users can sign up, update personal information, and manage a list of favorite movies through secure RESTful endpoints.",
  ];

  const objectives = [
    "Build a robust RESTful API from scratch.",
    "Design and implement the backend architecture for the Nightflix app.",
    "Showcase server-side development skills including authentication, database design, validation, testing, and deployment.",
  ];

  const techStack = [
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Passport.js",
    "JSDoc",
    "CORS",
    "Bcrypt",
    "Postman",
    "REST architecture",
  ];

  const otherTools = ["Terminal", "GitHub", "Heroku", "MongoDB Atlas"];

  const fiveWs = [
    {
      label: "Who",
      text: "The users of the Nightflix app—movie enthusiasts who enjoy reading information about different movies.",
    },
    {
      label: "What",
      text: "A responsive movie application supported by a REST API that handles user requests, authentication, and movie data delivery.",
    },
    {
      label: "When",
      text: "Users can access Nightflix whenever they want to browse, save, and revisit information about different movies.",
    },
    {
      label: "Where",
      text: "The app is hosted online and can be used on any device, providing the same experience across locations.",
    },
    {
      label: "Why",
      text: "Movie enthusiasts want easy access to movie information and the ability to save favorites for future viewing or recommendations.",
    },
  ];

  const processSteps = [
    {
      title: "Planning and preparation",
      text: "I began by writing user stories based on the application’s core features. These stories helped define the project scope and user requirements before setting up the repository, project structure, and first GitHub commit.",
    },
    {
      title: "Node.js foundations",
      text: "In the early stage, I created the base server files including documentation.html, index.html, server.js, log.txt, and test.js. I used the http, fs, and url modules to serve pages, parse requests, and log incoming request data for debugging and analytics.",
    },
    {
      title: "Packages and project setup",
      text: "I later replaced the initial setup by introducing npm and creating an index.js entry point. I installed core dependencies like Express and body-parser, generated package.json, and excluded node_modules through .gitignore to keep version control clean.",
    },
    {
      title: "Express refactor",
      text: "I restructured the project to use Express more effectively. This included setting up routes, serving static documentation files, integrating Morgan for request logging, and implementing error-handling middleware for better maintainability and debugging.",
    },
    {
      title: "REST API endpoints",
      text: "I defined the key API endpoints needed for the application, including retrieving all movies, accessing individual movie, genre, and director data, registering users, updating profiles, managing favorites, and deregistering accounts. I documented and tested these endpoints with Postman.",
    },
    {
      title: "MongoDB database design",
      text: "I created a non-relational database using MongoDB with movies and users collections. Movie documents contained embedded genre and director data, while user documents stored birthdays as Date types and favorite movies through references.",
    },
    {
      title: "Business logic layer",
      text: "Using Mongoose, I created schemas and models for the application so the rest of the backend could work with structured, validated data more consistently.",
    },
    {
      title: "Authentication and authorization",
      text: "I implemented both basic HTTP authentication and JWT-based authentication. Passport strategies were added as middleware so only authenticated users with valid tokens could access protected API endpoints.",
    },
    {
      title: "Security, validation, and deployment",
      text: "To align with data security standards, I added validation logic, secure password handling, and storage controls. I deployed the API to Heroku and the database to MongoDB Atlas to ensure the full backend worked together in a real hosted environment.",
    },
  ];

  const endpoints = [
    "Return a list of all movies",
    "Return data about a single movie by title",
    "Return data about a genre by name",
    "Return data about a director by name",
    "Allow new users to register",
    "Allow users to update profile information",
    "Allow users to add movies to favorites",
    "Allow users to remove movies from favorites",
    "Allow existing users to deregister",
  ];

  const highlights = [
    "Built a complete RESTful API architecture for a real application use case",
    "Integrated authentication and authorization using Passport.js and JWT",
    "Designed MongoDB collections for movies and users with structured relationships",
    "Documented and tested endpoints thoroughly with Postman",
    "Deployed both API and database to cloud platforms for production access",
  ];

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <span className="text-base">←</span>
          Back
        </a>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300">
              Case Study
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                my-movie-api
              </h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
                A RESTful backend API for the Nightflix application, focused on
                movie data, user accounts, authentication, and favorites
                management.
              </p>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                See project on GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5 sm:grid-cols-3 lg:grid-cols-1">
            <Stat label="Role" value="Backend Developer" />
            <Stat label="Timeline" value="February 2024 – April 2024" />
            <Stat label="Type" value="Personal Portfolio Project" />
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
          <img
            src="/my-movie-api-cover.jpg"
            alt="my-movie-api overview"
            className="h-full w-full object-cover"
          />
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <ContentCard title="Overview">
            <div className="space-y-4">
              {overview.map((item) => (
                <p
                  key={item}
                  className="text-sm leading-7 text-neutral-300 sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </ContentCard>

          <ContentCard title="Purpose & Context">
            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              my-movie-api is a personal project developed during my web
              development course at CareerFoundry. It showcases my expertise in
              server-side programming and serves as the backend for Nightflix, a
              movie application based on the MERN stack. Access to the database
              is provided through a RESTful API that supports the client-side
              experience.
            </p>
          </ContentCard>
        </section>

        <section className="mt-6">
          <ContentCard title="Objective">
            <div className="grid gap-4 lg:grid-cols-3">
              {objectives.map((goal) => (
                <div
                  key={goal}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4"
                >
                  <p className="text-sm leading-7 text-neutral-300">{goal}</p>
                </div>
              ))}
            </div>
          </ContentCard>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <ContentCard title="Duration">
            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              I started the backend part of the project in February 2024 with my
              first commit, and the official work on the project ended in April
              2024.
            </p>
          </ContentCard>

          <ContentCard title="Tech Stack">
            <TagList items={techStack} />
          </ContentCard>

          <ContentCard title="Other Tools">
            <TagList items={otherTools} />
          </ContentCard>
        </section>

        <section className="mt-16">
          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Project Framing
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The 5 Ws
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {fiveWs.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300 sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Development Process
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                From planning to deployment
              </h2>
            </div>

            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              The project evolved from a simple Node.js server into a complete
              backend application with structured routing, database integration,
              authentication, validation, and cloud deployment.
            </p>

            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              Each phase helped strengthen my understanding of backend
              architecture and the responsibilities involved in building a secure
              and maintainable API.
            </p>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 sm:p-5"
              >
                <div className="mb-2 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <ContentCard title="REST API Endpoints">
            <div className="grid gap-3">
              {endpoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4"
                >
                  <p className="text-sm leading-7 text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </ContentCard>

          <ContentCard title="Key Achievements">
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4"
                >
                  <p className="text-sm leading-7 text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </ContentCard>
        </section>

        <section className="mt-16">
          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Backend Screens
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Project gallery
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "API overview",
                image: "/my-movie-api-overview.jpg",
              },
              {
                title: "MongoDB collections",
                image: "/my-movie-api-database.jpg",
              },
              {
                title: "Authentication setup",
                image: "/my-movie-api-auth.jpg",
              },
              {
                title: "Validation and security",
                image: "/my-movie-api-security.jpg",
              },
              {
                title: "Postman endpoint testing",
                image: "/my-movie-api-postman.jpg",
              },
              {
                title: "Deployment setup",
                image: "/my-movie-api-deployment.jpg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900"
              >
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="px-4 py-3 text-sm text-neutral-300">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <ContentCard title="Conclusion">
            <div className="space-y-4">
              <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                The my-movie-api project was a comprehensive backend development
                exercise that demonstrated the process of designing and
                implementing a robust RESTful API for the Nightflix application.
              </p>
              <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                By integrating Node.js, Express.js, MongoDB, and Mongoose, I was
                able to build a functional server-side application that handled
                routing, data storage, authentication, validation, and secure user
                access.
              </p>
              <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                The project also strengthened my understanding of modularity,
                maintainability, deployment, and real-world backend workflows.
                With this foundation in place, the API became a strong base for
                the Nightflix client-side application and a meaningful addition to
                my portfolio.
              </p>
            </div>
          </ContentCard>
        </section>
      </div>
    </main>
  );
}

function ContentCard({ title, children }) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </p>
      <p className="text-sm font-medium text-white">{value}</p>
    </div>
  );
}