import { type ReactNode } from "react";

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-dvh p-4">{children}</div>
  );
};

export default Layout;
