import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("font-extrabold tracking-wider scroll-m-20", {
  variants: {
    size: {
      default: "text-xl md:text-2xl lg:text-3xl",
      sm: "text-sm font-bold md:text-xl",
      big: "text-2xl md:text-3xl lg:text-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PageHeadingProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const PageHeading = ({
  className,
  size,
  as: Comp = "h1",
  ...props
}: PageHeadingProps) => {
  return (
    <Comp className={cn(headingVariants({ size, className }))} {...props} />
  );
};

const SubheadingVariants = cva(
  "tracking-wider font-bold text-muted-foreground",
  {
    variants: {
      size: {
        default: "text-lg w-2/3",
        sm: "text-xl md:text-3xl w-1/2",
        lg: "text-lg w-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface PageSubHeadingProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof SubheadingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const PageSubHeading = ({
  className,
  size,
  as: Comp = "h2",
  ...props
}: PageSubHeadingProps) => {
  return (
    <Comp className={cn(SubheadingVariants({ size, className }))} {...props} />
  );
};

const descriptionVariants = cva(
  "tracking-wide font-bold text-muted-foreground",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-md lg:text-sm",
        lg: "text-lg sm:text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface PageDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof descriptionVariants> {}

const PageDescription = ({
  className,
  size,
  ...props
}: PageDescriptionProps) => {
  return (
    <p className={cn(descriptionVariants({ size, className }))} {...props} />
  );
};

export { PageHeading, PageSubHeading, PageDescription };
