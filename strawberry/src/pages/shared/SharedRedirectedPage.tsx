import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSharedRedirectQuery } from "../../data/queries/shared/useSharedRedirectQuery";

function SharedRedirectedPage() {
  const { sharedCode } = useParams();

  const { data } = useSharedRedirectQuery({
    sharedCode: sharedCode || "",
  });

  useEffect(() => {
    if (data?.redirectUrl) {
      location.href = data.redirectUrl;
    }
  }, [data]);

  return (
    <div>
      <h1>공유된 페이지</h1>
      <p>리다이렉트 처리 중입니다...</p>
    </div>
  );
}

export default SharedRedirectedPage;
