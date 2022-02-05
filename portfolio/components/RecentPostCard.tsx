import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  intro: string;
  tags: Array<string>;
};

const RecentPostCard: FC<Props> = ({ title, image, intro, tags }) => {
  return (
    <a
      href="#"
      className="w-80 overflow-hidden rounded-lg bg-slate-50 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="relative h-80 w-80">
        <Image src={image} alt="" layout="fill" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 block text-2xl font-medium text-slate-900">
          {title}
        </h3>
        <p className="line-clamp-2">{intro}</p>
        <div className="space-x-1 pt-4">
          {tags.map((tag, index) => (
            <span
              className="rounded-full bg-indigo-500 p-2 text-xs text-slate-50"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default RecentPostCard;
