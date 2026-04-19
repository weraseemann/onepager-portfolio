import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const ROUTES = [
  { id: "home", path: "/", label: "Home" },
  { id: "about", path: "/about", label: "About" },
  { id: "contact", path: "/contact", label: "Contact" },
];

function BurgerIcon({ open }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={[
          "absolute left-0 top-0 h-0.5 w-6 bg-gray-700 transition",
          open ? "translate-y-2 rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-2 h-0.5 w-6 bg-gray-700 transition",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-4 h-0.5 w-6 bg-gray-700 transition",
          open ? "-translate-y-2 -rotate-45" : "",
        ].join(" ")}
      />
    </div>
  );
}

function desktopLinkClass(active) {
  return [
    "px-3 py-2 text-2xl transition hover:text-primary hover:underline",
    active ? "text-gray-900" : "text-gray-400",
  ].join(" ");
}

function mobileLinkClass(active) {
  return [
    "block w-full px-4 py-3 text-left transition hover:text-gray-500",
    active ? "text-gray-900" : "text-gray-400",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const activeId =
    ROUTES.find((r) => r.path === location.pathname)?.id || "home";

  const onNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={[
        "sticky top-0 z-20 bg-white/80 backdrop-blur transition-shadow duration-300",
        scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : "shadow-none",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={() => onNavClick("/")}
          className="text-5xl transition hover:opacity-80"
          style={{ fontFamily: '"Mea Culpa", cursive' }}
          aria-label="Go to Home"
        >
          WeraSeemann
        </button>

        <div className="hidden md:flex gap-2">
          {ROUTES.map((r) => (
            <NavLink
              key={r.id}
              to={r.path}
              className={() => desktopLinkClass(activeId === r.id)}
            >
              {r.label}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="rounded-lg border px-3 py-2 hover:bg-gray-50"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <BurgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={[
          "md:hidden border-t bg-white",
          menuOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="px-3 py-3">
          <div className="mx-auto max-w-[1200px] rounded-2xl border p-2 shadow-sm">
            {ROUTES.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => onNavClick(r.path)}
                className={mobileLinkClass(activeId === r.id)}
              >
                {r.label}
              </button>
            ))}

            <div className="mt-2 border-t pt-2">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}