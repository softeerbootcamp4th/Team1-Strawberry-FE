import React, { Suspense, useRef, ReactNode } from "react";
import useFirstViewportEntry from "./useFirstViewportEntry";

interface RenderOnViewportEntryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

const RenderOnViewportEntry: React.FC<RenderOnViewportEntryProps> = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  ...wrapperDivProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });

  return (
    <div {...wrapperDivProps} ref={ref}>
      {entered && <Suspense fallback={<Loader />}>{children}</Suspense>}
    </div>
  );
};

export default RenderOnViewportEntry;

const Loader: React.FC = () => {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};
