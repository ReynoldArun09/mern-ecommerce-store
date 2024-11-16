import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const wrapperflexVariants = cva("flex justify-center text-center", {
  variants: {
    directions: {
      default: "flex-col",
      vertical: "flex-row",
    },
    padding: {
      small: "py-3",
      medium: "py-5",
      large: "py-10",
    },
  },
  defaultVariants: {
    directions: "default",
    padding: "small",
  },
});

interface WrapperFlexProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof wrapperflexVariants> {
  children: React.ReactNode;
  as?: "section" | "div";
}

const ComponentFlexWrapper = ({
  className,
  children,
  as: Comp = "section",
  directions,
  padding,
  ...props
}: WrapperFlexProps) => {
  return (
    <Comp
      className={cn(wrapperflexVariants({ directions, padding, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
};

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ComponentWrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={cn("py-3 md:py-5 lg:py-10", className)}>
      {children}
    </section>
  );
};

const GridWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="grid py-3 lg:py-5 gap-y-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
      {children}
    </div>
  );
};

export { ComponentFlexWrapper, ComponentWrapper, GridWrapper };
