import { useState, useEffect } from "react";

export interface useLengthValidationPropsType {
  initialContent: string;
  maxLength: number;
}

function useLengthValidation({
  initialContent,
  maxLength,
}: useLengthValidationPropsType) {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    if (content.length > maxLength) {
      alert(`내용이 ${maxLength}자를 초과했습니다.`);
      setContent(content.slice(0, maxLength));
    }
  }, [content, maxLength]);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  return { content, handleChange };
}

export default useLengthValidation;
