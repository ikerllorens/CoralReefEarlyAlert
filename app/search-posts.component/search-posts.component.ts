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

import {MainScreenService} from '../main-app.service/main-app.service'
import {SearchPostsService} from '../search-posts.service/search-posts.service'

import {SelectElement} from '../classes/PostObject.class/PostObject.class'
import {SearchPostResponse} from '../classes/InfoObject/InfoObject'

import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select'

@Component({
    selector: "search-posts",
    providers: [SearchPostsService],
    directives: [PAGINATION_DIRECTIVES, SELECT_DIRECTIVES],
    templateUrl: 'app/search-posts.component/search-posts.component.html'
})

export class SearchPostsScreen implements OnInit {
    public date: Date = new Date('2016-06-30 15:56:14')
    public tableRows: SearchPostResponse[] = []
    public coralTypes: SelectElement[] = []

    constructor(private searchPostsService: SearchPostsService, private mainScreenService: MainScreenService) {
        console.info('search-posts module loaded')
        this.searchPostsService.coralTypesObservable$.subscribe(
            items => {
                this.coralTypes = items.datos
            })
    }

    ngOnInit() {
        this.searchPostsService.getCoralTypes()
        this.populateTable()
    }

    refreshValueType(event: any) {
        
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
            "photos": ["hello", "nunca"],
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
    }


}