import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

import FeaturedProjects from "../components/FeaturedProjects";
import CaseStudyPreview from "../components/CaseStudyPreview";
import NumberBlock from "../components/NumberBlock";
import BioSection from "../components/BioSection";
import CTASection from "../components/CTASection";

const ROUTES = [
  { path: "/", id: "home", label: "Home" },
  { path: "/about", id: "about", label: "About" },
  { path: "/contact", id: "contact", label: "Contact" },
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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <NumberBlock />
        <CTASection />
        <BioSection />
        <CaseStudyPreview />
        <ContactSection />
      </main>
    </div>
  );
}