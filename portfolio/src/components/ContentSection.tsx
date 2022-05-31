import { FC, ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  alt?: boolean;
  childrenOutside?: boolean;
};

const ContentSection: FC<Props> = ({
  title,
  subtitle,
  icon,
  children,
  alt,
  childrenOutside,
}) => {
  return (
    <section className={alt ? "bg-slate-100" : "bg-slate-50"}>
      <div className="container mx-auto space-y-4 py-20 px-4">
        {icon && (
          <div className="flex items-center justify-center text-slate-900">
            {icon}
          </div>
        )}
        <h2 className="block text-center text-3xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <h3 className="block text-center text-lg text-gray-600 md:text-xl">
            {subtitle}
          </h3>
        )}
        {!childrenOutside && children}
      </div>
      {childrenOutside && children}
    </section>
  );
};

export default ContentSection;
