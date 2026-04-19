import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-6 text-sm text-primary/70">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 text-center">
        <div>© {new Date().getFullYear()} Wera Seemann. All rights reserved.</div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link
            to="/impressum"
            className="transition hover:text-primary hover:underline"
          >
            Impressum
          </Link>

          <span className="text-primary/50">&</span>

          <Link
            to="/datenschutz"
            className="transition hover:text-primary hover:underline"
          >
            Datenschutzerklärung
          </Link>
        </div>

        <div className="font-mea text-xl">
          <div className="flex items-center gap-2">
            <span>Handmade by</span>
            <AiFillHeart className="text-primary" />
            <span>Wera Seemann</span>
          </div>
        </div>
      </div>
    </footer>
  );
}