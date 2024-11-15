import { cn } from "@/lib/utils";

interface HeadingProps {
  className?: string;
  content: string;
}

const ComponentHeading = ({ className, content }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-3xl",
        className
      )}
    >
      {content}
    </h1>
  );
};

const ComponentSubHeading = ({ content, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-lg leading-7 tracking-wider font-bold text-muted-foreground",
        className
      )}
    >
      {content}
    </h1>
  );
};

const PageHeading = ({ content, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
    >
      {content}
    </h1>
  );
};

export { ComponentHeading, ComponentSubHeading, PageHeading };
