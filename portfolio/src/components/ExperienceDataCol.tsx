import { FC, ReactNode } from "react";

type Props = {
  label: string;
  desc: ReactNode;
  timestamp?: string;
};

const ExperienceDataCol: FC<Props> = ({ label, desc, timestamp }) => {
  return (
    <div className="max-w-lg rounded-lg bg-slate-50 p-8 shadow-lg">
      <h3 className="block pb-4 text-center text-6xl font-extrabold text-indigo-500 md:text-8xl">
        {label}
      </h3>
      <p className="text-sm md:text-base">{desc}</p>
      {timestamp && <h4 className="pt-6 text-xs">Last updated: {timestamp}</h4>}
    </div>
  );
};

export default ExperienceDataCol;
