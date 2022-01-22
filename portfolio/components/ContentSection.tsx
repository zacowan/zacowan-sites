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
      <div className="py-40 container mx-auto space-y-4">
        {icon && <div className="flex items-center justify-center">{icon}</div>}
        <h2 className="md:text-4xl text-3xl font-semibold block text-center">
          {title}
        </h2>
        {subtitle && (
          <h3 className="md:text-xl text-lg block text-center">{subtitle}</h3>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
