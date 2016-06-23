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
import {MainScreenService} from '../main-app.service/main-app.service'
import {NewPostService} from '../new-post.service/new-post.service'
//import {SelectOptions} from '../select-options.component/select-options.component'

import {SelectElement} from '../classes/PostObject.class/PostObject.class'

import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import {BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select'

@Component({
    selector: 'new-post',
    templateUrl: 'app/new-post.component/new-post.component.html',
    providers: [NewPostService],
    directives: [ROUTER_DIRECTIVES, SELECT_DIRECTIVES]
})

export class NewPostScreen implements OnInit {
    public CoralType: Array<SelectElement> = [
        { "id": -1, "text": 'Cargando...' }
    ]
    private value: any = {};

    constructor(private mainScreenService: MainScreenService, private newPostService: NewPostService, private router: Router) {
        console.info('new-post module loaded')
        this.newPostService.coralTypesObservable$.subscribe(
            items => {
                this.CoralType = items.datos
            })
    }

    ngOnInit() {
        this.newPostService.getCoralTypes()
    }
    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
}