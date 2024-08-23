import { useEffect, useRef, useState, MutableRefObject } from "react";

interface ObserverOptions extends IntersectionObserverInit {}

const useFirstViewportEntry = (
  ref: MutableRefObject<Element | null>,
  observerOptions: ObserverOptions,
): boolean => {
  const [entered, setEntered] = useState(false);

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver(
      ([entry]) => setEntered(entry.isIntersecting),
      observerOptions,
    ),
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;

    if (entered) {
      ob.disconnect();
      return;
    }

    if (element && !entered) ob.observe(element);

    return () => ob.disconnect();
  }, [entered, ref]);

  return entered;
};

export default useFirstViewportEntry;
