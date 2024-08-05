const Server_IP = import.meta.env.VITE_APP_Server_IP;

export function useLogin() {
  function locateLoginPage({ social }: { social: string }) {
    window.location.href = `${Server_IP}/api/v1/oauth2/${social}`;
  }

  return locateLoginPage;
}
