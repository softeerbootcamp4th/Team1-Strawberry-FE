interface User {
  email: string;
  name: string;
  birthdate: string;
}

interface Token {
  accessToken: string;
}

export interface Oauth {
  user: User;
  token: Token;
}
