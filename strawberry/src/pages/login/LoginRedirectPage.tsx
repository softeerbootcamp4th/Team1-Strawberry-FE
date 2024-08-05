import { useHandleLoginRedirect } from "./hooks/useHandleLoginRedirect";

function LoginRedirectedPage() {
  useHandleLoginRedirect();

  return (
    <div>
      <h1>리다이렉트된 페이지</h1>
      <p>소셜 로그인 처리 중입니다...</p>
    </div>
  );
}

export default LoginRedirectedPage;
