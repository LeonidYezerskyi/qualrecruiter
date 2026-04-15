import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-site px-6 sm:px-8 lg:px-10 xl:px-12">
      {children}
    </div>
  );
}
