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
 
 import {UserAddObject, UserAddResponse} from '../classes/UserAddObject.class/UserAddObject.class'
 import {Main} from '../main-app/main-app'

import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'
import '../rxjs-operators'

@Injectable ()
export class UserAddService {
    
    private userAddObservable: Subject<UserAddResponse> = new Subject<UserAddResponse>()
    public userAddObservable$ = this.userAddObservable.asObservable()
    
    constructor(private http: Http) {
        
    }
    
    public addUser(username: string, password: string, name: string, surname: string, userType: number) {
        let newUser = new UserAddObject(username, password, name, surname, userType)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = Main.serverUrl + 'insertUsuario.php'
        
        this.http.post(url, JSON.stringify(newUser), options)
            .map(this.extractData)
            .subscribe(
                userAddResponse => {
                    this.userAddObservable.next(userAddResponse)
                }
            )
        
    }
    
    private extractData(res: Response) {
        let responseJSON = res.json();    
        return responseJSON;
    }
}
