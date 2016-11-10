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
import {Http, Response, Headers, RequestOptions} from '@angular/http'

import {Main} from '../main-app/main-app'

import {SearchPostResponse} from '../classes/InfoObject.class/InfoObject.class'

import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'
import '../rxjs-operators'

@Injectable()

export class HomeScreenService {
    
    private postsTableObservable: Subject<SearchPostResponse> = new Subject<SearchPostResponse>()
    postsTableObservable$: Observable<SearchPostResponse> = this.postsTableObservable.asObservable()

    constructor(private http: Http) {
        
    }
    
    getPosts() {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        this.http.get(Main.serverUrl + 'buscar.php', options)
            .map(this.extractData)
            .subscribe(tableResponse => {
                if (tableResponse.success) {
                    this.postsTableObservable.next(tableResponse)
                } else {
                    console.error('Could not fetch Posts because: ' + tableResponse.reason)
                }
            })
    }   
    
    private extractData(res: Response) {
        console.info('Response: ' + res.text())
        let responseJSON = res.json();
        return responseJSON;
    }
}