import { FC } from "react";

type Props = {
  dir: "left" | "right";
  scrollID: string;
};

const LEFT_CHEVRON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const RIGHT_CHEVRON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const SCROLL_AMOUNT = 288;

const HorizontalScrollButton: FC<Props> = ({ dir, scrollID }) => {
  if (dir == "left") {
    return (
      <button
        onClick={() => {
          document.getElementById(scrollID)!.scrollLeft -= SCROLL_AMOUNT;
        }}
        className="absolute top-1/2 left-4 z-10 -mt-10 hidden scale-75 rounded-full bg-slate-900 p-4 text-slate-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-50 group-hover:hover:opacity-70 md:block"
      >
        {LEFT_CHEVRON}
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          document.getElementById(scrollID)!.scrollLeft += SCROLL_AMOUNT;
        }}
        className="absolute top-1/2 right-4 z-10 -mt-10 hidden scale-75 rounded-full bg-slate-900 p-4 text-slate-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-50 group-hover:hover:opacity-70 md:block"
      >
        {RIGHT_CHEVRON}
      </button>
    );
  }
};

export default HorizontalScrollButton;
