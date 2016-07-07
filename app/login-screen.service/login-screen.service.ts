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

import { LoginObject, LoginResponse } from '../classes/LoginObject.class/LoginObject.class'
import { Main } from '../main-app/main-app'
import {MainScreenService} from '../main-app.service/main-app.service'
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject'
import '../rxjs-operators'

@Injectable()
export class LoginScreenService {
    private loginSuccessObservable: Subject<LoginResponse> = new Subject<LoginResponse>()
    loginSuccessObservable$: Observable<LoginResponse> = this.loginSuccessObservable.asObservable()

    constructor(private http: Http) {

    }

    tryLogin(loginData: LoginObject) {
        let body = JSON.stringify(loginData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = Main.serverUrl + 'login.php'

        return this.http.post(url, body, options)
            .map(this.extractData)
            .subscribe(loginInfo => {
                if (loginInfo.success) {
                    this.loginSuccessObservable.next(loginInfo)
                }
            })
    }


    private extractData(res: Response) {
        console.warn(res.text())
        let responseJSON = res.json();
        console.info(res.text())
        return responseJSON;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
