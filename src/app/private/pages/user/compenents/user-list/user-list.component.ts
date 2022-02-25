import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { User } from '@shared/models';
import { Observable } from 'rxjs';
import { GetAllUser } from '../../actions';
import { UserState } from '../../states';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Select(UserState.getUsers)
  users$: Observable<User[]>;

  limit = 10;

  constructor(private store: Store) {}

  loadMore(): void {
    this.store.dispatch(new GetAllUser(this.limit + 10)).subscribe(() => {
      this.limit = this.limit + 10;
    });
  }
}
