import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { GetAllUser } from '../actions';
import { UserService } from '@shared/services/user.service';
import { ResultHttpResponse, User } from '@shared/models';

export interface UserStateModel {
  users: User[];
}
@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
  },
})
@Injectable()
export class UserState {
  constructor(private userService: UserService) {}

  @Selector()
  static getUsers({ users }: UserStateModel): User[] {
    return users;
  }

  @Action(GetAllUser)
  getAllUser(
    { patchState }: StateContext<UserStateModel>,
    { payload }: GetAllUser
  ) {
    return this.userService.getUsers(payload).pipe(
      switchMap((httpResult: ResultHttpResponse<User[]>) => {
        const obs$ = httpResult.data.map((user) => {
          return this.userService.getUser(user.id);
        });
        return forkJoin(obs$);
      }),
      tap((users: User[]) => {
        patchState({
          users,
        });
      })
    );
  }
}
