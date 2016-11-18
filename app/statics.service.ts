import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CheckLoginResponse } from './classes/LoginData/LoginData'

@Injectable()

export class StaticsService {
  private serverURL: string =  "http://triumphare.com/php/";
  private userToken: string = '';
  private userName: string = '';
  private userType: number = 0;
  private loggedIn: boolean;
  private _loggedIn: Subject<boolean> = new Subject<boolean>();
  public loggedInObservable: Observable<boolean> =  this._loggedIn.asObservable();

//   this.data = new Observable(observer => this.dataObserver = observer);

  public constructor(private http: Http) {

  }

  public extractData(res: Response) {
    let body = res.json();
    console.info(body)
    return body || { };
  }

  public handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public getServerURL() {
    return this.serverURL;
  }

  public setUserInfo(token: string, userName: string, userType: number) {
    this.userToken = token;
    this.userName = userName;
    this.userType = userType
    localStorage.setItem('token_CEA', this.userToken)
  }

  public setUserName(userName: string) {
    this.userName = userName;
  }

  public setUserType(userType: number) {
    this.userType = userType;
  }

  public checkValidLogin(): Observable<CheckLoginResponse> {
    if(this.userToken == "" || this.userToken == null) {
      this.userToken = localStorage.getItem('token_CEA');
    }
    var request = this.http.post(this.getServerURL() + 'tokenInfo.php', JSON.stringify({'token': this.userToken}))
    .map(this.extractData)
    .catch(this.handleError);
    request.subscribe((response: CheckLoginResponse) => {
      if(response.success) {
        this.setUserName(response.name);
        this.setUserType(response.userType)
        this.logIn();
      } else {
        this.logOut();
      }
    });

    return request;
  }

  public logIn() {
    this.loggedIn = true;
    this._loggedIn.next(true);
  }

  public logOut() {
    this.loggedIn = false;
    this._loggedIn.next(false);
  }

  public getSessionStatus(): boolean {
    return this.loggedIn;
  }

  public getUsersName(): string {
    return this.userName;
  }
}
