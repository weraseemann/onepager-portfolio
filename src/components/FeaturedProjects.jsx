import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
   {
    title: "Nightflix (React)",
    description:
      "Nightflix is a client-side demo web application that allows users to browse, view details, and manage their favorite movies. Users can sign up, log in, view a list of movies, see details about each movie, and manage their profile and favorite movies.",
    image: "/nightflix-react-home.jpg",
    tech: ["React", "Nodejs", "Express", "MongoDB", "Mongoose", "Netlify"],
    live: "https://mynightflix.netlify.app/login",
    github: "https://github.com/weraseemann/myFlix-client",
    caseStudy: "/case-study/nightflix",
  },
 /*  {
  title: "my-movie-api",
  description:
    "This is the server-side component of a movies web application built with Node.js and Express. The API provides users with access to information about different movies, directors, and genres. Key Features: User registration and authentication, updating personal user information, and the ability to create and manage a list of favorite movies. The API follows REST architecture and includes secure password hashing, authentication middleware, and structured database models. The application is fully documented, tested and deployed online.",
  image: "",
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Passport.js",
    "Bcrypt",
    "CORS",
    "JSDoc",
    "REST API",
    "Postman",
    "Heroku"
  ],
  live: "#",
  github: "https://github.com/weraseemann/my-movie-api",
  caseStudy: "#",
  }, */
 /*  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with clean UI and real-time insights.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    live: "#",
    github: "#",
    caseStudy: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Modern storefront focused on speed and conversion.",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node.js", "Stripe"],
    live: "#",
    github: "#",
    caseStudy: "#",
  }, */
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1200px] px-4">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
              PROJECTS
            </p>
        <h2 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">
          Featured Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className={`grid lg:grid-cols-2 gap-10 items-center rounded-3xl p-8 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  variants={itemVariants}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <div className="w-full max-w-[500px] group relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full transition duration-500 group-hover:scale-[1.02]"
                    />

                    {/* overlay */}
                    {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                    <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <a
                        href={project.live}
                        className="bg-white px-4 py-2 rounded-full text-sm"
                      >
                        Live
                      </a>

                      <a
                        href={project.github}
                        className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm"
                      >
                        GitHub
                      </a>
                   
                    </div> */}
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  variants={itemVariants}
                  className={reversed ? "lg:order-1" : ""}
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-primary mb-2">
                    Featured Project
                  </p>

                  <h3 className="text-2xl md:text-4xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mt-6">
                     <Link
                        to={project.caseStudy}
                        target="_blank"
                        className="bg-primary text-black px-5 py-3 rounded-full hover:opacity-90"
                      >
                        Case Study
                      </Link>
 
                    <a
                      href={project.live}
                      target="_blank"
                      //className="bg-black/70 text-primary px-5 py-3 rounded-full hover:bg-black"
                      className="border  border-primary/50 bg-primary/10 px-5 py-3 rounded-full hover:bg-primary/30"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      //className="bg-primary/50 border px-5 py-3 rounded-full hover:bg-primary"
                      className="border  border-primary/50 bg-primary/10 px-5 py-3 rounded-full hover:bg-primary/30"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}