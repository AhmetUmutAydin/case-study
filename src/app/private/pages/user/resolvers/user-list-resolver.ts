import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { initialLimit } from '@shared/constants/constants';
import { mapTo } from 'rxjs/operators';
import { GetAllUser } from '../actions';

@Injectable()
export class UserListResolver implements Resolve<null> {
  constructor(private store: Store) {}

  resolve() {
    return this.store.dispatch(new GetAllUser(initialLimit)).pipe(mapTo(null));
  }
}
