import { useRef, useState, useEffect } from "react";

function useLandingBanner() {
  const heightRef = useRef<HTMLDivElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    if (heightRef.current) {
      setScrollHeight(heightRef.current.offsetHeight);
    }
  }, [heightRef]);

  return { heightRef, scrollHeight };
}

export default useLandingBanner;
