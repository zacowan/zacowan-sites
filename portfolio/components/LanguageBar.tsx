import { FC } from "react";

type Props = {
  name: string;
  amount: string;
  width: string;
};

const ContentSection: FC<Props> = ({ name, amount: bytes, width: ratio }) => {
  return (
    <div className="w-full items-center space-y-2 rounded-lg bg-slate-50 p-4 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl">
      <h5 className="ml-2 block text-lg">{name}</h5>
      <div
        className="min-w-fit rounded bg-gradient-to-r from-indigo-500 to-fuchsia-500 box-decoration-clone py-2 px-2 text-right text-sm font-semibold text-slate-50 shadow shadow-indigo-500/50 md:text-lg"
        style={{ width: ratio }}
      >
        {bytes}
      </div>
    </div>
  );
};

export default ContentSection;
