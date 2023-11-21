export class AuthTokenError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'AuthTokenError';
  }
}
