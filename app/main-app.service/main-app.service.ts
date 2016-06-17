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
import { Http} from '@angular/http'

import { Subject }    from 'rxjs/Subject';
import '../rxjs-operators'

import {LoginResponse} from '../classes/LoginObject.class/LoginObject.class'

@Injectable()
export class MainScreenService {
    private loggedInObservable: Subject<boolean> = new Subject<boolean>()
    private loginInfoObservable: Subject<LoginResponse> = new Subject<LoginResponse>()
    loggedInObservable$ = this.loggedInObservable.asObservable()
    loginInfoObservable$ = this.loginInfoObservable.asObservable();
    private loggedIn: boolean
    private loginInfo: LoginResponse

    constructor(private http: Http) {
        
        this.loggedInObservable$.subscribe(
            loggedIn => this.loggedIn = loggedIn
        )
        this.loginInfoObservable$.subscribe(
            loginInfo => this.loginInfo = loginInfo
        )
        
    }
    
    
    


    setLoginInfo(loginInfo: LoginResponse): void {
        localStorage.setItem("token_CEA", loginInfo.token)
        this.loginInfoObservable.next(loginInfo)
        this.loggedInObservable.next(true)
    }

    checkLogin(): void {
        var token = localStorage.getItem("token_CEA")
        console.info("token: " + token)
        if (token != null) {
            // TODO: PHP login_check con Service
            console.info(".|.") 
            this.loggedInObservable.next(true);
        }
    }
}
