import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs/internal/observable/of';
import { UserService } from '@shared/services/user.service';
import { GetAllUser } from '../../actions';

describe('State: User', () => {
  let httpTestingController: HttpTestingController;
  let store: Store;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([])],
      providers: [UserService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    store = TestBed.get(Store);
    userService = TestBed.get(UserService);
    spyOn(store, 'select').and.returnValue(of(null));
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('user state called and getUser service called from action', () => {
    const request = 10;
    spyOn(userService, 'getUsers').and.returnValue(of(null));
    spyOn(userService, 'getUser').and.returnValue(of(null));
    store.dispatch(new GetAllUser(request)).toPromise();
  });
});
