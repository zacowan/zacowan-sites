import type { NextPage } from "next";
import numeral from "numeral";
import moment from "moment";
import getCommitsInfo, { Data as CommitsInfo } from "../utils/get-commits-info";
import getRepositoriesInfo, {
  Data as RepositoriesInfo,
} from "../utils/get-repositories-info";
import getPosts, { Data as PostsInfo } from "../utils/get-posts";
import { LINKEDIN_LINK } from "../utils/footer-links";
import ExperienceDataCol from "../components/ExperienceDataCol";
import ContentSection from "../components/ContentSection";
import LanguageBar from "../components/LanguageBar";
import RecentPostCard from "../components/RecentPostCard";
import HorizontalScrollButton from "../components/HorizontalScrollButton";

type Props = {
  commitsInfo: CommitsInfo;
  repositoriesInfo: RepositoriesInfo;
  recentPostsInfo: PostsInfo;
};

const Home: NextPage<Props> = ({
  commitsInfo,
  repositoriesInfo,
  recentPostsInfo,
}) => {
  return (
    <div className="divide-y">
      {/* Hero */}
      <section className="dotted-background bg-slate-50">
        <div className="container mx-auto space-y-4 py-60 px-4 text-center">
          <a
            href={LINKEDIN_LINK}
            className="p-4 text-sm font-bold transition-colors hover:text-slate-900"
          >
            @zacowan
          </a>
          <h2 className="block py-6 text-5xl font-semibold text-slate-900 md:text-8xl">
            Hi, I&apos;m{" "}
            <span className="rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 box-decoration-clone px-6 text-slate-50 shadow-lg shadow-indigo-500/50">
              Zach
            </span>
          </h2>
          <h3 className="block text-lg text-slate-900 md:text-2xl">
            Software Engineering. Data Science. Design.
          </h3>
        </div>
      </section>
      {/* Experience */}
      <ContentSection
        title="Experience, backed by facts"
        subtitle="Using real GitHub data to analyze skills and contributions."
        icon={
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
        }
        alt
      >
        <div className="grid grid-cols-1 justify-items-center gap-4 py-20 md:grid-cols-2">
          <ExperienceDataCol
            label={numeral(commitsInfo.totalCount!).format("0,0")}
            desc={
              <span>
                total commits written over{" "}
                <span className="underline decoration-fuchsia-500 decoration-2">
                  {numeral(commitsInfo.timeWeeks!).format("0,0")} weeks
                </span>{" "}
                of coding on personal GitHub repositories. An average of{" "}
                <span className="underline decoration-fuchsia-500 decoration-2">
                  {numeral(commitsInfo.averageOverWeeks!).format("0.0")} commits
                </span>{" "}
                done per week over the past{" "}
                <span className="underline decoration-fuchsia-500 decoration-2">
                  {numeral(commitsInfo.timeYears!).format("0,0")} years
                </span>{" "}
                .
              </span>
            }
            timestamp={moment(commitsInfo.timestamp!).fromNow()}
          />
          <ExperienceDataCol
            label={numeral(repositoriesInfo.codeBytes!).format("0,0.00a")}
            desc={
              <span>
                bytes of code written across{" "}
                <span className="underline decoration-fuchsia-500 decoration-2">
                  {numeral(repositoriesInfo.totalCount!).format("0,0")}{" "}
                  repositories
                </span>{" "}
                in{" "}
                <span className="underline decoration-fuchsia-500 decoration-2">
                  {numeral(repositoriesInfo.numLanguages!).format("0,0")} unique
                  languages
                </span>
                . An average repository size of{" "}
                <span className="underline decoration-fuchsia-500 decoration-2">
                  {numeral(repositoriesInfo.avgerageBytesPerRepo!).format(
                    "0,0"
                  )}{" "}
                  bytes
                </span>
                .
              </span>
            }
            timestamp={moment(repositoriesInfo.timestamp!).fromNow()}
          />
        </div>
        <hr className="py-6" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="text-2xl font-medium text-slate-900">
            Primary Language Breakdown
          </h4>
          <h5 className="pb-8 text-sm">
            Last updated: {moment(repositoriesInfo.timestamp!).fromNow()}
          </h5>
          {repositoriesInfo.primaryLanguages!.map((pl, index) => (
            <LanguageBar
              key={pl.name + index}
              name={pl.name}
              amount={numeral(pl.bytesWritten).format("0b")}
              width={
                numeral(
                  (pl.bytesWritten /
                    repositoriesInfo.maxBytesPrimaryLanguage!) *
                    100
                ).format("0") + "%"
              }
            />
          ))}
        </div>
      </ContentSection>
      {/* Posts */}
      <ContentSection
        childrenOutside
        title="Purpose-built projects"
        subtitle="A collection of posts highlighting the most impactful projects
            I've worked on."
        icon={
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
        }
      >
        <div
          id="posts"
          className="group relative -mt-20 flex w-full justify-center"
        >
          <HorizontalScrollButton scrollID="recent-posts" dir="left" />
          <div
            id="recent-posts"
            className="snap-x space-x-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth whitespace-nowrap py-20"
          >
            <span className="pl-4" />
            {recentPostsInfo.posts?.map((post) => (
              <RecentPostCard
                key={post._uid}
                fullSlug={post.full_slug}
                image={post.image}
                intro={post.intro}
                title={post.title}
                tags={post.tags}
              />
            ))}
            <span className="pr-4" />
          </div>

          <HorizontalScrollButton scrollID="recent-posts" dir="right" />
        </div>
      </ContentSection>
      {/* Contact */}
      <ContentSection
        title="Interested in a passionate engineer?"
        icon={
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
        }
        alt
      >
        <div className="py-8 text-center">
          <a
            href={LINKEDIN_LINK}
            className="rounded-lg bg-indigo-500 py-4 px-10 text-lg text-slate-50 shadow-lg shadow-indigo-500/50 transition-colors hover:bg-indigo-400 md:text-xl"
          >
            Connect with me
          </a>
        </div>
      </ContentSection>
    </div>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const commitsInfo = await getCommitsInfo();
  const repositoriesInfo = await getRepositoriesInfo();
  const postsInfo = await getPosts();

  return {
    props: {
      commitsInfo: commitsInfo,
      repositoriesInfo: repositoriesInfo,
      recentPostsInfo: postsInfo,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 24 hours
    revalidate: 60 * 60 * 24, // In seconds
  };
}

export default Home;
