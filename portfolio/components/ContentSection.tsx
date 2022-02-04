import { FC, ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  alt?: boolean;
};

const ContentSection: FC<Props> = ({
  title,
  subtitle,
  icon,
  children,
  alt,
}) => {
  return (
    <section className={alt ? "bg-gray-100" : "bg-white"}>
      <div className="container mx-auto space-y-4 py-40 px-4">
        {icon && <div className="flex items-center justify-center">{icon}</div>}
        <h2 className="block text-center text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <h3 className="block text-center text-lg text-gray-600 md:text-xl">
            {subtitle}
          </h3>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
