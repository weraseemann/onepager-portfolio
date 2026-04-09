import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FeaturedProjects from "../components/FeaturedProjects";
import CaseStudyPreview from "../components/CaseStudyPreview";
import NumberBlock from "../components/NumberBlock";
import BioSection from "../components/BioSection";
import CTASection from "../components/CTASection";

import { AiFillGold } from "react-icons/ai";
import { AiFillRead } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

const ROUTES = [
  { path: "/", id: "home", label: "Home" },
  { path: "/about", id: "about", label: "About" },
  { path: "/contact", id: "contact", label: "Contact" },
];

const services = [
  {
    title: "Frontend Development",
    description: "UI, SPA, responsive apps",
    icon: AiFillHome,
  },
  {
    title: "Clean Architecture",
    description: "Component-based structure, scalable and maintainable code.",
    icon: AiFillGold,
  },
  {
    title: "UX Thinking",
    description: "Usability, clarity, accessibility and performance.",
    icon: AiFillRead,
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "instant", block: "start" });
}

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const match = ROUTES.find((r) => r.path === location.pathname);
    const id = match?.id ?? "home";
    const t = setTimeout(() => scrollToId(id), 0);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    const elements = ROUTES.map((r) => document.getElementById(r.id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          const id = visible.target.id;
          setActiveId(id);

          const route = ROUTES.find((r) => r.id === id);
          if (route && route.path !== location.pathname) {
            navigate(route.path, { replace: true });
          }
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname, navigate]);

  const heroText =
  "- Frontend Developer to help you showcase yourself with clarity and confidence -";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="w-full">
        {/* HOME */}
        <section id="home" className="scroll-mt-24 pt-20">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex items-center">
                <h2
  className="shine-text mt-4 mb-20 max-w-[40rem] text-3xl md:text-5xl font-poppins text-gray-600"
  data-text={heroText}
>
  {heroText}
</h2>
                
              </div>
              <div />
            </div>
          </div>

          <div className="w-full">
            <img
              src="/hero-neutral.png"
              alt="hero"
              className="block h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-[1200px] px-4">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">
              ME
            </p>
            <h1 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">About</h1>

           {/*  <p className="mt-4 text-2xl text-gray-600">
              My name is Wera Seemann and I am a Full-Stack Web Developer. With a
              professional background in marketing and logistics I bring a unique
              blend of skills to Web Development. My experience with different
              applications at work and in my everyday life sparked a passion for
              coding, leading me to complete professional certification in
              full-stack web development. Equipped with expertise in Software
              Development I strive to create high-quality, user-friendly, and
              maintainable web solutions. I build accessible interfaces and enjoy
              turning complex problems into simple, intuitive experiences.
            </p> */}
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl max-w-3xl ">
              I am Wera Seemann, a frontend developer focused on creating clean,
              responsive, and user-friendly digital experiences.
              With a background in marketing and logistics, I bring structure,
              clarity, and strong attention to user experience in every project.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2 text-2xl font-semibold">
                      {Icon && <Icon className="text-primary shrink-0" />}
                      <span>{item.title}</span>
                    </div>

                    <div className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FeaturedProjects />
        <NumberBlock  />
        <CTASection />
        <BioSection />
        <CaseStudyPreview />
        

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-[1200px] px-4">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">
              CONTACT
            </p>
            <h2 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">Direct Message</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-2xl">Let's build something great together...</p>

            <form action="https://formspree.io/f/xvgkvnkw" method="POST" className="mt-8 max-w-md space-y-3">
              <input
                className="w-full rounded-lg border p-3 text-lg leading-8 text-gray-600 md:text-xl"
                placeholder="Email"
                type="email"
                name="email"
              />
              <textarea
                className="w-full rounded-lg border p-3 text-lg leading-8 text-gray-600 md:text-xl"
                rows={4}
                placeholder="Message"
                name="message"
              />
              <button 
              //className="bg-black/70 text-primary px-5 py-3 rounded-full hover:bg-black"
              className="bg-primary text-black px-5 py-3 rounded-full hover:opacity-90"
                        >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}