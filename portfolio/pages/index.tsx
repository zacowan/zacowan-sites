import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
      {/* Content */}
      <div>
        {/* Hero */}
        <section className="bg-white">
          <div className="py-60 container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
            <a
              href="https://www.linkedin.com/in/zacowan/"
              className="p-4 font-bold text-sm hover:text-sky-500 transition-colors"
            >
              @zacowan
            </a>
            <h2 className="md:text-8xl text-6xl font-semibold block">
              Hi, I'm{" "}
              <span className="underline decoration-sky-500 hover:text-sky-500 transition-colors">
                Zach
              </span>
            </h2>
            <h3 className="md:text-2xl text-xl block">
              Software Engineering. Data Science. Design.
            </h3>
          </div>
        </section>
        {/* About */}
        <section className="bg-gray-100">
          <div id="about" className="py-60 container mx-auto space-y-4">
            <h2 className="md:text-4xl text-3xl font-semibold block text-center">
              Experience, backed by facts
            </h2>
            <h3 className="md:text-xl text-lg block text-center">
              Using real GitHub data to analyze skill and ability.
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-20 px-4">
              <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-6xl py-2 font-bold text-center text-sky-500 block tabular-nums">
                  400,000
                </h3>
                <p>Lines of code written across 40 repositories.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-6xl py-2 font-bold text-center text-sky-500 block tabular-nums">
                  400,000
                </h3>
                <p>Lines of code written across 40 repositories.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-6xl py-2 font-bold text-center text-sky-500 block tabular-nums">
                  400,000
                </h3>
                <p>Lines of code written across 40 repositories.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
