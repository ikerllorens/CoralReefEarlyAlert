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
//import {MainScreenService} from '../main-app.service/main-app.service'
import {BleachingResponse, DiseasesResponse, CoralTypeResponse, CoralSpeciesRequest, CoralSpeciesResponse, SectorsResponse, SubsectorsRequest, SubsectorsResponse} from '../classes/PostObject.class/PostObject.class'
import {SearchPostResponse, SearchPostRequest} from '../classes/InfoObject.class/InfoObject.class'

import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'
import '../rxjs-operators'

@Injectable()
export class SearchPostsService {

    private coralTypesObservable: Subject<CoralTypeResponse> = new Subject<CoralTypeResponse>()
    coralTypesObservable$: Observable<CoralTypeResponse> = this.coralTypesObservable.asObservable()
    private coralSpeciesObservable: Subject<CoralSpeciesResponse> = new Subject<CoralSpeciesResponse>()
    coralSpeciesObservable$: Observable<CoralSpeciesResponse> = this.coralSpeciesObservable.asObservable()

    private sectorsObservable: Subject<SectorsResponse> = new Subject<SectorsResponse>()
    sectorsObservable$: Observable<SectorsResponse> = this.sectorsObservable.asObservable()
    private subsectorObservable: Subject<SubsectorsResponse> = new Subject<SubsectorsResponse>()
    subsectorObsevable$: Observable<SubsectorsResponse> = this.subsectorObservable.asObservable()

    private bleachingObservable: Subject<BleachingResponse> = new Subject<BleachingResponse>()
    bleachingObservable$: Observable<BleachingResponse> = this.bleachingObservable.asObservable()
    private diseasesObservable: Subject<DiseasesResponse> = new Subject<DiseasesResponse>()
    diseasesObservable$: Observable<DiseasesResponse> = this.diseasesObservable.asObservable()


    private postsTableObservable: Subject<SearchPostResponse> = new Subject<SearchPostResponse>()
    postsTableObservable$: Observable<SearchPostResponse> = this.postsTableObservable.asObservable()

    constructor(private http: Http) {
        console.info('search-posts module loaded')
    }

    // TODO: utilizar los métodos de NewPostService
    public getCoralTypes() {

        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(Main.serverUrl + 'getTipCorales.php', options).map(this.extractData).subscribe(
            CoralTypes => {

                if (CoralTypes.success) {
                    this.coralTypesObservable.next(CoralTypes)
                } else {
                    console.error("Could not fetch CoralTypes because: " + CoralTypes.reason)
                }
            });
    }

    public getCoralSpecies() {
        let typeID = -1
        let coralType = new CoralSpeciesRequest(typeID)
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });

        console.warn(JSON.stringify(coralType))
        this.http.post(Main.serverUrl + 'getEspecies.php', JSON.stringify(coralType), options)
            .map(this.extractData)
            .subscribe(
            coralSpecies => {
                if (coralSpecies.success) {
                    this.coralSpeciesObservable.next(coralSpecies)
                } else {
                    console.error("Could not fetch CoralSpecies because: " + coralSpecies.reason)
                }
            })
    }

    getSectors() {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(Main.serverUrl + 'getSectores.php', options)
            .map(this.extractData)
            .subscribe(sectors => {
                if (sectors.success) {
                    this.sectorsObservable.next(sectors)
                } else {
                    console.error("Could not fetch sectors because: " + sectors.reason)
                }
            })
    }

    getSubsectors() {
        let idSector = -1
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        let sector = new SubsectorsRequest(idSector)

        this.http.post(Main.serverUrl + 'getSubSectores.php', JSON.stringify(sector), options)
            .map(this.extractData)
            .subscribe(subsectors => {
                if (subsectors.success) {
                    this.subsectorObservable.next(subsectors)
                } else {
                    console.error('Could not fetch subsectors because: ' + subsectors.reason)
                }
            })
    }

    getBleaching() {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(Main.serverUrl + 'getCatBlanq.php', options)
            .map(this.extractData)
            .subscribe(bleachings => {

                if (bleachings.success) {
                    this.bleachingObservable.next(bleachings)
                } else {
                    console.error("Could not fetch bleaching because: " + bleachings.reason)
                }
            })
    }

    getDiseases() {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(Main.serverUrl + 'getEnfermedades.php', options)
            .map(this.extractData)
            .subscribe(diseases => {

                if (diseases.success) {
                    this.diseasesObservable.next(diseases)
                } else {
                    console.error("Could not fetch diseases because: " + diseases.reason)
                }
            })
    }

    private extractData(res: Response) {
        console.info('Response: ' + res.text())
        let responseJSON = res.json();
        return responseJSON;
    }

    getTableData(page: number, startDate: Date, endDate: Date, TipCoral: number[], Especie: number[], Sector: number[], SubSector: number[]) {
        let body: SearchPostRequest = {
            "curpage": page,
            "inicio": "",
            "final": "",
            "TipCoral": TipCoral,
            "Especie": Especie,
            "Sector": Sector,
            "SubSector": SubSector
        }

        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        console.info('Request: ' + JSON.stringify(body))
        this.http.post(Main.serverUrl + 'buscar.php', JSON.stringify(body), options)
            .map(this.extractData)
            .subscribe(tableResponse => {
                if (tableResponse.success) {
                    this.postsTableObservable.next(tableResponse)
                } else {
                    console.error('Could not fetch Posts because: ' + tableResponse.reason)
                }
            })
    }
}
