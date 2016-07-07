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
import {SearchPostResponse, SearchPostTable} from '../classes/InfoObject.class/InfoObject.class'

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
    public tableRows: SearchPostTable[] = []
    public coralTypes: SelectElement[] = []
    private coralTypeFilters: number[] = []
    public coralSpecies: SelectElement[] = []
    private coralSpeciesFilters: number[] = []
    public sectors: SelectElement[] = []
    private sectorsFilters: number[] = []
    public subSectors: SelectElement[] = []
    private subSectorsFilters: number[] = []

    public selectedPhotos = []

    public itemsPerPage: number = 10
    public maxSize: number = 7;
    public bigCurrentPage: number = 1;
    public bigTotalItems: number = 0
    
    startDate: string = ""
    endDate: string = ""

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

        this.searchPostsService.postsTableObservable$.subscribe(
            postsData => {
                this.bigTotalItems = (postsData.paginas * this.itemsPerPage)
                this.tableRows = postsData.datos
            })
    }

    ngOnInit() {
        this.searchPostsService.getCoralTypes()
        this.searchPostsService.getCoralSpecies()
        this.searchPostsService.getSectors()
        this.searchPostsService.getSubsectors()
        this.searchPostsService.getTableData(1, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters)
    
    }

    refreshValueType(event: SelectElement[]) {        
        if(event) {
            this.coralTypeFilters = event.map(IDs => { return IDs.id})
            console.info(this.coralTypeFilters)
        } else {
            this.coralTypeFilters = []
        }
    }

    refreshValueSpecies(event: SelectElement[]) {
        if(event) {
            this.coralSpeciesFilters = event.map(IDs => { return IDs.id})
            console.info(this.coralSpeciesFilters)
        } else {
            this.coralSpeciesFilters = []
        }
    }

    refreshValueSector(event: SelectElement[]) {
        if(event) {
            this.sectorsFilters = event.map(IDs => { return IDs.id})
            console.info(this.sectorsFilters)
        } else {
            this.sectorsFilters = []
        }
    }

    refreshValueSubsector(event: SelectElement[]) {
        if(event) {
            this.subSectorsFilters = event.map(IDs => { return IDs.id})
            console.info(this.subSectorsFilters)
        } else {
            this.subSectorsFilters = []
        }
    }

    showPhotos(index: number) {
        //{ruta: "../.."/xx.jpg}
        this.selectedPhotos = this.tableRows[index].fotos.map(routes => {return routes.ruta})
        console.info(this.selectedPhotos)
    }
    
    changePage(pagenumber: any) {
        console.warn(pagenumber.page)
        this.searchPostsService.getTableData(pagenumber.page, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters)
    }
    
    applyFilters() {
            this.searchPostsService.getTableData(1, new Date('2016-06-28 15:56:14'), new Date('2016-06-28 15:56:14'), this.coralTypeFilters, this.coralSpeciesFilters, this.sectorsFilters, this.subSectorsFilters)
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
                    "nombre": "gripe corálica",
                    "percentage": "23"
                },
                {
                    "nombre": "viruela corálica",
                    "percentage": "43"
                },
                {
                    "nombre": "posesión diabólica corálica",
                    "percentage": "23"
                },
                {
                    "nombre": "banda roja",
                    "percentage": "23"
                }
            ],
            "bleaching": [
                {
                    "nombre": "parcial",
                    "percentage": "21"
                }
            ],
            "fotos": ["hello", "nunca"],
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
            "fotos": ["uploads/15/235b32801f9346071cbb3a3af0eee34b.jpg", "uploads/15/a88810c40bf6df34c915831eb75db771.jpeg"],
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
            "fotos": ["hello", "nunca"],
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
            "fotos": ["hello", "nunca"],
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
            "fotos": ["hello", "nunca"],
            "comments": "hasta crees"
        })
       
        //this.bigTotalItems = this.tableRows.length
    }
}