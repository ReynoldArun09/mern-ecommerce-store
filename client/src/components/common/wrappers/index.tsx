interface WrapperProps {
  children: React.ReactNode;
}

const ComponentWrapper = ({ children }: WrapperProps) => {
  return <section>{children}</section>;
};

const GridWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="grid py-3 lg:py-5 gap-y-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
      {children}
    </div>
  );
};

export { ComponentWrapper, GridWrapper };
