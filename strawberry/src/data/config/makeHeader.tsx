function makeHeader(): HeadersInit {
  const baseHeader: HeadersInit = { "Content-Type": "application/json" };

  const token = localStorage.getItem("accessToken");

  if (token) {
    return {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    };
  } else {
    return baseHeader;
  }
}

export default makeHeader;
