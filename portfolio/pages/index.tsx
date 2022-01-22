import type { NextPage } from "next";

const LINKEDIN_LINK = "https://www.linkedin.com/in/zacowan/";
const GITHUB_LINK = "https://github.com/zacowan";

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
      {/* Content */}
      <div>
        {/* Hero */}
        <section className="bg-white border-b border-gray-300">
          <div className="py-60 container mx-auto space-y-4 text-center">
            <a
              href={LINKEDIN_LINK}
              className="p-4 font-bold text-sm hover:text-indigo-500 transition-colors"
            >
              @zacowan
            </a>
            <h2 className="md:text-8xl text-6xl font-semibold block">
              Hi, I'm{" "}
              <span className="underline decoration-indigo-500 hover:text-indigo-500 transition-colors">
                Zach
              </span>
            </h2>
            <h3 className="md:text-2xl text-xl block">
              Software Engineering. Data Science. Design.
            </h3>
          </div>
        </section>
        {/* About */}
        <section className="bg-gray-100 border-b border-gray-300">
          <div className="py-60 container mx-auto space-y-4">
            {/* Icons */}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>

            <h2 className="md:text-4xl text-3xl font-semibold block text-center">
              Experience, backed by facts
            </h2>
            <h3 className="md:text-xl text-lg block text-center">
              Using real GitHub data to analyze skills and contributions.
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-20 px-4">
              <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-6xl py-2 font-bold text-center text-indigo-500 block tabular-nums">
                  400,000
                </h3>
                <p>Lines of code written across 40 repositories.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-6xl py-2 font-bold text-center text-indigo-500 block tabular-nums">
                  400,000
                </h3>
                <p>Lines of code written across 40 repositories.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-6xl py-2 font-bold text-center text-indigo-500 block tabular-nums">
                  400,000
                </h3>
                <p>Lines of code written across 40 repositories.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Posts */}
        <section className="bg-white border-b border-gray-300">
          <div className="py-60 container mx-auto space-y-4">
            {/* Icons */}
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h2 className="md:text-4xl text-3xl font-semibold block text-center">
              Purpose-built projects
            </h2>
            <h3 className="md:text-xl text-lg block text-center">
              A collection of blog posts highlighting the most impactful
              projects I've worked on.
            </h3>
          </div>
        </section>
        {/* Contact */}
        <section className="bg-gray-100 border-b border-gray-300">
          <div className="py-60 container mx-auto space-y-4 text-center">
            {/* Icons */}
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="md:text-4xl text-3xl font-semibold block">
              Interested in a passionate engineer?
            </h2>
            <div className="py-8">
              <a
                href={LINKEDIN_LINK}
                className="md:text-xl text-lg py-4 px-10 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400 transition-colors shadow-lg"
              >
                Connect with me
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-indigo-100 border-b border-gray-300">
        <div className="md:py-20 py-10 px-10 container mx-auto">
          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-medium text-base">Links</h4>
            <ul className="space-y-1">
              <li>
                <a
                  className="hover:text-black text-sm text-gray-600 transition-colors"
                  href={GITHUB_LINK}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black text-sm text-gray-600 transition-colors"
                  href={LINKEDIN_LINK}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <h4 className="pt-6 text-xs text-gray-600">
            Made with{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline text-red-500 animate-bounce"
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
            with{" "}
            <a
              className="font-semibold hover:text-black transition-colors"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="font-semibold hover:text-black transition-colors"
              href="https://tailwindcss.com/"
            >
              tailwindcss
            </a>{" "}
            by Zachary Cowan.
          </h4>
        </div>
        {/* Made With */}
      </footer>
    </div>
  );
};

export default Home;
