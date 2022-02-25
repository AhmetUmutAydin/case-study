import { TestBed } from '@angular/core/testing';
import { ResultHttpResponse, User } from '@shared/models';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Title } from '@shared/enums';
import { AuthState } from '..';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs/internal/observable/of';
import { Login } from '@shared/actions';

describe('State: Auth', () => {
  let httpTestingController: HttpTestingController;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([])],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    store = TestBed.get(Store);
    spyOn(store, 'select').and.returnValue(of(null));
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('login state called', () => {
    const request = {
      email: 'mikro@mikro.com.tr',
      password: '123456',
    };

    store.dispatch(new Login(request.email, request.password)).toPromise();
  });
});
