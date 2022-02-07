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
      className="inline-block w-72 shrink-0 snap-center overflow-hidden rounded-lg bg-slate-50 shadow-lg transition-all md:w-96 md:hover:scale-[1.02] md:hover:shadow-xl"
    >
      <div className="relative h-72 w-72 md:h-96 md:w-96">
        <Image src={image} alt="" layout="fill" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 block text-2xl font-medium text-slate-900">
          {title}
        </h3>

        <p className="line-clamp-2">{intro}</p>

        <div className="flex gap-2 pt-4">
          {tags.map((tag, index) => (
            <span
              className="rounded-full bg-indigo-100 py-1 px-2 text-xs"
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
