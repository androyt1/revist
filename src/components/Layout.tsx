import { type ReactNode } from "react";

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-dvh px-2 md:px-4">
      {children}
    </div>
  );
};

export default Layout;
