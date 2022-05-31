import { FC } from "react";

type Props = {
  title: string;
  text: string;
};

const AboutTextSection: FC<Props> = ({ title, text }) => {
  return (
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default AboutTextSection;
