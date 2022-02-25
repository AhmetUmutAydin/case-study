import { Login } from '..';

describe('Auth Action Test', () => {
  it('Login action', () => {
    const user = {
      email: 'mikro@mikro.com.tr',
      password: '123456',
    };

    const action = new Login(user.email, user.password);

    expect(Login.type).toBe('[Auth] Login');
    expect(action.email).toBe(user.email);
    expect(action.password).toBe(user.password);
  });
});
