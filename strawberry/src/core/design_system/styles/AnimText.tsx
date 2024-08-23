import React, { useState, useEffect } from "react";

interface AnimTextProps {
  content: string;
  delay: number;
  tag: React.ElementType;
  startDelay?: number; // Optional start delay
}

const AnimText: React.FC<AnimTextProps> = ({
  content,
  delay,
  tag: Tag,
  startDelay = 0,
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let animID: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      animID = setInterval(typeLetter, delay);
    }, startDelay);

    const typeLetter = () => {
      setDisplayed((prev) => {
        const nextText = content.slice(0, prev.length + 1);
        if (nextText.length === content.length) clearInterval(animID);
        return nextText;
      });
    };

    return () => {
      clearTimeout(startTimeout);
      clearInterval(animID);
    };
  }, [content, delay, startDelay]);

  return <Tag>{displayed}</Tag>;
};

export default AnimText;
