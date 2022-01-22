import { FC } from "react";

type Props = {
  label: string;
  desc: string;
};

const ExperienceDataCol: FC<Props> = ({ label, desc }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <h3 className="text-6xl py-2 font-bold text-center text-indigo-500 block tabular-nums">
        {label}
      </h3>
      <p>{desc}</p>
    </div>
  );
};

export default ExperienceDataCol;
