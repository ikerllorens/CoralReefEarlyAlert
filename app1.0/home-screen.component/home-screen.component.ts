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

import {Component, OnInit} from '@angular/core';

import {DataCard} from '../data-card.component/data-card.component';

import {HomeScreenService} from '../home-screen.service/home-screen.service'

import { SearchPostTable} from '../classes/InfoObject.class/InfoObject.class'


@Component({
    selector: 'home-screen',
    directives:  [DataCard],
    providers: [HomeScreenService],
    templateUrl: 'app/home-screen.component/home-screen.component.html'
})

export class HomeScreen implements OnInit {
    public tableRows: SearchPostTable[] = []

    constructor(private homeScreenService: HomeScreenService) {
        this.homeScreenService.postsTableObservable$.subscribe(
            tableData => {
                this.tableRows = tableData.datos
            })
    }

    ngOnInit() {
        this.homeScreenService.getPosts()
    }
}

