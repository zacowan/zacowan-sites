import { FC } from "react";

type Props = {
  label: string;
  desc: string;
  timestamp?: string;
};

const ExperienceDataCol: FC<Props> = ({ label, desc, timestamp }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <h3 className="text-8xl pb-4 font-extrabold text-center text-indigo-500 block tabular-nums">
        {label}
      </h3>
      <p className="text-gray-600 text-lg">{desc}</p>
      {timestamp && (
        <h4 className="text-gray-600 text-xs pt-6">
          Last updated: {timestamp}
        </h4>
      )}
    </div>
  );
};

export default ExperienceDataCol;
