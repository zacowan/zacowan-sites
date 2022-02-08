import { FC, Fragment } from "react";
import FOOTER_LINKS from "../utils/footer-links";

const Layout: FC = ({ children }) => {
  return (
    <div className="divide-y bg-slate-50 text-slate-600">
      <main>{children}</main>
      {/* Footer */}
      <footer className="bg-slate-50">
        <div className="container mx-auto py-10 px-4 md:py-20">
          {/* Links */}
          <ul className="flex items-center justify-center space-x-4">
            {FOOTER_LINKS.map((l, index) => (
              <li key={l.label + index}>
                <a
                  className="text-sm transition-colors hover:text-slate-900"
                  href={l.href}
                >
                  {l.label}
                </a>
                {index < FOOTER_LINKS.length - 1 && (
                  <span className="pl-4">&bull;</span>
                )}
              </li>
            ))}
          </ul>
          {/* Callouts */}
          <h4 className="pt-6 text-center text-xs">
            Made with{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-6 w-6 animate-bounce text-rose-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            using{" "}
            <a
              className="font-semibold transition-colors hover:text-slate-900"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="font-semibold transition-colors hover:text-slate-900"
              href="https://tailwindcss.com/"
            >
              tailwindcss
            </a>
            .
            <br />
            Deployed to the edge using{" "}
            <a
              className="font-semibold transition-colors hover:text-slate-900"
              href="https://vercel.com/"
            >
              Vercel
            </a>
            .
          </h4>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
