import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

import { StaticsService } from '../../statics.service';

import { HomeResponse } from '../../classes/HomeResponse/HomeResponse';

@Injectable()

export class HomeService {

  constructor(private http: Http, private staticsService: StaticsService) {

  }

  getPosts(): Observable<HomeResponse> {
    return this.http.get(this.staticsService.getServerURL() + 'buscar.php')
    .map(this.staticsService.extractData)
    .catch(this.staticsService.handleError);
    // .subscribe(tableResponse => {
    //   if (tableResponse.success) {
    //
    //     //this.postsTableObservable.next(tableResponse)
    //   } else {
    //     console.error('Could not fetch Posts because: ' + tableResponse.reason)
    //   }
    // })
  }
}
