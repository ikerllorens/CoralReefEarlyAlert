/* 
 * Copyright (C) 2016 ikerllorens
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'
import '../rxjs-operators'

import {LoginResponse} from '../classes/LoginObject.class/LoginObject.class'
import { Main } from '../main-app/main-app'

@Injectable()
export class MainScreenService {
    private loggedInObservable: Subject<boolean> = new Subject<boolean>()
    private loginInfoObservable: Subject<LoginResponse> = new Subject<LoginResponse>()
    public loggedInObservable$ = this.loggedInObservable.asObservable()
    public loginInfoObservable$ = this.loginInfoObservable.asObservable();
    public checkLoginObservable$: Observable<LoginResponse> = new Observable<LoginResponse>()
    public valid_tokenObservable$: Observable<LoginResponse> = new Observable<LoginResponse>()

    private loggedIn: boolean = false
    private loginInfo: LoginResponse = new LoginResponse()

    constructor(private http: Http) {
        this.loggedInObservable$.subscribe(
            loggedIn => this.loggedIn = loggedIn
        )
        this.loginInfoObservable$.subscribe(
            loginInfo => {
                this.loginInfo = loginInfo
                localStorage.setItem("token_CEA", loginInfo.token)
            })
    }

    setLoginInfo(loginInfo: LoginResponse): void {
        console.info("on main-app: " + loginInfo.token)
        this.loginInfoObservable.next(loginInfo)
        this.loggedInObservable.next(true)
    }

    checkLogin(): void {
        var token = localStorage.getItem("token_CEA")


        //console.info("token: " + token)
        if (token != null) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            
            let body = { "token": token}
            //console.log('Request: ' + JSON.stringify(body))
            this.http.post(Main.serverUrl + 'checklog.php', JSON.stringify(body), options)
                .map(this.extractData)
                .subscribe(

                loginInfo => {
                    this.loginInfo.token = token
                    this.fetchUserInfo(loginInfo.success)                   
                })
        }
    }

    private fetchUserInfo(valid_token: boolean): void {
        if (valid_token) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            let body = { "token": this.loginInfo.token }
            this.http.post(Main.serverUrl + 'tokenInfo.php', JSON.stringify(body), options)
                .map(this.extractData)
                .subscribe(
                    loginInfo => {
                        loginInfo.token = this.loginInfo.token
                        this.loginInfoObservable.next(loginInfo)
                    })
            this.loggedInObservable.next(true)
        } else {
            this.loggedInObservable.next(false)
        }
    }

    private extractData(res: Response) {
        let responseJSON = res.json();
        return responseJSON;
    }

    public getLoginInfo(): LoginResponse {
        return this.loginInfo
    }
}
