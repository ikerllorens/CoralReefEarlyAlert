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

import {Component, OnInit} from '@angular/core'
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS, CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {MainScreenService} from '../main-app.service/main-app.service'
import {SearchPostsService} from '../search-posts.service/search-posts.service'

import {SelectElement} from '../classes/PostObject.class/PostObject.class'
import {SearchPostResponse} from '../classes/InfoObject/InfoObject'

import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select'

@Component({
    selector: "search-posts",
    providers: [SearchPostsService],
    directives: [PAGINATION_DIRECTIVES, SELECT_DIRECTIVES, MODAL_DIRECTVES, CAROUSEL_DIRECTIVES],
    viewProviders: [BS_VIEW_PROVIDERS],
    templateUrl: 'app/search-posts.component/search-posts.component.html'
})

export class SearchPostsScreen implements OnInit {
    public date: Date = new Date('2016-06-30 15:56:14')
    public tableRows: SearchPostResponse[] = []
    public coralTypes: SelectElement[] = []
    public coralSpecies: SelectElement[] = []
    public sectors: SelectElement[] = []
    public subSectors: SelectElement[] = []

    public selectedPhotos = []


    public maxSize: number = 6;
    public bigCurrentPage: number = 1;
    public bigTotalItems: number = 1

    constructor(private searchPostsService: SearchPostsService, private mainScreenService: MainScreenService) {
        console.info('search-posts module loaded')
        this.searchPostsService.coralTypesObservable$.subscribe(
            items => {
                this.coralTypes = items.datos
            })

        this.searchPostsService.coralSpeciesObservable$.subscribe(
            items => {
                this.coralSpecies = items.datos
            })

        this.searchPostsService.sectorsObservable$.subscribe(
            items => {
                this.sectors = items.datos
            })

        this.searchPostsService.subsectorObsevable$.subscribe(
            items => {
                this.subSectors = items.datos
            })
    }

    ngOnInit() {
        this.searchPostsService.getCoralTypes()
        this.searchPostsService.getCoralSpecies()
        this.searchPostsService.getSectors()
        this.searchPostsService.getSubsectors()
        this.populateTable()
    }

    refreshValueType(event: any) {

    }

    refreshValueSpecies(event: any) {

    }

    refreshValueSector(event: any) {

    }

    refreshValueSubsector(event: any) {

    }

    showPhotos(index: number)  {
        this.selectedPhotos = this.tableRows[index].photos
    }

    public populateTable() {
        this.tableRows.push({
            "postDate": new Date('2016-06-30 15:56:14'),
            "coralType": "Coral de Fuego",
            "coralSpecies": "Coralis Fueguis",
            "sector": "Akumal Norte",
            "subsector": "Sector1",
            "diseases": [
                {
                    "name": "gripe corálica",
                    "percentage": 23
                },
                {
                    "name": "viruela corálica",
                    "percentage": 43
                },
                {
                    "name": "posesión diabólica corálica",
                    "percentage": 23
                },
                {
                    "name": "banda roja",
                    "percentage": 23
                }
            ],
            "bleaching": [
                {
                    "name": "parcial",
                    "percentage": 21
                }
            ],
            "photos": ["hello", "nunca"],
            "comments": "hasta crees"
        })
        this.tableRows.push({
            "postDate": new Date('2016-06-28 15:56:14'),
            "coralType": "Coral de Fuego",
            "coralSpecies": "Coralis Fueguis",
            "sector": "Akumal Norte",
            "subsector": "Sector1",
            "diseases": [],
            "bleaching": [],
            "photos": ["uploads/15/235b32801f9346071cbb3a3af0eee34b.jpg", "uploads/15/a88810c40bf6df34c915831eb75db771.jpeg"],
            "comments": "hasta crees"
        })
        this.tableRows.push({
            "postDate": new Date('2016-06-29 15:56:14'),
            "coralType": "Cerebro",
            "coralSpecies": "Cerebris Tontus",
            "sector": "Akumal Norte",
            "subsector": "Sector1",
            "diseases": [],
            "bleaching": [],
            "photos": ["hello", "nunca"],
            "comments": "hasta crees"
        })
        this.tableRows.push({
            "postDate": new Date('2016-06-20 15:56:14'),
            "coralType": "Coral de Fuego",
            "coralSpecies": "Coralis Fueguis",
            "sector": "Akumal Norte",
            "subsector": "Sector1",
            "diseases": [],
            "bleaching": [],
            "photos": ["hello", "nunca"],
            "comments": "hasta crees"
        })
        this.bigTotalItems = this.tableRows.length
    }
}