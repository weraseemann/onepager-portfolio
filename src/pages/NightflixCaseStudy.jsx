export default function NightflixCaseStudy() {
  const overview = [
    "Nightflix is a movie browsing application that allows users to manage favorite lists and update profiles.",
    "The web application gives users access to information about movies, directors, and genres.",
    "Users can sign up, update personal information, and create a list of their favorite movies.",
  ];

  const goals = [
    "Create a polished full-stack application for a professional portfolio.",
    "Build both server-side and client-side parts from scratch.",
    "Showcase end-to-end JavaScript development skills, from database design to deployment.",
  ];

  const backendStack = [
    "Express.js",
    "MongoDB",
    "Passport.js",
    "JSDoc",
    "CORS",
    "Bcrypt",
  ];

  const frontendStack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Parcel",
  ];

  const otherTools = [
    "Terminal",
    "Git",
    "Chrome Web Tools",
    "GitHub Desktop",
  ];

  const views = [
    "Main view with a catalog of all available movies",
    "Single movie view with detailed information and favorite action",
    "Login view for authentication",
    "Registration view for new users",
    "Profile view for updating personal data and managing favorites",
  ];

  const challenges = [
    {
      title: "Backend and frontend connection",
      text: "The biggest challenge was connecting the server-side and client-side using the correct endpoints and attribute names. A small naming mismatch like using ‘Favourite’ instead of ‘favorite’ caused unnecessary bugs, but it also deepened my understanding of how the whole application fits together.",
    },
    {
      title: "React component structure",
      text: "I built the MainView, MovieCard, and MovieView components in JSX. One issue came from using the wrong key in the movie list. I used movie.id instead of movie._id, which caused problems because the correct value in the dataset was _id.",
    },
    {
      title: "Conditional navigation state",
      text: "Another issue appeared in the logout flow. Even after a user logged out, the logout button was still visible. I solved this by making the button render only when a user is actually authenticated.",
    },
    {
      title: "Database rebuild",
      text: "During development I found a major backend issue: image assets were inconsistent and ObjectIDs for directors and genres did not match correctly. I rebuilt the MongoDB data structure, curated better images, reuploaded the data to MongoDB Atlas, and redeployed the application. This was time-intensive, but it improved reliability and data integrity significantly.",
    },
    {
      title: "Styling the interface",
      text: "Creating a visual style that felt polished and consistent across the app was also a challenge. This part took time, but it helped shape the final user experience and gave the project a stronger identity.",
    },
  ];

  const galleryItems = [
  {
    title: "Nightflix app overview",
    image: "/nightflix-react-home.jpg",
  },
  {
    title: "Sign in screen",
    image: "/nightflix-signin.jpg",
  },
  {
    title: "Favorite movies view",
    image: "/nightflix-favourites.jpg",
  },
  {
    title: "Search bar",
    image: "/nightflix-navbar.jpg",
  }, 
  {
    title: "Movie card view",
    image: "/nightflix-card.jpg",
  },
  {
    title: "User profile",
    image: "/nightflix-up.jpg",
  },
 
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
                Nightflix
              </h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
                A full-stack movie browsing application focused on user accounts,
                favorite lists, and a responsive single-page experience.
              </p>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5 sm:grid-cols-3 lg:grid-cols-1">
            <Stat label="Role" value="Full-Stack Developer" />
            <Stat label="Timeline" value="March 2024 – July 2024" />
            <Stat label="Type" value="Personal Portfolio Project" />
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
            <img src="/nightflix-react-home.jpg" alt="Nightflix Image" />
          
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <ContentCard title="Overview">
            <div className="space-y-4">
              {overview.map((item) => (
                <p key={item} className="text-sm leading-7 text-neutral-300 sm:text-base">
                  {item}
                </p>
              ))}
            </div>
          </ContentCard>

          <ContentCard title="Purpose & Context">
            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              Nightflix was developed during my web development course at
              CareerFoundry. It highlights my ability to design, build, and deploy
              a complete JavaScript application while working across both backend
              and frontend architecture.
            </p>
          </ContentCard>
        </section>

        <section className="mt-6">
          <ContentCard title="Objective">
            <div className="grid gap-4 lg:grid-cols-3">
              {goals.map((goal) => (
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
              I started the backend in March 2024 with my first commit, and the
              official work on the project concluded in July 2024.
            </p>
          </ContentCard>

          <ContentCard title="Backend Tech Stack">
            <TagList items={backendStack} />
          </ContentCard>

          <ContentCard title="Frontend & Tools">
            <div className="space-y-5">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Frontend stack
                </p>
                <TagList items={frontendStack} />
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Other tools
                </p>
                <TagList items={otherTools} />
              </div>
            </div>
          </ContentCard>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Development Process
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                From API to responsive interface
              </h2>
            </div>

            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              Once the API was complete, I shifted focus to the user interface that
              connects to the server-side. The result is a responsive single-page
              application built with React.
            </p>

            <p className="text-sm leading-7 text-neutral-300 sm:text-base">
              The interface was designed to support smooth navigation, clear user
              flows, and an intuitive browsing experience across devices.
            </p>
          </div>

          <div className="grid gap-4">
  {views.map((view) => (
   
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked
          readOnly
          className="mt-1 h-5 w-5 accent-primary/90"
        />

        <div className="flex-1">
          <div className="mb-1 text-sm font-semibold text-white">
            
          </div>
          <p className="text-sm leading-7 text-neutral-300">{view}</p>
        </div>
     
    </div>
  ))}
</div>
        </section>

        <section className="mt-16">
          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              App Screens
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Image gallery
            </h2>
          </div>

         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {galleryItems.map((item) => (
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
          <div className="mb-6 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Challenges
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Key problems and lessons learned
            </h2>
          </div>

          <div className="grid gap-4">
            {challenges.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300 sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <ContentCard title="Conclusion">
            <div className="space-y-4">
              <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                This project was both my most rewarding and most challenging
                development experience. I especially enjoyed designing the API and
                working with database structures, which helped strengthen my
                technical foundation.
              </p>
              <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                The client-side brought a new set of challenges, especially around
                understanding the relationship between backend and frontend logic.
                Reaching the final result required persistence, experimentation,
                and a lot of debugging.
              </p>
              <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                With support from my mentor and guidance during difficult debugging
                sessions, I was able to bring the application to life. The project
                strengthened both my technical skills and my resilience as a
                developer.
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
