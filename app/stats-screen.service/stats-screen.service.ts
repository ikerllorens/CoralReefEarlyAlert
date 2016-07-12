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

import {Main} from '../main-app/main-app'

import {StatsResponse, StatsRequest} from '../classes/StatsObject.class/StatsObject.class'

import {Http, Headers, RequestOptions, Response} from '@angular/http'
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'

@Injectable()

export class StatsScreenService {
    private statsObservable: Subject<StatsResponse> = new Subject<StatsResponse>()
    statsObservable$: Observable<StatsResponse> = this.statsObservable.asObservable()
    
    constructor(private http: Http) {
        
    }
    
    getStats(token: string) {
        let body = new StatsRequest(token)
         let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = Main.serverUrl + 'stats.php'
        
        this.http.post(url, JSON.stringify(body), options)
            .map(this.extractData)
            .subscribe(
            stats => {
                if(stats.success) {
                    this.statsObservable.next(stats)
                } else {
                    console.error("Could not fetch stats because: " + stats.reason)
                }
            })
    }
    
    private extractData(res: Response) {
        console.warn(res.text())
        let responseJSON = res.json();    
        return responseJSON;
    }

}