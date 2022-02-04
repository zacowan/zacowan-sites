import { FC, ReactNode } from "react";

type Props = {
  label: string;
  desc: ReactNode;
  timestamp?: string;
};

const ExperienceDataCol: FC<Props> = ({ label, desc, timestamp }) => {
  return (
    <div className="max-w-lg rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
      <h3 className="block pb-4 text-center text-8xl font-extrabold tabular-nums text-indigo-500">
        {label}
      </h3>
      <p className="text-lg">{desc}</p>
      {timestamp && <h4 className="pt-6 text-xs">Last updated: {timestamp}</h4>}
    </div>
  );
};

export default ExperienceDataCol;
