import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


import { StaticsService } from '../../statics.service';

import { LoginInformation, LoginResponse } from '../../classes/LoginData/LoginData';

@Injectable()

export class LoginService {
  public constructor(private http: Http, private staticsService: StaticsService) {

  }

  public login(loginInfo: LoginInformation): Observable<LoginResponse> {
    console.info(JSON.stringify(loginInfo))
    return this.http.post(this.staticsService.getServerURL() + 'login.php', JSON.stringify(loginInfo))
    .map(this.staticsService.extractData)
    .catch(this.staticsService.handleError);
  }
}
