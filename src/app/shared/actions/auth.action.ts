export class Login {
  static readonly type = '[Auth] Login';

  constructor(public email: string, public password: string) {}
}
