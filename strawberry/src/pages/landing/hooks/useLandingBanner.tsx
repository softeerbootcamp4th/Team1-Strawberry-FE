import { useRef, useState, useEffect } from "react";

function useLandingBanner() {
  const heightRef = useRef<HTMLDivElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    const handleImageLoad = () => {
      if (heightRef.current) {
        setScrollHeight(heightRef.current.offsetHeight);
      }
    };

    const imgElement = heightRef.current?.querySelector("img");
    if (imgElement) {
      imgElement.addEventListener("load", handleImageLoad);

      return () => {
        imgElement.removeEventListener("load", handleImageLoad);
      };
    }
  }, [heightRef]);

  return { heightRef, scrollHeight };
}

export default useLandingBanner;
