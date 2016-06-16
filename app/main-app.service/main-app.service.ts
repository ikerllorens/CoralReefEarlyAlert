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

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import '../rxjs-operators'

import {LoginResponse} from '../classes/LoginObject.class/LoginObject.class'

@Injectable()
export class MainScreenService {
    
    private loginInfo: Subject<LoginResponse> = new Subject<LoginResponse>()
    loginInfo$ = this.loginInfo.asObservable();
    
    constructor(private http: Http) {
       

    }   
    
    setLoginInfo(loginInfo: LoginResponse): void{
        this.loginInfo.next(loginInfo)
    }
}