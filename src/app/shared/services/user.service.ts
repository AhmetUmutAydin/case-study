import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { ServiceType } from '../enums/service-type';
import { ResultHttpResponse } from '@shared/models/result-http-response';
import { User } from '@shared/models';

@Injectable()
export class UserService extends RestService {
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.endpoint, ServiceType.User);
  }

  getUsers(limit: number): Observable<ResultHttpResponse<User[]>> {
    return this.get<ResultHttpResponse<User[]>>(
      '',
      this.params.append('limit', limit)
    );
  }

  getUser(id: string): Observable<User> {
    return this.get<User>(`/${id}`);
  }
}
