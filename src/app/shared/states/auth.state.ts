import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '@shared/constants/constants';
import { Login } from '../actions';

export interface AuthStateModel {
  authorized: boolean;
}
@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    authorized: false,
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static getAuthorized({ authorized }: AuthStateModel): boolean {
    return authorized;
  }

  @Action(Login)
  login(
    { patchState }: StateContext<AuthStateModel>,
    { email, password }: Login
  ) {
    return patchState({
      authorized: email === User.email && password === User.password,
    });
  }
}
