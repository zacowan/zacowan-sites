import { FC } from "react";

type Props = {
  name: string;
  amount: string;
  width: string;
};

const ContentSection: FC<Props> = ({ name, amount: bytes, width: ratio }) => {
  return (
    <div className="w-full items-center p-4 bg-white rounded-lg shadow-lg transition-shadow hover:shadow-xl space-y-2">
      <h5 className="text-lg block ml-2 text-gray-600">{name}</h5>
      <div
        className="py-2 px-2 rounded text-white box-decoration-clone bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow shadow-indigo-500/50 text-right text-sm font-semibold min-w-fit md:text-lg"
        style={{ width: ratio }}
      >
        {bytes}
      </div>
    </div>
  );
};

export default ContentSection;
