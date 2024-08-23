import { useState, useEffect } from "react";

function useNewCarCarousel(length: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translationStep, setTranslationStep] = useState(0);

  const calculateTranslationStep = () => {
    const browserWidth = window.innerWidth;
    const shownWidth = browserWidth - (browserWidth - 1440) / 2 - 535;
    const fullImgWidth = 665 * length + 48 * (length - 1);
    return (fullImgWidth - shownWidth) / (length - 1);
  };

  useEffect(() => {
    setTranslationStep(calculateTranslationStep());
  }, [length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? length - 1 : prevIndex + 1,
    );
  };

  return {
    currentIndex,
    translationStep,
    handlePrev,
    handleNext,
    setCurrentIndex,
  };
}

export default useNewCarCarousel;
