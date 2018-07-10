interface AuthResponse {
  auth_token: string;
}

interface Credentials {
  email: string;
  password: string;
}

export { AuthResponse, Credentials };
