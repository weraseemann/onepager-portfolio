import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Nightflix (Angular)",
    subtitle: "The client-side movie browsing application with Angular ",
    image: "/nightflix-angular.jpg",
    problem:
      "The goal of this project was to create a sophisticated client-side application with Angular that could serve as a standout addition to my professional portfolio.",
    solution:
      "I designed a Single page application (SPA) built using Angular CLI, Angular Material and Angular Flex Layout. The app is a movie database that allows users to sign up, log in, view movie details, and save favorite movies.",
    techStack: {
      frontend: ["Angular", "Angular Material", "JavaScript","Typescript"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["GitHub"],
    },
    conclusion:
      "This project was both my most rewarding and most challenging endeavor. I thoroughly enjoyed designing the API and delving into database structures, which allowed me to strengthen my foundational knowledge. I also quickly became comfortable navigating and utilizing the terminal, a skill I found both empowering and essential. The transition to developing the client-side presented new hurdles, particularly in understanding the intricate interplay between the backend and frontend. Achieving the desired results required persistence and a willingness to learn. However, with the invaluable guidance of my exceptional mentor and a few intensive debugging sessions with an experienced developer, I was able to overcome these challenges and successfully bring the project to life. This experience solidified both my technical expertise and my resilience as a developer. The project improved my frontend architecture skills and demonstrates my ability to build polished and user-friendly interfaces.",
    link: "https://weraseemann.github.io/myFlix-Angular-client/welcome",
  },
  {
    id: 2,
    title: "my-movie-api",
    subtitle: "The server-side component of a “movies” web application.",
    image: "",
    problem:
      "To build a web application that provides users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.",
    solution:
      "I built an API for an app called “Nightflix” that interacts with a database that stores data about different movies based on MERN-Teckstack (MongoDb, Express, React, Node.js), and access to that data is provided via a REST API (also known as a “RESTful API”).",
    techStack: {
      frontend: [""],
      backend: ["Express.js","Node.js","MongoDB","Mongoose","Passport.js","Bcrypt","Cors"],
      tools: ["Postman",  "JSDoc"],
    },
    conclusion:
      "The my-movie-api project was a comprehensive backend development exercise that showcased the process of designing and implementing a robust RESTful API for a movie database application, Nightflix. From conceptualization to deployment, this project demonstrated the use of the MERN stack to build a functional server-side application. By integrating technologies like Node.js, Express.js, and MongoDB, the project effectively managed routing, user authentication, data storage, and API functionality. Key achievements included the implementation of RESTful API endpoints, user authentication with JWT and Passport.js, secure data storage using MongoDB Atlas, and deploying the application on Heroku for real-world access. This project emphasized modularity, maintainability, and scalability, with features such as logging using Morgan, error handling, and static file serving. Testing tools like Postman ensured the API's functionality and security compliance. With this solid foundation, the project paves the way for the development of a polished client-side interface in the next phase, making it a significant addition to my portfolio.",
    link: "https://github.com/weraseemann/my-movie-api",
  },
  {
    id: 3,
    title: "Calculator",
    subtitle: "The progressive web application (PWA) built with JavaScript.",
    image: "/calculator.jpg",
    problem:
      "Users need a fancy calculator. The objective of the Calculator app is to provide users with an efficient and seamless calculator with amazing design for managing simple calculations, integrating advanced mathematical functions such as using parentheses, decimal numbers.",
    solution:
      "Calculator is a personal project, showcasing my expertise in writing User Stories, app development as well as my ability to design and implement a functional PWA from concept to deployment.",
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript", "PWA"],
      backend: [""],
      tools: ["GitHub", "Netlify", "Google Analitics"],
    },
    conclusion:
      "The development of this calculator app combined aesthetic creativity with practical implementation. The process followed best practices in functionality, design, monitoring, and progressive enhancement. Every step was executed with attention to detail to ensure a smooth, reliable, and visually engaging user experience. While the design embraces a unique and stylized theme, the core of the app remains focused on delivering high-quality performance and usability. This project reflects a thoughtful balance between form and function, offering users something both elegant and efficient.",
    link: "https://my-amazing-calculator.netlify.app/",
  },
  {
  id: 4,
  title: "ChatOnGo",
  subtitle:
    "A mobile chat application built with React Native for real-time messaging, image sharing, and location sharing.",
  image: "/chat-on-go.jpg",
  problem:
    "Users need a simple and reliable mobile chat application that allows them to communicate in real time, share images, and send their location. The objective of ChatOnGo is to provide an intuitive chat experience with personalization options, while ensuring messages and shared content are available both online and offline.",
  solution:
    "ChatOnGo is a mobile chat application project that demonstrates my ability to build cross-platform apps with React Native and Expo. It includes a start page where users can enter their name and choose a background color before joining the chat, a conversation screen with a message input and submit button, and additional features for sharing images and location data. The app uses Google Firestore Database and Firebase Cloud Storage to support real-time communication and persistent data storage.",
  techStack: {
    frontend: ["React Native", "Expo", "Gifted Chat Library"],
    backend: ["Google Firestore Database", "Firebase Cloud Storage"],
    tools: ["GitHub", "Firebase"],
  },
  conclusion:
    "The development of ChatOnGo combined mobile-first design with practical real-time communication features. The project focused on creating a smooth and engaging chat experience, while also integrating media sharing, location sharing, and reliable online and offline data handling. Every part of the app was built to balance usability, functionality, and performance. This project reflects my ability to develop modern mobile applications that are both user-friendly and technically robust.",
  link: "https://github.com/weraseemann/chat-app",
}
];

function TechColumn({ title, items }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
        {title}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseStudyItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Project
          </p>

          <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
            {item.title}
          </h3>

          <p className="text-lg leading-8 text-gray-600 md:text-2xl">
            {item.subtitle}
          </p>
        </div>

        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 self-start rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-900 hover:text-primary"
        >
          {isOpen ? "Close case" : "Read case"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "mt-8 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 border-t border-gray-200 pt-8 md:grid-cols-2">
            {item.image && (
              <div className="md:col-span-2">
                <div className="max-w-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    className="w-full h-auto max-w-[500px] object-cover transition duration-300 hover:scale-[1.01]"
                  />
                </div>
              </div>
            )}

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Problem
              </h4>
              <p className="mt-3 text-base leading-7 text-gray-700">
                {item.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Solution
              </h4>
              <p className="mt-3 text-base leading-7 text-gray-700">
                {item.solution}
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Tech Stack
              </h4>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <TechColumn title="Frontend" items={item.techStack.frontend} />
                <TechColumn title="Backend" items={item.techStack.backend} />
                <TechColumn title="Tools" items={item.techStack.tools} />
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Conclusion
              </h4>
              <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">
                {item.conclusion}
              </p>
            </div>

            <div className="md:col-span-2">
              <a
                href={item.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline underline-offset-4 transition hover:opacity-70"
              >
                Visit project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyPreview() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="scroll-mt-24 bg-gray-50 py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">
              PROJECTS
            </p>
          <h2 className="text-5xl font-medium md:text-7xl">Discover other Projects</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 md:text-2xl">
            A closer look at selected projects, the problems behind them, and
            the solutions I built.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {caseStudies.map((item) => (
            <CaseStudyItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}