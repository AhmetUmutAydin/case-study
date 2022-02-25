import { TestBed } from '@angular/core/testing';
import { ResultHttpResponse, User } from '@shared/models';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { Title } from '@shared/enums';

describe('Service: User', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getUsers should return expected data', (done) => {
    const mockResponse = {
      limit: 10,
      page: 1,
      total: 99,
      data: [],
    } as ResultHttpResponse<User[]>;

    userService.getUsers(10).subscribe((data) => {
      expect(data).toEqual(mockResponse);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://dummyapi.io/data/v1/user?limit=10'
    );

    testRequest.flush(mockResponse);
  });

  it('getUser should return expected data', (done) => {
    const mockResponse = {
      email: 'a@gmail.com',
      firstName: 'a',
      id: '60d0fe4f5311236168a109ca',
      lastName: 'ads',
      phone: '213',
      picture: 'aaa.abc.com',
      title: Title.Miss,
    } as User;

    userService.getUser('60d0fe4f5311236168a109ca').subscribe((data) => {
      expect(data).toEqual(mockResponse);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca'
    );

    testRequest.flush(mockResponse);
  });
});
