import { GetAllUser } from '..';

describe('User Action Test', () => {
  it('GetAllUser action', () => {
    const payload = 10;
    const action = new GetAllUser(payload);

    expect(GetAllUser.type).toBe('[User] GetAll');
    expect(action.payload).toBe(payload);
  });
});
