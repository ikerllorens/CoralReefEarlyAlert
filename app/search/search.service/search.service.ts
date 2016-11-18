import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { StaticsService } from '../../statics.service';

import { SearchPostResponse } from '../../classes/SearchData/SearchData';

@Injectable()

export class SearchService {
  public constructor(private http: Http, private staticsService: StaticsService) {

  }

  public getPosts(): Observable<SearchPostResponse> {
    return this.http.get(this.staticsService.getServerURL() + 'buscar.php')
    .map(this.staticsService.extractData)
    .catch(this.staticsService.handleError);
  }
}
