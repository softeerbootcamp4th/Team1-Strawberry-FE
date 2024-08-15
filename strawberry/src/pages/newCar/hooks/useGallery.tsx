import { useState } from "react";

function useGallery() {
  const [isInterior, setIsInterior] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const fadeOutTime = 500;

  const handleInterior = () => {
    if (!isInterior) {
      setIsFading(true);
      setTimeout(() => {
        setIsInterior(true);
        setIsFading(false);
      }, fadeOutTime);
    }
  };

  const handleExterior = () => {
    if (isInterior) {
      setIsFading(true);
      setTimeout(() => {
        setIsInterior(false);
        setIsFading(false);
      }, fadeOutTime);
    }
  };

  return {
    isFading,
    isInterior,
    handleInterior,
    handleExterior,
  };
}

export default useGallery;
